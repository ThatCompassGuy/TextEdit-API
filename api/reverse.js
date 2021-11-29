function reverse(req, res) {
    res.send(req.query["q"].split("").reverse().join(""));
}

module.exports = reverse;