import "../css/analysisLoader.css";

export default function AnalysisLoader({ show, step }) {

    if (!show) return null;

    const executives = [

        {
            icon: "👔",
            name: "Atlas",
            role: "CEO",
            task: "Reviewing business strategy..."
        },

        {
            icon: "💰",
            name: "Ledger",
            role: "CFO",
            task: "Analyzing financial performance..."
        },

        {
            icon: "📈",
            name: "Pulse",
            role: "CMO",
            task: "Evaluating marketing opportunities..."
        },

        {
            icon: "⚙️",
            name: "Forge",
            role: "COO",
            task: "Optimizing operations..."
        }

    ];

    return (

        <div className="loader-overlay">

            <div className="loader-card">

                <div className="brain">
                    🧠
                </div>

                <h2>FounderOS AI Executive Board</h2>

                <p>
                    Your executive team is analyzing your business...
                </p>

                <div className="executive-loader">

                    {

                        executives.map((exec,index)=>(

                            <div
                                key={exec.name}
                                className="executive-row"
                            >

                                <div className="left">

                                    <span className="avatar">

                                        {exec.icon}

                                    </span>

                                    <div>

                                        <strong>

                                            {exec.name}

                                        </strong>

                                        <small>

                                            {exec.role}

                                        </small>

                                    </div>

                                </div>

                                <div className="right">

                                    {

                                        step > index

                                        ?

                                        <span className="done">

                                            ✔

                                        </span>

                                        :

                                        step === index

                                        ?

                                        <span className="working">

                                            ⏳

                                        </span>

                                        :

                                        <span className="waiting">

                                            ○

                                        </span>

                                    }

                                </div>

                            </div>

                        ))

                    }

                </div>

                <div className="current-task">

                    {

                        step < executives.length

                        ?

                        executives[step].task

                        :

                        "Generating executive report..."

                    }

                </div>

            </div>

        </div>

    );

}