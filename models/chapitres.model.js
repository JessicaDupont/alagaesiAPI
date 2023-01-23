const dbConnect = require("../context/database/connect2db").get();
let nomModel = "chapitresModel";

const chapitresModel = {
    create : (oeuvreId, ordre, titre) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".create/"+oeuvreId+"-"+ordre+"-"+titre)}
        return dbConnect.then((db) =>{
            return db.query(
                'insert into chapitres (oeuvre_id, titre, ordre) '
                +'values (?, ?, ?) ;', [oeuvreId, titre, ordre]
            )
        })
    },
    getAll : () => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAll")}
        return dbConnect.then((db) =>{
            return db.query(
                'select * from v_chapitres'
            )
        })
    },
    getOne : (chapitreId) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getOne/"+chapitreId)}
        return dbConnect.then((db) =>{
            return db.query(
                'select * from v_chapitres '
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
                +'narrateur_id=?, '
                +'titre=?, '
                +'description=?, '
                +'ordre=?, '
                +'date_naine_debut=?, '
                +'date_naine_fin=? '
                +'where chapitre_id=?'
                , [oeuvreId, narrateurId, titre, resume, ordre, chronoDebut, chronoFin, chapitreId]
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