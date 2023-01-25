const dbConnect = require("../context/database/connect2db").get();
let nomModel = "typesFichesModel";

const typesFichesModel = {
    getAll : () =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAll")}
        return dbConnect.then((db) =>{
            return db.query(
                'select * '
                +'from types_fiches')
        })
    }
}

module.exports = typesFichesModel;