const dbConnect = require("../context/database/connect2db").get();
let nomModel = "personnesModel";

const personnesModel = {
    create : (prenoms, nom) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".create/"+prenoms+"/"+nom)}
        return dbConnect.then((db) =>{
            return db.query('insert into personnes (prenom, nom) '
            +'values (?, ?)', [prenoms, nom])
        })
    },
    getAll : () =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAll")}
        return dbConnect.then((db) =>{
            return db.query('select * '
            +'from v_personnes')
        })
    },
    getOne : (id) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getOne/"+id)}
        return dbConnect.then((db) =>{
            return db.query('select * '
            +'from v_personnes '
            +'where personne_id=?', [id])
        })
    },
    update : (id, prenoms, nom, dateDN, lieuDN) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".update/"+id+"/"+prenoms+"/"+nom)}
        return dbConnect.then((db) =>{
            return db.query('update personnes '
            +'set prenom=?, nom=?, date_de_naissance=?, lieu_de_naissance=?'
            +'where personne_id=?', [prenoms, nom, dateDN, lieuDN, id])
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