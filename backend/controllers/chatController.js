const aiService = require("../services/aiService");

console.log("AI SERVICE EXPORTS:", aiService);

const { askExecutive } = aiService; 

exports.chat = async (req, res) => {
    try {
        const { executive, question, report } = req.body;

        const answer = await askExecutive(
            executive,
            question,
            report
        );

        res.json({
            success: true,
            answer
        });

    } catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};