console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router");

// MongoDB chaqirish

//1: kirish code
//Express middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2:Session code

//3:View code
app.set("views", "views");
app.set("view engine", "ejs");

//4:Routing code
app.use("/",router);

module.exports = app;
