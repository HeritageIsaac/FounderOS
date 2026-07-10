const express = require("express");

const router = express.Router();

const {
    analyzeBusiness
} = require("../controllers/analysisController");

router.post("/analyze", analyzeBusiness);

module.exports = router;