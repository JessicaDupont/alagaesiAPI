// const chapitresModel = require("../models/chapitres.model")
const citationsModel = require("../models/citations.model")

let errorNotExist = "Cette citation n'existe pas."
let validateUpdate = "La citation a bien été modifiée."
let validateDelete = "La citation a bien été supprimée."
let nomControler = "citationsController"

const citationsController = {
    create : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".create")}
        let {titre, description} = req.body;
        citationsModel.create(titre, description)
        .then((result) =>{res.status(201).json({id : result.insertId})})
        .catch((error) =>{res.status(500).json({message : error.slqMessage})})
    },
    getAll : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getAll")}
        citationsModel.getAll()
        .then((all) => {res.status(200).json(all)})
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    getAllByOeuvre : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getAllByOeuvre")}
        let id = req.params.id;
        citationsModel.getAllByOeuvre(id)
        .then((all) => {res.status(200).json(all)})
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    getAllByChapitre : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getAllByChapitre")}
        let id = req.params.id;
        citationsModel.getAllByChapitre(id)
        .then((all) => {res.status(200).json(all)})
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    getOne : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getOne")}
        let id = req.params.id;
        citationsModel.getOne(id)
        .then((one) => {
            if(one[0]) {res.status(200).json(one)}
            else {res.status(404).json({message : errorNotExist})}
        })
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    merge : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".merge")}
        let id = req.params.id;
        citationsModel.getOne(id)
        .then((one) =>{
            if(one[0]){
                let new_chapitre_id = req.body.chapitre_id ?? one[0].chapitre_id;
                let new_auteur_id = req.body.auteur_id ?? one[0].auteur_id;
                let new_titre = req.titre ?? one[0].titre;
                let new_texte= req.body.description ?? one[0].description;
                let new_ordre = req.body.ordre ?? one[0].ordre;
                let new_chronologie = req.body.date_naine ?? one[0].date_naine;
                
                citationsModel.update(id, new_titre, new_chapitre_id, new_texte, new_auteur_id, new_ordre, new_chronologie)
                .then((data)=>{res.status(200).json({message : validateUpdate})})
                .catch((error)=>{res.status(404).json({message : error.sqlMessage})})
            }else{res.status(500).json({message : errorNotExist})}
        })
        .catch((error)=>{res.status(500).json({message : error.sqlMessage})})
    },
    delete : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".delete")}
        let id = req.params.id;
        citationsModel.getOne(id)
        .then((one) =>{
            if(one[0]){
                citationsModel.delete(id)
                .then((data)=>{res.status(200).json({message : validateDelete})})
                .catch((error)=>{res.status(404).json({message : error.sqlMessage})})
            }else{res.status(500).json({message : errorNotExist})}
        })
        .catch((error)=>{res.status(500).json({message : error.sqlMessage})})
    }
}

module.exports = citationsController;