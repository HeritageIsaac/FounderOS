const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const analysisRoute = require("./routes/analysisRoute");
const chatRoute = require("./routes/chatRoute");
const app = express();

app.use(cors({
    origin: [
        "http://localhost:5173"
    ],
    methods: ["GET", "POST"]
})); app.use(express.json());
app.use(fileUpload());

app.get("/", (req, res) => {
    res.json({
        message: "FounderOS API Running 🚀"
    });
});

app.use("/api", analysisRoute);
app.use("/api", chatRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});