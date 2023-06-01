const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");

// memberga dahldor routerlar
router.post("/signup",  memberController.signup);
router.post("/login",  memberController.login);
router.get("/logout",  memberController.logout);

// others
router.get("/menu", function (req, res) {
    res.send("Menu sahifadasiz");
});

router.get("/comunity", function (req, res) {
    res.send("Jamiyat bo'limidasiz");
});

module.exports = router;