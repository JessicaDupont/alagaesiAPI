const dbConnect = require("../context/database/connect2db").get();
let nomModel = "citationsModel";

const citationsModel = {
    create : (titre, texte) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".create/"+titre+"-"+texte)}
        return dbConnect.then((db) => {
            return db.query(
                'insert into citations (titre, texte) '
                +'values (?, ?)', [titre, texte]
            )
        })
    },
    getAll : () => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAll")}
        return dbConnect.then((db) => {
            return db.query(
                'select * from citations'
            )
        })
    },
    getAllByOeuvre : (oeuvreId) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAllByOeuvre")}
        return dbConnect.then((db) => {
            return db.query(
                'select * '
                +'from citations ci '
                +'join chapitres ch on ch.chapitre_id = ci.chapitre_id '
                +'where ch.oeuvre_id=?', [oeuvreId]
            )
        })
    },
    getAllByChapitre : (chapitreId) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAllByChapitre")}
        return dbConnect.then((db) => {
            return db.query(
                'select * '
                +'from citations '
                +'where chapitre_id=?', [chapitreId]
            )
        })
    },
    getOne : (citationId) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getOne/"+citationId)}
        return dbConnect.then((db) => {
            return db.query(
                'select * '
                +'from citations '
                +'where citation_id=?', [citationId]
            )
        })
    },
    update : (citationId, titre, chapitreId, texte, auteurId, ordre, chronologie) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".update/"+citationId+"-"+titre+"-"+chapitreId+"-"+texte+"-"+auteurId+"-"+ordre+"-"+chronologie)}
        return dbConnect.then((db) => {
            return db.query(
                'update citations set '
                +'titre=?, '
                +'chapitre_id=?, '
                +'texte=?, '
                +'auteur_id=?, '
                +'ordre=?, '
                +'chronologie=? '
                +'where citation_id=? '
                , [titre, chapitreId, texte, auteurId, ordre, chronologie, citationId]
            )
        })
    },
    delete : (citationId) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".delete/"+citationId)}
        return dbConnect.then((db) => {
            return db.query(
                'delete '
                +'from citations '
                +'where citation_id=?', [citationId]
            )
        })
    }
}

module.exports = citationsModel