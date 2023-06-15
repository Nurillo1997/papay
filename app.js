console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router");
const router_bssr = require("./router_bssr.js");

let session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
    uri: process.env.MONGO_URL,
    collection: "sesions",
});

//1: kirish code
//Express middleware


app.use(express.static("public"));//static filelar uchun req kelsa birinchi publicdan istaydi
app.use(express.json()); //json formatidagi requestni handle qilish imkoniyatini beradi
app.use(express.urlencoded({ extended: true }));//encoded formatni handle qilishga yordam beradi

//2:Session code cookiesni ichidagi session id ni sholishtiradi auth bo'layotganda
app.use(
    session({ 
        secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60,
    },
    store: store,//mongodb databasega session documentiga saqlansin
    resave: true,
    saveUninitialized: true,
})
);

app.use(function(req, res, next){
    res.locals.member = req.session.member;
    next();
})

//3:View code
app.set("views", "views");
app.set("view engine", "ejs");

//4:Routing code
app.use("/resto",router_bssr);// CLASSIC API
app.use("/",router); //REST API with react

module.exports = app;
