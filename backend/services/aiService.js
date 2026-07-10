async function analyzeWithAI(report) {

    console.log("========== REPORT RECEIVED ==========");
    console.log(report);

    let healthScore = 87;

    // Simple mock intelligence
    if (report.toLowerCase().includes("loss")) {
        healthScore = 45;
    }

    if (report.toLowerCase().includes("profit")) {
        healthScore = 92;
    }

    return {

        healthScore,

        riskLevel:
            healthScore >= 80 ? "Low" :
            healthScore >= 60 ? "Medium" :
            "High",

        ceo: {
            summary: "Revenue trends are positive, but customer acquisition should be improved.",
            priority: "Expand into new markets while improving customer retention."
        },

        cfo: {
            summary: "Operating expenses are relatively high.",
            priority: "Reduce unnecessary recurring costs and improve cash flow."
        },

        cmo: {
            summary: "Marketing performance is average.",
            priority: "Increase digital campaigns and improve conversion rates."
        },

        coo: {
            summary: "Business operations are stable.",
            priority: "Automate repetitive tasks and improve workflow efficiency."
        },

        growthPlan: [
            "Reduce operational costs by 10%",
            "Launch a customer referral program",
            "Expand into one new market",
            "Track KPIs weekly using FounderOS"
        ]

    };

}

async function askExecutive(executive, question) {

    const answers = {

        CEO:
            "As CEO, I recommend prioritizing sustainable growth, innovation, and long-term competitive advantage.",

        CFO:
            "As CFO, I recommend reducing operational costs, improving cash flow, and protecting profit margins.",

        CMO:
            "As CMO, I recommend increasing customer acquisition, strengthening your brand, and improving retention.",

        COO:
            "As COO, I recommend improving operational efficiency, automating repetitive work, and optimizing internal processes."

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