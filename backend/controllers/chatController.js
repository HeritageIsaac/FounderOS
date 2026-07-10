const { askExecutive } = require("../services/aiService");

exports.chat = async (req, res) => {

    try {

        const { executive, question } = req.body;

        if (!executive || !question) {

            return res.status(400).json({

                success: false,

                message: "Executive and question are required."

            });

        }

        const answer = await askExecutive(executive, question);

        res.json({

            success: true,

            answer

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};