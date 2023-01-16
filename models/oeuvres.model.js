const dbConnect = require("../context/database/connect2db").get();
let nomModel = "oeuvresModel";

const oeuvresModel = {
    create : (titre) => {
        if(process.env.CONSOLE_LOG){console.log(nomModel+".create/"+titre)}
        return dbConnect.then((db) =>{
            return db.query(
                'insert into oeuvres (titre) '
                +'values (?)', [titre])
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
    getOne : (id) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getOne/"+id)}
        return dbConnect.then((db) =>{
            return db.query(
                'select * '
                +'from v_oeuvres '
                +'where oeuvre_id=?', [id])
        })
    },
    update : (id, prev, titre, createur_id, type, creation, img, resume, edition, isbn) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".update/"+id+"/"+titre)}
        return dbConnect.then((db) =>{
            return db.query(
                'update oeuvres set '
                +'oeuvre_precedente_id=?, '
                +'titre=?, '
                +'createur_id=?, '
                +'type_oeuvre_id=?, '
                +'date_creation=?, '
                +'image_url=?, '
                +'couverture=?, '
                +'maison_edition=?, '
                +'isbn=? '
                +'where oeuvre_id=?', 
                [prev, titre, createur_id, type, creation, img, resume, edition, isbn, id])
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