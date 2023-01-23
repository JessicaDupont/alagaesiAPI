require('dotenv').config();
const express = require('express');
const router = express.Router();

//require middlewares

//require routers par controller
const personnesRouter = require("./personnes.router");
const oeuvresRouter = require("./oeuvres.router");
const chapitresRouter = require("./chapitres.router");
const citationsRouter = require("./citations.router");
const fichesRouter = require("./fiches.router");

//utilisation
// router.get("/", function(req, res){res.send('Hello World')});
    //api/v1
router.get("/api/v1", function(req, res){res.send('Hello API')});
router.use("/api/v1/personnes", personnesRouter);
router.use("/api/v1/oeuvres", oeuvresRouter);
router.use("/api/v1/chapitres", chapitresRouter);
router.use("/api/v1/citations", citationsRouter);
router.use("/api/v1/fiches", fichesRouter);

module.exports = router;