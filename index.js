const express = require("express");
const app = express();
const port = 3000 || 3001;
const fs = require("fs");

fs.readdir("./api", (err, data) => {
    if (err) throw err;
    data.forEach((file) => {
        const split = file.split(".");
        if (split[1] === "js") {
            app.get(split[0] === "main" ? "/" : `/${split[0]}`, (req, res) => {
                require("./api/" + file)(req, res);
            });
        }
    });
});

app.listen(port);