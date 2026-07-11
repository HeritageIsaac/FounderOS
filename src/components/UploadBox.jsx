import { useState } from "react";
import axios from "axios";
import "../css/upload.css";
import AnalysisLoader from "./AnalysisLoader";

const API =
    import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function UploadBox({ setAnalysis, setReport }) {

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [step, setStep] = useState(0);

    const handleUpload = async () => {
console.log("🚀 Upload button clicked");
        if (!file) {
            alert("Please choose a file.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        setLoading(true);
        setShowLoader(true);
        setStep(0);

        // Executive Board loading animation
        const interval = setInterval(() => {

            setStep(prev => {

                if (prev >= 4) {
                    clearInterval(interval);
                    return 4;
                }

                return prev + 1;

            });

        }, 800);

        try {

            const [response] = await Promise.all([

                axios.post(
                    `${API}/analyze`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }
                ),

                new Promise(resolve => setTimeout(resolve, 4500))

            ]);

            clearInterval(interval);

            setStep(4);

            console.log("========== BACKEND RESPONSE ==========");
            console.log(response.data);

            console.log("========== ANALYSIS ==========");
            console.log(response.data.analysis);

            console.log("========== ACTION PLAN ==========");
            console.log(response.data.analysis.actionPlan);

            setAnalysis(response.data.analysis);
            setReport(response.data.report);

            setFile(null);
            setShowLoader(false);

        } catch (err) {

            clearInterval(interval);

            console.error("UPLOAD ERROR:", err);

            setShowLoader(false);

            alert("Upload Failed.");

        } finally {

            setLoading(false);

        }

    };

    return (
        <>
            <div className="upload-box">

                <h2>Upload Business Report</h2>

                <p>
                    Upload a CSV report.
                </p>

                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <button
                    onClick={handleUpload}
                    disabled={loading}
                >
                    {loading ? "Analyzing..." : "Analyze"}
                </button>

            </div>

            <AnalysisLoader
                show={showLoader}
                step={step}
            />
        </>
    );

}