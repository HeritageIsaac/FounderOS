import "../css/executiveBrief.css";

export default function ExecutiveBrief({ analysis }) {

    if (!analysis) {

        return (

            <div className="executive-brief">

                <h2>🧠 AI Executive Summary</h2>

                <p>
                    Upload a business report to receive an AI-powered executive briefing.
                </p>

            </div>

        );

    }

    return (

        <div className="executive-brief">

            <h2>🧠 AI Executive Summary</h2>

            <p>

                FounderOS analyzed your business and generated recommendations
                from your AI Executive Board.

            </p>

            <div className="brief-grid">

                <div>

                    <h3>Business Health</h3>

                    <p>{analysis.healthScore}%</p>

                </div>

                <div>

                    <h3>Risk Level</h3>

                    <p>{analysis.riskLevel}</p>

                </div>

            </div>

            <h3>Recommended First Action</h3>

            <p>

                {analysis.growthPlan[0]}

            </p>

        </div>

    );

}