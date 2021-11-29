function encode(req, res) {
    const query = req.query["q"];
    if (!query) {
        return res.send("s");
    }
    
    res.send(Buffer.from(query).toString("base64"));
}

module.exports = encode;