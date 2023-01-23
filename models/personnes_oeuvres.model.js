const dbConnect = require("../context/database/connect2db").get();
let nomModel = "personnesOeuvresModel";

const personnesOeuvresModel = {
    create : (personneId, oeuvreId, fonction, dateFonction, description) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".create/"+personneId+"/"+oeuvreId)}
        return dbConnect.then((db) => {
            return db.query(
                'insert into personnes_oeuvres (oeuvre_id, personne_id, fonction, date_fonction, description) '
                +'values (?, ?, ?, ?, ?)', [oeuvreId, personneId, fonction, dateFonction, description]
            )
        })
    },
    getByOeuvre : (oeuvreId) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getByOeuvre/"+oeuvreId)}
        return dbConnect.then((db) =>{
            return db.query('select p.personne_id as personne_id, '
                +'p.prenom as prenom, '
                +'p.nom as nom, '
                +'po.fonction as fonction, '
                +'po.date_fonction as date_fonction, '
                +'po.description as description '
            +'from personnes p '
            +'join personnes_oeuvres po on po.personne_id = p.personne_id '
            +'where po.oeuvre_id=?', [oeuvreId])
        })
    },
    getByPersonne : (personneId) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getByPersonne/"+personneId)}
        return dbConnect.then((db) =>{
            return db.query('select * '
            +'from v_oeuvres o '
            +'join personnes_oeuvres po on po.oeuvre_id = o.oeuvre_id '
            +'where po.personne_id=?', [personneId])
        })
    }
}

module.exports = personnesOeuvresModel;