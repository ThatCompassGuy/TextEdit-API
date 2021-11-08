function encode(req, res) {
    res.send(Buffer.from(req.query["q"]).toString("base64"));
}

module.exports = encode;