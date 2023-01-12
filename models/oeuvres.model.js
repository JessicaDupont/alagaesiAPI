const dbConnect = require("../context/database/connect2db").get();

const oeuvresModel = {
    create : (titre) => {
        return dbConnect.then((db) =>{
            return db.query('insert into oeuvres (titre) '
            +'values (?)', [titre])
        })
    },
    getAll : () =>{
        return dbConnect.then((db) =>{
            return db.query('select * '
            +'from oeuvres')
        })
    },
    getOne : (id) =>{
        return dbConnect.then((db) =>{
            return db.query('select * '
            +'from oeuvres '
            +'where oeuvre_id=?', [id])
        })
    },
    update : (id, titre) =>{
        return dbConnect.then((db) =>{
            return db.query('update oeuvres '
            +'set titre=? '
            +'where oeuvre_id=?', [titre, id])
        })
    },
    delete : (id) =>{
        return dbConnect.then((db) =>{
            return db.query('delete '
            +'from oeuvres '
            +'where oeuvre_id=?', [id])
        })
    },
}

module.exports = oeuvresModel;