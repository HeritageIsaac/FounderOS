import { useState } from "react";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import UploadBox from "../components/UploadBox";
import BusinessChart from "../components/BusinessChart";
import HealthScore from "../components/HealthScore";
import ExecutiveBrief from "../components/ExecutiveBrief";
import ExecutiveChat from "../components/ExecutiveChat";
import ExecutiveBoard from "../components/ExecutiveBoard";
import ActionPlan from "../components/ActionPlan";

import "../css/dashboard.css";

export default function Dashboard() {
    
    const [analysis, setAnalysis] = useState(null);
    const [report, setReport] = useState("");
    console.log("Analysis:", analysis);
    return (

        <div className="dashboard">

            <Sidebar />

            <main className="content">

                <Topbar />


                <ExecutiveBrief analysis={analysis} />
                {/* Statistics */}

                <div className="stats">

                    <StatCard
                        title="Revenue"
                        value={
                            analysis
                                ? analysis.revenue
                                : "--"
                        }
                        color="#22c55e"
                    />

                    <StatCard
                        title="Profit"
                        value={
                            analysis
                                ? analysis.profit
                                : "--"
                        }
                        color="#3b82f6"
                    />

                    <StatCard
                        title="Health Score"
                        value={
                            analysis
                                ? `${analysis.healthScore}%`
                                : "--"
                        }
                        color="#f59e0b"
                    />

                    <StatCard
                        title="Risk Level"
                        value={
                            analysis
                                ? analysis.riskLevel
                                : "--"
                        }
                        color="#ef4444"
                    />

                </div>
                {/* Charts */}

                <div className="analytics">

                    <BusinessChart analysis={analysis} />

                    <HealthScore analysis={analysis} />

                </div>

                {/* Upload */}

                <UploadBox setAnalysis={setAnalysis} setReport={setReport} />
                {/* Executive Board */}

                <ExecutiveBoard analysis={analysis} />

                <ActionPlan analysis={analysis} />
                <ExecutiveChat analysis={analysis} report={report} />
                {/* AI Chat */}


            </main>

        </div>

);

}