const dbConnect = require("../context/database/connect2db").get();
let nomModel = "fichesModel";

const fichesModel = {
    create : (nom, catId) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".create/"+nom+"-"+catId)}
        return dbConnect.then((db) =>{
            return db.query(
                'insert into fiches (nom, categorie_id) '
                +'values (?, ?)', [nom, catId])
        })
    },
    getAll : () =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAll")}
        return dbConnect.then((db) =>{
            return db.query(
                'select * '
                +'from v_fiches ')
        })
    },
    getOne : (id) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getOne/"+id)}
        return dbConnect.then((db) =>{
            return db.query(
                'select * '
                +'from v_fiches '
                +'where fiche_id=?', [id])
        })
    },
    update : (id, nom, catId, chronoDebut, chronoFin, description) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".update/"+id+"/"+nom)}
        return dbConnect.then((db) =>{
            return db.query(
                'update fiches set '
                +'nom=?, '
                +'categorie_id=?, '
                +'chronologie_debut=?, '
                +'chronologie_fin=?, '
                +'description=?, '
                +'where fiche_id=?', 
                [nom, catId, chronoDebut, chronoFin, description, id])
        })
    },
    delete : (id) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".delete/"+id)}
        return dbConnect.then((db) =>{
            return db.query(
                'delete '
                +'from fiches '
                +'where fiche_id=?', [id])
        })
    },
}

module.exports = fichesModel;