const dbConnect = require("../context/database/connect2db").get();
let nomModel = "typesOeuvresModel";

const typesOeuvresModel = {
    getAll : () =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getTypesOeuvre")}
        return dbConnect.then((db) =>{
            return db.query(
                'select * '
                +'from types_oeuvres')
        })
    }
}

module.exports = typesOeuvresModel;