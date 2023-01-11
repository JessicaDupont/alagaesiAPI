const express = require('express');
const router = express.Router();
require('dotenv').config();

//require middlewares

//require routers par controller

//utilisation
router.get("/", function(req, res){res.send('Hello World')});
router.get("/api/"+process.env.VERSION+"/", function(req, res){res.send('Hello World')});

module.exports = router;