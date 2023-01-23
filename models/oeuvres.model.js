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