function lower(req, res) {
    res.send(req.query["q"].toLowerCase());
}

module.exports = lower;