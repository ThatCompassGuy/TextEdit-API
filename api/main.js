const path = require("path");

function main(req, res) {
    res.sendFile(path.join(__dirname, "..", "html", "mainpage.html"));
}

module.exports = main;