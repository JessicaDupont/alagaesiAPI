const dbConnect = require("../context/database/connect2db").get();
let nomModel = "fichesModel";

const fichesModel = {
    create : (catId, nom, description) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".create/"+nom+"-"+catId)}
        return dbConnect.then((db) =>{
            return db.query(
                'insert into fiches (type_fiche_id, nom, description) '
                +'values (?, ?, ?)', [catId, nom, description])
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
    getAllByType : (typeFicheId) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAllByType")}
        return dbConnect.then((db) =>{
            return db.query(
                'select * '
                +'from v_fiches '
                +'where type_fiche_id=? ', [typeFicheId])
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
    update : (id, type_fiche_id, nom, description, date_naine, date_debut, date_fin) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".update/"+id+"/"+nom)}
        return dbConnect.then((db) =>{
            return db.query(
                'update fiches set '
                +'type_fiche_id=?, '
                +'nom=?, '
                +'description=?, '
                +'date_naine=?, '
                +'date_debut=?, '
                +'date_fin=? '
                +'where fiche_id=?', 
                [type_fiche_id, nom, description, date_naine, date_debut, date_fin, id])
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