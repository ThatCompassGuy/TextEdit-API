function vaporwave(req, res) {
    const results = [];
    req.query["q"].split("").map((char) => {
        const code = char.charCodeAt(0);
        if (code >= 33 && code <= 126) {
            results.push(String.fromCharCode((code - 33) + 65281));
        } else {
            results.push(char);
        }
    });
    console.log(results.join(""));
    res.send(results.join(""));
}

module.exports = vaporwave;