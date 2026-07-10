import "../css/executiveCard.css";

export default function ExecutiveCard({
    name,
    role,
    advice
}) {

    const getAvatar = () => {

        switch (name) {

            case "Atlas":
                return "👔";

            case "Ledger":
                return "💰";

            case "Pulse":
                return "📈";

            case "Forge":
                return "⚙️";

            default:
                return "🤖";

        }

    };

    return (

        <div className="executive-card">

            <div className="executive-header">

                <div className="avatar">

                    {getAvatar()}

                </div>

                <div>

                    <h3>{name}</h3>

                    <small>{role}</small>

                </div>

            </div>

            <p>{advice}</p>

            <div className="executive-footer">

                <div className="status">

                    <span className="online"></span>

                    Online

                </div>

                <div className="badge">

                    AI Executive

                </div>

            </div>

        </div>

    );

}