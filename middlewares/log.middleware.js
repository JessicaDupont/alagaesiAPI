const LogsModel = require("../models/log.model")


module.exports = (req, res, next) => {
    
    // console.log("Access : " + req.method + " - With URL : " + req.url + " - At : " + new Date().toUTCString())
    LogsModel.create("Access : " + req.method + " - With URL : " + req.url).then(_ => {})
    next()
} 