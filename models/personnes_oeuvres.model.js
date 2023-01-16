const dbConnect = require("../context/database/connect2db").get();
let nomModel = "personnesOeuvresModel";

const personnesOeuvresModel = {
    create : (personneId, oeuvreId, fonction, commentaire) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".create/"+personneId+"/"+oeuvreId)}
        return dbConnect.then((db) => {
            return db.query(
                'insert into personnes_oeuvres (personne_id, oeuvre_id, fonction, commentaire) '
                +'values (?, ?, ?, ?)', [personneId, oeuvreId, fonction, commentaire]
            )
        })
    },
    getByOeuvre : (oeuvreId) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getByOeuvre/"+oeuvreId)}
        return dbConnect.then((db) =>{
            return db.query('select p.personne_id as personne_id, '
                +'p.prenoms as prenoms, '
                +'p.nom as nom, '
                +'po.fonction as fonction, '
                +'po.commentaire as commentaire '
            +'from personnes p '
            +'join personnes_oeuvres po on po.personne_id = p.personne_id '
            +'where po.oeuvre_id=?', [oeuvreId])
        })
    },
    getByPersonne : (personneId) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getByPersonne/"+personneId)}
        return dbConnect.then((db) =>{
            return db.query('select * '
            +'from oeuvres o '
            +'join personnes_oeuvres po on po.oeuvre_id = o.oeuvre_id '
            +'where po.personne_id=?', [personneId])
        })
    }
}

module.exports = personnesOeuvresModel;