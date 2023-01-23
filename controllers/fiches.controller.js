const fichesModel = require("../models/fiches.model");

let errorNotExist = "Cette fiche n'existe pas."
let validateUpdate = "La fiche a bien été modifiée."
let validateDelete = "La fiche a bien été supprimée."
let nomControler = "fichesController"

const fichesController = {
    create : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".create")}
        let {nom, categorie_id} = req.body;
        fichesModel.create(nom, categorie_id)
        .then((result) =>{res.status(201).json({id : result.insertId})})
        .catch((error) =>{res.status(500).json({message : error.slqMessage})})
    },
    getAll : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getAll")}
        fichesModel.getAll()
        .then((all) => {res.status(200).json(all)})
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    getOne : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getOne")}
        let id = req.params.id;
        fichesModel.getOne(id)
        .then((one) => {
            if(one[0]) {
                personnesOeuvresModel.getByOeuvre(one[0].oeuvre_id)
                .then((pers)=>{
                    one[0].personnes = pers;
                    res.status(200).json(one)
                })
                .catch((error)=>{
                    one[0].personnes = "";
                    res.status(200).json(one)
                });
            }else {res.status(404).json({message : errorNotExist})}
        })
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    merge : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".merge")}
    },
    delete : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".delete")}
    }
}

module.exports = fichesController;