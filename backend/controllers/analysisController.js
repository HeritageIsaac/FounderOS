const { parseFile } = require("../services/fileParser");
const { analyzeWithAI } = require("../services/aiService");

exports.analyzeBusiness = async (req, res) => {
    try {

        // Check if a file was uploaded
        if (!req.files || !req.files.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded."
            });
        }

        const file = req.files.file;

        console.log("========== FILE RECEIVED ==========");
        console.log("Name:", file.name);
        console.log("Type:", file.mimetype);
        console.log("Size:", file.size);

        // Read the uploaded file
        const report = await parseFile(file);

        console.log("========== REPORT ==========");
        console.log(report);

        // Later we'll replace this with AI
        /*
        const analysis = await analyzeWithAI(report);

        return res.json({
            success: true,
            analysis
        });
        */
        const analysis = await analyzeWithAI(report);

        return res.status(200).json({
            success: true,
            analysis
        });

    } catch (err) {

        console.error("Analysis Error:", err);

        return res.status(500).json({
            success: false,
            message: err.message || "Internal Server Error"
        });

    }
};