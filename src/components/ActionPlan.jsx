import "../css/actionPlan.css";

const icons = {
    CEO: "👨‍💼",
    CFO: "💰",
    CMO: "📈",
    COO: "⚙️"
};

export default function ActionPlan({ analysis }) {

    if (!analysis || !analysis.actionPlan) return null;

    return (
        <div className="action-plan">

            <div className="action-header">

                <h2>📅 30-Day Executive Action Plan</h2>

                <p>
                    AI-generated roadmap based on your uploaded business report.
                </p>

            </div>

            <div className="timeline">

                {analysis.actionPlan.map((task, index) => (

                    <div
                        key={index}
                        className={`action-card ${task.priority.toLowerCase()}`}
                    >

                        <div className="action-top">

                            <span className="priority">
                                {task.priority}
                            </span>

                            <span className="week">
                                {task.day}
                            </span>

                        </div>

                        <div className="executive">

                            <span className="icon">
                                {icons[task.executive]}
                            </span>

                            <span>
                                {task.executive}
                            </span>

                        </div>

                        <h3>{task.title}</h3>

                        <p>{task.description}</p>

                    </div>

                ))}

            </div>

        </div>
    );

}