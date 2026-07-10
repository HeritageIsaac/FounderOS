import { useState } from "react";
import "../css/actionPlan.css";

export default function ActionPlan({ analysis }) {

    const [completed, setCompleted] = useState({});

    if (!analysis) return null;

    const toggle = (index) => {
        setCompleted(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (

        <div className="action-plan">

            <h2>📅 30-Day Executive Action Plan</h2>

            {

                analysis.growthPlan.map((task, index) => (

                    <label
                        key={index}
                        className="task"
                    >

                        <input
                            type="checkbox"
                            checked={completed[index] || false}
                            onChange={() => toggle(index)}
                        />

                        <span>{task}</span>

                    </label>

                ))

            }

        </div>

    );

}