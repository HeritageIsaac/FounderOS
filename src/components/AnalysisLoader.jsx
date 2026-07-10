import "../css/analysisLoader.css";

const messages = [
    "CEO reviewing company strategy...",
    "CFO analyzing financial performance...",
    "CMO evaluating market opportunities...",
    "COO optimizing business operations...",
    "Preparing Executive Board..."
];

export default function AnalysisLoader({ show, step }) {

    if (!show) return null;

    return (

        <div className="analysis-loader">

            <div className="loader-circle"></div>

            <h2>🧠 AI Executive Board is meeting...</h2>

            <p className="loader-subtitle">
                FounderOS is analyzing your business report.
            </p>

            <div className="steps">

                {messages.map((msg, index) => (

                    <p
                        key={index}
                        className={index <= step ? "active" : ""}
                    >
                        {index <= step ? "✔" : "⏳"} {msg}
                    </p>

                ))}

            </div>

        </div>

    );

}