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
    getByOeuvre : (oeuvreId) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getByOeuvre/"+oeuvreId)}
        return dbConnect.then((db) =>{
            return db.query('select p.personne_id as personne_id, '
                +'p.prenoms as prenom, '
                +'p.nom as nom, '
                +'po.fonction as fonction '
            +'from personnes p '
            +'join personnes_oeuvres po on po.personne_id = p.personne_id '
            +'where po.oeuvre_id=?', [oeuvreId])
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