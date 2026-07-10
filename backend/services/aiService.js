async function analyzeWithAI(report) {

    console.log("========== REPORT RECEIVED ==========");
    console.log(report);

    let healthScore = 75;

    const lowerReport = report.toLowerCase();

    if (lowerReport.includes("profit")) {
        healthScore += 10;
    }

    if (lowerReport.includes("growth")) {
        healthScore += 10;
    }

    if (lowerReport.includes("loss")) {
        healthScore -= 35;
    }

    healthScore = Math.max(0, Math.min(100, healthScore));

    // Company Name
    let companyName = "Unknown Company";

    const companyMatch = report.match(/Company:\s*(.*)/i);

    if (companyMatch) {
        companyName = companyMatch[1].trim();
    }

    // Revenue
    let revenue = "Unknown";

    const revenueMatch = report.match(
        /Total Revenue,[^,]+,[^,]+,[^,]+,([\d.]+)/i
    );

    if (revenueMatch) {
        revenue = `$${(Number(revenueMatch[1]) / 1000000).toFixed(2)}M`;
    }

    // Profit
    let profit = "Unknown";

    const profitMatch = report.match(
        /Net Profit,[^,]+,[^,]+,[^,]+,([\d.]+)/i
    );

    if (profitMatch) {
        profit = `$${(Number(profitMatch[1]) / 1000).toFixed(0)}K`;
    }

    return {

        companyName,

        revenue,

        profit,

        healthScore,

        riskLevel: healthScore >= 80 ? "Low" : "Medium",

        ceo: {
            name: "Atlas",
            advice: `The business generated ${revenue} in revenue. Continue focusing on sustainable growth and customer retention.`
        },

        cfo: {
            name: "Ledger",
            advice: `Net profit reached ${profit}. Monitor expenses and maintain strong cash flow.`
        },

        cmo: {
            name: "Pulse",
            advice: "Marketing performance is improving. Increase investment in your best-performing regions."
        },

        coo: {
            name: "Forge",
            advice: "Automate repetitive operational tasks to improve efficiency."
        },

        growthPlan: [
            "Expand into one new market",
            "Reduce operational costs by 10%",
            "Improve customer retention",
            "Review KPIs every week"
        ]
    };

}

async function askExecutive(executive, question) {

    const answers = {

        CEO: "As CEO, I recommend prioritizing sustainable growth, innovation, and long-term competitive advantage.",

        CFO: "As CFO, I recommend reducing operational costs, improving cash flow, and protecting profit margins.",

        CMO: "As CMO, I recommend increasing customer acquisition, strengthening your brand, and improving retention.",

        COO: "As COO, I recommend improving operational efficiency, automating repetitive work, and optimizing internal processes."

    };

    return {
        executive,
        question,
        answer: answers[executive] || "Executive not found."
    };

}

module.exports = {
    analyzeWithAI,
    askExecutive
};