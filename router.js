const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");

/******************************************
 *             REST API                   *
 *****************************************/

// memberga dahldor routerlar
router.post("/sign-up",  memberController.signup);
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