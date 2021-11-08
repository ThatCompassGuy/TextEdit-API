function upper(req, res) {
    res.send(req.query["q"].toUpperCase());
}

module.exports = upper;