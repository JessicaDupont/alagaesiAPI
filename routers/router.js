require('dotenv').config();
const express = require('express');
const router = express.Router();

//require middlewares

//require routers par controller
const personnesRouter = require("./personnes.router");

//utilisation
router.get("/", function(req, res){res.send('Hello World')});
router.use("/personnes", personnesRouter);
    //api/v1
router.get("/api/v1", function(req, res){res.send('Hello API')});
router.use("/api/v1/personnes", personnesRouter);

module.exports = router;