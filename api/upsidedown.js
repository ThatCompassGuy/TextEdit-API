function upsidedown(req, res) {
    const replacements = {
        a: "ɐ",
        b: "q",
        c: "ɔ",
        d: "p",
        e: "ǝ",
        f: "ⅎ",
        g: "ƃ",
        h: "ɥ",
        i: "ᴉ",
        j: "ɾ",
        k: "ʞ",
        l: "ʅ",
        m: "ɯ",
        n: "u",
        o: "o",
        p: "d",
        q: "b",
        r: "ɹ",
        s: "s",
        t: "ʇ",
        u: "n",
        v: "ʌ",
        w: "ʍ",
        x: "x",
        y: "ʎ",
        z: "z",
        A: "∀",
        B: "ꓭ",
        C: "Ͻ",
        D: "ᗡ",
        E: "Ǝ",
        F: "ᖵ",
        G: "⅁",
        H: "H",
        I: "I",
        J: "ᒋ",
        K: "ꓘ",
        L: "⅂",
        M: "W",
        N: "N",
        O: "O",
        P: "Ԁ",
        Q: "Ꝺ",
        R: "ꓤ",
        S: "S",
        T: "ꓕ",
        U: "Ո",
        V: "Ʌ",
        W: "M",
        X: "X",
        Y: "⅄",
        Z: "Z",
        1: "⇂",
        2: "↊",
        3: "↋",
        4: "ߤ",
        5: "5",
        6: "9",
        7: "𝘓",
        8: "8",
        9: "6",
        0: "0",
    };

    const results = [];
    req.query["q"].split("").map((char) => {
        results.push(replacements[char] || char);
    });

    res.send(results.reverse().join(""));
}

module.exports = upsidedown;