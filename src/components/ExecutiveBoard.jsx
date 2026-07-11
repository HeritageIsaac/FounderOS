import { useEffect, useState } from "react";
import ExecutiveCard from "./ExecutiveCard";
import "../css/executiveBoard.css";

export default function ExecutiveBoard({ analysis }) {

    const [visible, setVisible] = useState(0);

    useEffect(() => {

        if (!analysis) return;

        setVisible(0);

        const timers = [];

        for (let i = 1; i <= 4; i++) {

            timers.push(
                setTimeout(() => {
                    setVisible(i);
                }, i * 700)
            );

        }

        return () => timers.forEach(clearTimeout);

    }, [analysis]);

    if (!analysis) return null;

    return (
    <div className="executive-board">

        <h2>🏛 AI Executive Board</h2>

        <div className="board-grid">

            {visible >= 1 && (
                <ExecutiveCard
                    name={analysis.ceo.name}
                    role="Chief Executive Officer"
                    advice={analysis.ceo.advice}
                />
            )}

            {visible >= 2 && (
                <ExecutiveCard
                    name={analysis.cfo.name}
                    role="Chief Financial Officer"
                    advice={analysis.cfo.advice}
                />
            )}

            {visible >= 3 && (
                <ExecutiveCard
                    name={analysis.cmo.name}
                    role="Chief Marketing Officer"
                    advice={analysis.cmo.advice}
                />
            )}

            {visible >= 4 && (
                <ExecutiveCard
                    name={analysis.coo.name}
                    role="Chief Operating Officer"
                    advice={analysis.coo.advice}
                />
            )}

        </div>

    </div>
);

}