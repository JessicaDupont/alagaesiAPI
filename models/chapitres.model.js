const dbConnect = require("../context/database/connect2db").get();
let nomModel = "chapitesModel";

const chapitresModel = {
    create : (oeuvreId, ordre, titre) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".create/"+oeuvreId+"-"+ordre+"-"+titre)}
        return dbConnect.then((db) =>{
            return db.query(
                'insert into chapitres (oeuvre_id, ordre, titre) '
                +'values (?, ?, ?) ;', [oeuvreId, ordre, titre]
            )
        })
    },
    getAll : () => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAll")}
        return dbConnect.then((db) =>{
            return db.query(
                'select * from chapitres'
            )
        })
    },
    getOne : (chapitreId) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getOne/"+chapitreId)}
        return dbConnect.then((db) =>{
            return db.query(
                'select * from chapitres '
                +'where chapitre_id=?', [chapitreId]
            )
        })
    },
    update : (chapitreId, oeuvreId, ordre, titre, resume, narrateurId, chronoDebut, chronoFin) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".update/"+chapitreId+"-"+oeuvreId+"-"+ordre+"-"+titre+"-"+resume+"-"+narrateurId+"-"+chronoDebut+"-"+chronoFin)}
        return dbConnect.then((db) =>{
            return db.query(
                'update chapitres set '
                +'oeuvre_id=?, '
                +'ordre=?, '
                +'titre=?, '
                +'resume=?, '
                +'narrateur_id=?, '
                +'chronologie_debut=?, '
                +'chronologie_fin=? '
                +'where chapitre_id=?'
                , [oeuvreId, ordre, titre, resume, narrateurId, chronoDebut, chronoFin, chapitreId]
            )
        })
    },
    delete : (chapitreId) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".delete/"+chapitreId)}
        return dbConnect.then((db) =>{
            return db.query(
                'delete from chapitres '
                +'where chapitre_id=?', [chapitreId]
            )
        })
    }
}

module.exports = chapitresModel;