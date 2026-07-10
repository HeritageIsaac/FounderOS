import "../css/healthscore.css";

export default function HealthScore({ analysis }) {

    if (!analysis) {

        return (

            <div className="health-score">

                <h2>Business Health</h2>

                <div className="circle">
                    --
                </div>

                <p>Upload a report to begin analysis.</p>

            </div>

        );

    }

    const score = analysis.healthScore;

    let status = "Healthy";
    let color = "#16a34a";

    if (score < 80) {
        status = "Moderate";
        color = "#f59e0b";
    }

    if (score < 60) {
        status = "Critical";
        color = "#ef4444";
    }

    return (

        <div className="health-score">

            <h2>❤️ Business Health</h2>

            <div
                className="circle"
                style={{
                    border: `8px solid ${color}`,
                    color
                }}
            >
                {score}%
            </div>

            <h3 style={{ color }}>
                {status}
            </h3>

            <div className="health-details">

                <div>
                    <span>Risk Level</span>
                    <strong>{analysis.riskLevel}</strong>
                </div>

                <div>
                    <span>Growth Tasks</span>
                    <strong>{analysis.growthPlan.length}</strong>
                </div>

                <div>
                    <span>AI Confidence</span>
                    <strong>96%</strong>
                </div>

            </div>

        </div>

    );

}