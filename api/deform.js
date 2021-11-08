function deform(req, res) {
    const results = [];
    req.query["q"].split("").map((char, index) => {
        char = index % 2 ? char.toLowerCase() : char.toUpperCase();
        results.push(char);
    });
    res.send(results.join(""));
}

module.exports = deform;