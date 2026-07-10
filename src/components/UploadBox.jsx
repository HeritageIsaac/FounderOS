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

        setLoading(true);
        setShowLoader(true);
        setStep(0);

        // Animate Executive Board steps
        const interval = setInterval(() => {

            setStep((prev) => {

                if (prev >= 4) {
                    clearInterval(interval);
                    return 4;
                }

                return prev + 1;

            });

        }, 800);

        try {

            // Run API request and minimum loading time together
            const [response] = await Promise.all([

                axios.post(
                    "http://localhost:5000/api/analyze",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }
                ),

                new Promise(resolve => setTimeout(resolve, 4500))

            ]);

            console.log(response.data);

            clearInterval(interval);

            setStep(4);

            setAnalysis(response.data.analysis);
            setReport(response.data.report);

            setFile(null);

            setShowLoader(false);

        }

        catch (err) {

            clearInterval(interval);

            console.error(err);

            setShowLoader(false);

            alert("Upload Failed.");

        }

        finally {

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