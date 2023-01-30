const jwt = require("jsonwebtoken")
require("dotenv").config()

module.exports = (req, res, next) => {

    // console.log(req.headers)
    if(req.headers["authorization"])    
    {
        // console.log(req.headers);
        let token = req.headers["authorization"].replace(/^Bearer\s+/, "");
        // console.log(token);
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