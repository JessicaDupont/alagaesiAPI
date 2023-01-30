require('dotenv').config();
const express = require('express');
const router = express.Router();

//require middlewares
const auth = require("../middlewares/auth.middleware");
const log = require("../middlewares/log.middleware");
const authRouter = require("./auth.router");

//require routers par controller
const personnesRouter = require("./personnes.router");
const oeuvresRouter = require("./oeuvres.router");
const chapitresRouter = require("./chapitres.router");
const citationsRouter = require("./citations.router");
const fichesRouter = require("./fiches.router");

//utilisation
router.use(log);
// router.get("/", function(req, res){res.send('Hello World')});
    //api/v1
router.get("/api/v1", function(req, res){res.send('Hello API')});
router.use("/api/v1/auth", authRouter);
router.use("/api/v1/clients", authRouter);
router.use("/api/v1/personnes", auth, personnesRouter);
router.use("/api/v1/oeuvres", auth, oeuvresRouter);
router.use("/api/v1/chapitres", auth, chapitresRouter);
router.use("/api/v1/citations", auth, citationsRouter);
router.use("/api/v1/fiches", auth, fichesRouter);

module.exports = router;