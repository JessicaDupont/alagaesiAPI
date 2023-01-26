const dbConnect = require("../context/database/connect2db").get();
let nomModel = "fichesInformationModel";

const fichesInformationsModel = {
    getAllByFiche : (ficheId) =>{
        if(process.env.CONSOLE_LOG){console.log(nomModel+".getAllByFiche")}
        return dbConnect.then((db) =>{
            return db.query(
                'select * '
                +'from types_informations ty '
                +'left join fiches_informations fi on fi.type_information_id = ty.type_information_id '
                +'where fi.fiche_id = ? ', [ficheId])
        })
    },
}

module.exports = fichesInformationsModel;