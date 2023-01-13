const dbConnect = require("../context/database/connect2db").get();
let nomModel = "oeuvresModel";
const fsPromise = require('fs/promises');
const path = require('path');

const oeuvresModel = {
    create : (titre) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".create/"+titre)}
        return dbConnect.then((db) =>{
            return db.query('insert into oeuvres (titre) '
            +'values (?)', [titre])
        })
    },
    getAllTypeOeuvre : () =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAllTypeOeuvre")}
        //TODO
    },
    getAll : () =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAll")}
        return dbConnect.then((db) =>{
            return db.query('select * '
            +'from oeuvres')
        })
    },
    getOne : (id) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getOne/"+id)}
        return dbConnect.then((db) =>{
            return db.query('select *, "personnes" '
            +'from oeuvres '
            +'where oeuvre_id=?', [id])
        })
    },
    update : (id, titre) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".update/"+id+"/"+titre)}
        return dbConnect.then((db) =>{
            return db.query('update oeuvres '
            +'set titre=? '
            +'where oeuvre_id=?', [titre, id])
        })
    },
    delete : (id) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".delete/"+id)}
        return dbConnect.then((db) =>{
            return db.query('delete '
            +'from oeuvres '
            +'where oeuvre_id=?', [id])
        })
    },
}

module.exports = oeuvresModel;