const dbConnect = require("../context/database/connect2db").get();

const personnesModel = {
    create : (prenoms, nom) => {
        return dbConnect.then((db) =>{
            return db.query('insert into personnes (prenoms, nom) '
            +'values (?, ?)', [prenoms, nom])
        })
    },
    getAll : () =>{
        return dbConnect.then((db) =>{
            return db.query('select * '
            +'from personnes')
        })
    },
    getOne : (id) =>{
        return dbConnect.then((db) =>{
            return db.query('select * '
            +'from personnes '
            +'where personne_id=?', [id])
        })
    },
    update : (id, prenoms, nom) =>{
        return dbConnect.then((db) =>{
            return db.query('update personnes '
            +'set prenoms=?, nom=? '
            +'where personne_id=?', [prenoms, nom, id])
        })
    },
    delete : (id) =>{
        return dbConnect.then((db) =>{
            return db.query('delete '
            +'from personnes '
            +'where personne_id=?', [id])
        })
    },
}

module.exports = personnesModel;