const chapitresModel = require("../models/chapitres.model")
const fichesModel = require("../models/fiches.model")
const citationsModel = require("../models/citations.model")

let errorNotExist = "Ce chapitre n'existe pas."
let validateUpdate = "Le chapitre a bien été modifié."
let validateDelete = "Le chapitre a bien été supprimé."
let nomControler = "chapitresController"

const chapitresController = {
    create : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".create")}
        let {oeuvre_id, ordre, titre} = req.body;
        chapitresModel.create(oeuvre_id, ordre, titre)
        .then((result) =>{res.status(201).json({id : result.insertId})})
        .catch((error) =>{res.status(500).json({message : error.slqMessage})})
    },
    getAll : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getAll")}
        chapitresModel.getAll()
        .then((all) => {res.status(200).json(all)})
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    getOne : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getOne")}
        let id = req.params.id;
        chapitresModel.getOne(id)
        .then((one) => {
            if(one[0]) {
                console.log("chapitre trouvé")
                //liste des fiches
                fichesModel.getAllByChapitre(one[0].chapitre_id)
                .then((fiches)=>{
                    console.log("fiches trouvé")
                    one[0].fiches = fiches;
                    //liste des citations
                    citationsModel.getAllByChapitre(one[0].chapitre_id)
                    .then((cit)=>{
                        console.log("citations trouvé")
                        one[0].citations = cit;
                        res.status(200).json(one)
                    })
                    .catch((error)=>{res.status(200).json(one)})
                })
                .catch((error)=>{
                    //liste des citations
                    citationsModel.getAllByChapitre(one[0].chapitre_id)
                    .then((cit)=>{
                        console.log("citations trouvé")
                        one[0].citations = cit;
                        res.status(200).json(one)
                    })
                    .catch((error)=>{res.status(200).json(one)})
                })
            }
            else {res.status(404).json({message : errorNotExist})}
        })
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    merge : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".merge")}
        let id = req.params.id;
        chapitresModel.getOne(id)
        .then((one) =>{
            if(one[0]){
                let new_oeuvre_id = req.body.oeuvre_id ?? one[0].oeuvre_id;
                let new_ordre = req.body.ordre ?? one[0].ordre;
                let new_titre = req.body.titre ?? one[0].titre;
                let new_resume = req.body.resume ?? one[0].resume;
                let new_narrateur_id = req.body.narrateur_id ?? one[0].narrateur_id;
                let new_chronologie_debut = req.body.chronologie_debut ?? one[0].chronologie_debut;
                let new_chronologie_fin = req.body.chronologie_fin ?? one[0].chronologie_fin;
                
                chapitresModel.update(id, new_oeuvre_id, new_ordre, new_titre, new_resume, new_narrateur_id, new_chronologie_debut, new_chronologie_fin)
                .then((data)=>{res.status(200).json({message : validateUpdate})})
                .catch((error)=>{res.status(404).json({message : error.sqlMessage})})
            }else{res.status(500).json({message : errorNotExist})}
        })
        .catch((error)=>{res.status(500).json({message : error.sqlMessage})})
    },
    delete : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".delete")}
        let id = req.params.id;
        chapitresModel.getOne(id)
        .then((one) =>{
            if(one[0]){
                chapitresModel.delete(id)
                .then((data)=>{res.status(200).json({message : validateDelete})})
                .catch((error)=>{res.status(404).json({message : error.sqlMessage})})
            }else{res.status(500).json({message : errorNotExist})}
        })
        .catch((error)=>{res.status(500).json({message : error.sqlMessage})})
    }
}

module.exports = chapitresController;