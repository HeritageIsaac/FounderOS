const Groq = require("groq-sdk");

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

// ===============================
// Analyze Business Report
// ===============================
async function analyzeWithAI(report) {

    const prompt = `
You are the AI Executive Board of FounderOS.

The board consists of:

• CEO Atlas
• CFO Ledger
• CMO Pulse
• COO Forge

Analyze the business report below.

Return ONLY valid JSON.

{
  "companyName":"",
  "revenue":"",
  "profit":"",
  "healthScore":0,
  "riskLevel":"",

  "ceo":{
      "name":"Atlas",
      "advice":""
  },

  "cfo":{
      "name":"Ledger",
      "advice":""
  },

  "cmo":{
      "name":"Pulse",
      "advice":""
  },

  "coo":{
      "name":"Forge",
      "advice":""
  },

  "growthPlan":[
      "",
      "",
      "",
      ""
  ],

  "actionPlan":[
      {
          "day":"Week 1",
          "executive":"CEO",
          "title":"",
          "description":"",
          "priority":"High"
      },
      {
          "day":"Week 2",
          "executive":"CFO",
          "title":"",
          "description":"",
          "priority":"Medium"
      },
      {
          "day":"Week 3",
          "executive":"CMO",
          "title":"",
          "description":"",
          "priority":"High"
      },
      {
          "day":"Week 4",
          "executive":"COO",
          "title":"",
          "description":"",
          "priority":"Medium"
      }
  ]
}

The action plan should contain practical tasks the business can complete within the next 30 days.

Business Report:

${report}
`;

    const completion = await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        temperature: 0.8,

        response_format: {
            type: "json_object"
        },

        messages: [
            {
                role: "user",
                content: prompt
            }
        ]
    });

    return JSON.parse(
        completion.choices[0].message.content
    );
}
// ===============================
// Executive Chat
// ===============================
async function askExecutive(executive, question, report = "") {

    console.log("Executive:", executive);
        console.log("Question:", question);

    console.log("✅ askExecutive() called");
    
    let systemPrompt = "";

    switch (executive) {

        case "CEO":

            systemPrompt = `
You are Atlas, the Chief Executive Officer of FounderOS.

Your responsibility is:
- Company strategy
- Long-term vision
- Market positioning
- Innovation
- Leadership
- Competitive advantage

Never answer like a marketing manager.

Avoid discussing ad campaigns unless they affect company strategy.

Think like Satya Nadella and Jeff Bezos.

Give detailed executive-level advice.
`;
            break;

        case "CFO":
            systemPrompt = `
You are Ledger, the Chief Financial Officer.

Your expertise includes:

- Revenue optimization
- Cash flow
- Profitability
- Budget allocation
- Financial forecasting
- Cost reduction
- Investment decisions

Never discuss branding or marketing unless it affects finances.

Answer with numbers, financial logic and business reasoning.
`;
            break;

        case "CMO":

            systemPrompt = `
You are Pulse, the Chief Marketing Officer.

You ONLY answer from a marketing perspective.

Your expertise includes:

- Branding
- Digital marketing
- Customer acquisition
- Customer retention
- Advertising
- Sales funnels
- SEO
- Social media
- Product positioning

Never answer like a CEO.

Always suggest specific marketing strategies.
`;

            break;

        case "COO":

            systemPrompt = `
You are Forge, the Chief Operating Officer.

You specialize in:

- Operations
- Processes
- Automation
- Team productivity
- Internal workflows
- Scaling operations

Never discuss branding or investment unless it directly affects operations.

Think like an operations executive.
`;

            break;

        default:

            systemPrompt = `
You are an experienced business executive.
`;

    }

    const completion = await groq.chat.completions.create({

        model: "llama-3.3-70b-versatile",

        temperature: 0.5,

        messages: [

            {
                role: "system",
                content: systemPrompt
            },

            {
                role: "system",
                content: `Business Report:

${report}`
            },

            {
                role: "user",
                content: question
            }

        ]

    });

    return completion.choices[0].message.content;

}

module.exports = {
    analyzeWithAI,
    askExecutive
};