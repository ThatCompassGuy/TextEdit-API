function decode(req, res) {
    res.send(Buffer.from(req.query["q"], "base64").toString("ascii"));
}

module.exports = decode ;