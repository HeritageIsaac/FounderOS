import "../css/executiveBoard.css";

export default function ExecutiveBoard({ analysis }) {

    if (!analysis) {

        return (

            <div className="executive-board">

                <h2>🏛 AI Executive Board</h2>

                <p>Upload a report to activate your executive board.</p>

            </div>

        );

    }

    const executives = [
        {
            icon: "👔",
            name: "Atlas",
            role: "Chief Executive Officer",
            data: analysis.ceo,
            color: "#2563eb",
            confidence: "96%"
        },
        {
            icon: "💰",
            name: "Ledger",
            role: "Chief Financial Officer",
            data: analysis.cfo,
            color: "#16a34a",
            confidence: "94%"
        },
        {
            icon: "📈",
            name: "Pulse",
            role: "Chief Marketing Officer",
            data: analysis.cmo,
            color: "#ea580c",
            confidence: "91%"
        },
        {
            icon: "⚙️",
            name: "Forge",
            role: "Chief Operating Officer",
            data: analysis.coo,
            color: "#9333ea",
            confidence: "95%"
        }
    ];

    return (

        <div className="executive-board">

            <h2>🏛 AI Executive Board</h2>

            <div className="board-grid">

                {executives.map((exec) => (

                    <div
                        className="executive-card"
                        key={exec.name}
                        style={{
                            borderTop: `6px solid ${exec.color}`
                        }}
                    >

                        <div className="executive-header">

                            <div className="avatar">

                                {exec.icon}

                            </div>

                            <div>

                                <h3>{exec.name}</h3>

                                <p>{exec.role}</p>

                            </div>

                        </div>

                        <div className="executive-section">

                            <h4>📋 Executive Summary</h4>

                            <p>{exec.data.summary}</p>

                        </div>

                        <div className="executive-section">

                            <h4>🎯 Top Priority</h4>

                            <p>{exec.data.priority}</p>

                        </div>

                        <div className="confidence">

                            <span>AI Confidence</span>

                            <strong>{exec.confidence}</strong>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    );

}