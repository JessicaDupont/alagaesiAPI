const dbConnect = require("../context/database/connect2db").get();
let nomModel = "oeuvresModel";

const oeuvresModel = {
    create : (titre, createurId) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".create/"+titre)}
        return dbConnect.then((db) =>{
            return db.query(
                'insert into oeuvres (createur_id, titre) '
                +'values (?, ?)', [createurId, titre])
        })
    },
    getAll : () =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAll")}
        return dbConnect.then((db) =>{
            return db.query(
                'select * '
                +'from v_oeuvres '
                +'order by date_creation')
        })
    },
    getAllByPersonne : (personneId) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAllByPersonne")}
        return dbConnect.then((db) =>{
            return db.query(
                'select * '
                +'from oeuvres o '
                +'join personnes_oeuvres po on po.oeuvre_id = o.oeuvre_id '
                +'where po.personne_id=? ', [personneId])
        })
    },
    getAllByFiche : (ficheId) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAllByFiche")}
        return dbConnect.then((db) =>{
            return db.query(
                'select o.oeuvre_id, '
                    +'o.oeuvre_precedente_id, o.oeuvre_precedente_titre, '
                    +'o.createur_id, o.createur_prenom, o.createur_nom, '
                    +'o.type_oeuvre_id, o.type_oeuvre_nom, o.type_oeuvre_description, '
                    +'o.titre, o.date_creation, o.image_url, o.resume, '
                    +'o.nb_chapitres, o.nb_personnes '
                +'from v_oeuvres o '
                +'left join v_chapitres c on c.oeuvre_id = o.oeuvre_id '
                +'left join fiches_chapitres fc on fc.chapitre_id = c.chapitre_id '
                +'where fc.fiche_id = ? ', [ficheId])
        })
    },
    getOne : (id) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getOne/"+id)}
        return dbConnect.then((db) =>{
            return db.query(
                'select * '
                +'from v_oeuvres '
                +'where oeuvre_id=?', [id])
        })
    },
    update : (id, prev, titre, createur_id, type, creation, img, resume) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".update/"+id+"/"+titre)}
        return dbConnect.then((db) =>{
            return db.query(
                'update oeuvres set '
                +'oeuvre_precedente_id=?, '
                +'createur_id=?, '
                +'type_oeuvre_id=?, '
                +'titre=?, '
                +'date_creation=?, '
                +'image_url=?, '
                +'resume=? '
                +'where oeuvre_id=?', 
                [prev, createur_id, type, titre, creation, img, resume, id])
        })
    },
    delete : (id) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".delete/"+id)}
        return dbConnect.then((db) =>{
            return db.query(
                'delete '
                +'from oeuvres '
                +'where oeuvre_id=?', [id])
        })
    },
}

module.exports = oeuvresModel;