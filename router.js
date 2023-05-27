const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("home sahifadasiz");
});

router.get("/menu", function (req, res) {
    res.send("Menu sahifadasiz");
});

router.get("/comunity", function (req, res) {
    res.send("Jamiyat bo'limidasiz");
});

module.exports = router;