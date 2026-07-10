import { useState } from "react";
import axios from "axios";
import "../css/upload.css";
import AnalysisLoader from "./AnalysisLoader";

export default function UploadBox({ setAnalysis, setReport }) {

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const [showLoader, setShowLoader] = useState(false);
    const [step, setStep] = useState(0);

    const handleUpload = async () => {

        if (!file) {
            alert("Please choose a file.");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        // Show AI Loader
        setShowLoader(true);
        setStep(0);
        setLoading(true);

        // Animate through the AI steps
        const interval = setInterval(() => {
            setStep((prev) => {
                if (prev >= 4) return prev;
                return prev + 1;
            });
        }, 800);

        try {

            const response = await axios.post(
                "http://localhost:5000/api/analyze",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );

            console.log(response.data);

            // Wait until animation completes
            setTimeout(() => {

                clearInterval(interval);

                setStep(4);

                setAnalysis(response.data.analysis);
                setReport(response.data.report);

                setShowLoader(false);

            }, 4500);

        } catch (err) {

            clearInterval(interval);

            console.error(err);

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
                    Upload a CSV or PDF report.
                </p>

                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <button
                    onClick={handleUpload}
                    disabled={loading}
                >

                    {
                        loading
                            ? "Analyzing..."
                            : "Analyze"
                    }

                </button>

            </div>

            <AnalysisLoader
                show={showLoader}
                step={step}
            />
        </>

    );

}