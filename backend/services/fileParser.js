async function parseFile(file) {

    // CSV
    if (
        file.mimetype === "text/csv" ||
        file.name.toLowerCase().endsWith(".csv")
    ) {
        return file.data.toString("utf8");
    }

    // TXT
    if (file.mimetype === "text/plain") {
        return file.data.toString("utf8");
    }

    // PDF (temporary until we switch libraries)
    if (file.mimetype === "application/pdf") {
        return "PDF support is temporarily disabled.";
    }

    throw new Error("Unsupported file type.");
}

module.exports = {
    parseFile
};