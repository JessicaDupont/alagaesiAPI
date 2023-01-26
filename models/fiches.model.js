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
    getAllByChapitre : (chapitreId) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAllByType")}
        return dbConnect.then((db) =>{
            return db.query(
                'select * '
                +'from fiches f '
                +'join fiches_chapitres fc on fc.fiche_id = f.fiche_id '
                +'where fc.chapitre_id=? ', [chapitreId])
        })
    },
    getAllByPersonne : (personneId) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAllByType")}
        return dbConnect.then((db) =>{
            return db.query(
                'select * '
                +'from fiches f '
                +'join fiches_personnes fp on fp.fiche_id = f.fiche_id '
                +'where fp.personne_id=? ', [personneId])
        })
    },
    getAllByFiche : (ficheId) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAllByFiche")}
        return dbConnect.then((db) =>{
            return db.query(
                'select * '
                +'from fiches f '
                +'left join fiches_fiches ff1 on ff1.fiche_id_1 = f.fiche_id '
                +'left join fiches_fiches ff2 on ff2.fiche_id_2 = f.fiche_id '
                +'where ff1.fiche_id_2 = ? or ff2.fiche_id_1 = ? ', [ficheId, ficheId])
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