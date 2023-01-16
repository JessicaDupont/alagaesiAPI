const dbConnect = require("../context/database/connect2db").get();
let nomModel = "personnesModel";

const personnesModel = {
    create : (prenoms, nom) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".create/"+prenoms+"/"+nom)}
        return dbConnect.then((db) =>{
            return db.query('insert into personnes (prenoms, nom) '
            +'values (?, ?)', [prenoms, nom])
        })
    },
    getAll : () =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAll")}
        return dbConnect.then((db) =>{
            return db.query('select * '
            +'from personnes')
        })
    },
    getOne : (id) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getOne/"+id)}
        return dbConnect.then((db) =>{
            return db.query('select * '
            +'from personnes '
            +'where personne_id=?', [id])
        })
    },
    update : (id, prenoms, nom) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".update/"+id+"/"+prenoms+"/"+nom)}
        return dbConnect.then((db) =>{
            return db.query('update personnes '
            +'set prenoms=?, nom=? '
            +'where personne_id=?', [prenoms, nom, id])
        })
    },
    delete : (id) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".delete/"+id)}
        return dbConnect.then((db) =>{
            return db.query('delete '
            +'from personnes '
            +'where personne_id=?', [id])
        })
    },
}

module.exports = personnesModel;