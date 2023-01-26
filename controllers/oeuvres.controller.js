const oeuvresModel = require("../models/oeuvres.model");
const chapitresModel = require("../models/chapitres.model");
const personnesModel = require("../models/personnes.model")
const typesOeuvresModel = require("../models/types_oeuvres.model")
const personnesOeuvresModel = require("../models/personnes_oeuvres.model")

let errorNotExist = "Cette oeuvre n'existe pas."
let validateUpdate = "L'oeuvre a bien été modifiée."
let validateDelete = "L'oeuvre a bien été supprimée."
let nomControler = "oeuvresController"

const oeuvresController = {
    create : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".create")}
        let {titre, createur_id} = req.body;
        oeuvresModel.create(titre, createur_id)
        .then((result) =>{res.status(201).json({id : result.insertId})})
        .catch((error) =>{res.status(500).json({message : error.slqMessage})})
    },
    getAll : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getAll")}
        oeuvresModel.getAll()
        .then((all) => {res.status(200).json(all)})
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    getOne : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getOne")}
        let id = req.params.id;
        oeuvresModel.getOne(id)
        .then((one) => {
            if(one[0]) {
                //liste des personnes
                personnesOeuvresModel.getByOeuvre(one[0].oeuvre_id)
                .then((pers)=>{
                    one[0].personnes = pers;
                    //liste des chapitres
                    chapitresModel.getAllByOeuvre(one[0].oeuvre_id)
                    .then((chap)=>{
                        one[0].chapitres = chap;
                        res.status(200).json(one)
                    })
                    .catch((error)=>{res.status(200).json(one)})
                })
                .catch((error)=>{
                    one[0].personnes = "";
                    res.status(200).json(one)
                });
            }else {res.status(404).json({message : errorNotExist})}
        })
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    update : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".update")}
        let id = req.params.id;
        let {oeuvre_precedente_id, titre, createur_id, type_oeuvre_id, date_creation, image_url, courverture, maison_edition, isbn} = req.body;
        if(id && titre){
            oeuvresModel.getOne(id)
            .then((one) =>{
                if(one[0]){
                    oeuvresModel.update(id, oeuvre_precedente_id, titre, createur_id, type_oeuvre_id, date_creation, image_url, courverture, maison_edition, isbn)
                    .then((data)=>{res.status(200).json({message : validateUpdate})})
                    .catch((error)=>{res.status(404).json({message : error.sqlMessage})})
                }else{res.status(500).json({message : errorNotExist})}
            })
            .catch((error)=>{res.status(500).json({message : error.sqlMessage})})
        }
    },
    merge : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".merge")}
        // let {oeuvre_precedente, titre, createur_id, type_oeuvre_id, date_creation, image_url, couverture, maison_edition, isbn} = req.body.;
        let id = req.params.id;
        if(id){
            oeuvresModel.getOne(id)
            .then((one) =>{
                if(one[0]){
                    let new_oeuvre_precedente = req.body.oeuvre_precedente_id || one[0].oeuvre_precedente;
                    let new_createur_id = req.body.createur_id || one[0].createur_id;
                    let new_type_oeuvre_id = req.body.type_oeuvre_id || one[0].type_oeuvre_id;
                    let new_titre = req.body.titre || one[0].titre;
                    let new_date_creation = req.body.date_creation || one[0].date_creation;
                    let new_image_url = req.body.image_url || one[0].image_url;
                    let new_resume = req.body.resume || one[0].resume;

                    oeuvresModel.update(id, new_oeuvre_precedente, new_titre, new_createur_id, new_type_oeuvre_id, new_date_creation, new_image_url, new_resume)
                    .then((data)=>{res.status(200).json({message : validateUpdate})})
                    .catch((error)=>{res.status(404).json({message : error.sqlMessage})})
                }else{res.status(500).json({message : errorNotExist})}
            })
            .catch((error)=>{res.status(500).json({message : error.sqlMessage})})
        }
    },
    delete : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".delete")}
        let id = req.params.id;
        if(id){
            oeuvresModel.getOne(id)
            .then((one) =>{
                if(one[0]){
                    oeuvresModel.delete(id)
                    .then((data)=>{res.status(200).json({message : validateDelete})})
                    .catch((error)=>{res.status(404).json({message : error.sqlMessage})})
                }else{res.status(500).json({message : errorNotExist})}
            })
            .catch((error)=>{res.status(500).json({message : error.sqlMessage})})
        }
    },
    //MODEL : personnes_oeuvres
    addPersonne : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".addPersonne")}
        let id = req.params.id;
        let {personne_id, fonction, date_fonction, description} = req.body;
        personnesOeuvresModel.create(personne_id, id, fonction, date_fonction, description)
        .then((result) =>{res.status(201).json({id : result.insertId})})
        .catch((error) =>{res.status(500).json({message : error.slqMessage})})
    },
    getAllByPersonne : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getAllByPersonne")}
        let id = req.params.id;
        personnesOeuvresModel.getByPersonne(id)
        .then((all) => {res.status(200).json(all)})
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    //MODEL : types_oeuvres
    getTypesOeuvre : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getTypesOeuvre")}
        typesOeuvresModel.getAll()
        .then((all) => {res.status(200).json(all)})
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    }
};

module.exports = oeuvresController;