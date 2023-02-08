const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports = (req, res, next) => {
    if(process.env.CONSOLE_LOG){console.log("MIDDLEWARE : auth")}
    // console.log("TEST NOM: "+req.headers['alagaesia-api-key'])
    if(req.headers['alagaesia-api-key'])    
    {
        // console.log(req.headers);
        let token = req.headers['alagaesia-api-key'];
        // console.log("TOKEN: "+token);
        let result = jwt.verify(token, process.env.JWT_KEY)
        // console.log(result);

        if(result.id){
            next()
        }
        else{
            res.status(400).json({message : "token invalid"})
        }
    }
    else{
        res.status(401).json({message : "unauthorized request"})
    }
        
}