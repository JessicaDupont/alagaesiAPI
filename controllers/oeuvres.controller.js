const oeuvresModel = require("../models/oeuvres.model");
const personnesModel = require("../models/personnes.model")

let errorNotExist = "Cette oeuvre n'existe pas."
let validateUpdate = "L'oeuvre a bien été modifiée."
let validateDelete = "L'oeuvre a bien été supprimée."
let nomControler = "oeuvresController"

const oeuvresController = {
    create : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".create")}
        let {titre} = req.body;
        oeuvresModel.create(titre)
        .then((result) =>{res.status(201).json({id : result.insertId})})
        .catch((error) =>{res.status(500).json({message : error.slqMessage})})
    },
    getTypesOeuvre : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getTypesOeuvre")}
        oeuvresModel.getTypesOeuvre()
        .then((all) => {res.status(200).json(all)})
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    getAll : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getAll")}
        oeuvresModel.getAll()
        .then((all) => {
            //TODO ajouter les personnes
            res.status(200).json(all)
        })
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    getOne : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getOne")}
        let id = req.params.id;
        oeuvresModel.getOne(id)
        .then((one) => {
            if(one[0]) {
                personnesModel.getByOeuvre(one[0].oeuvre_id)
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
    update : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".update")}
        let id = req.params.id;
        let {oeuvre_precedente, titre, type_oeuvre_id, date_creation, image_url, courverture, maison_edition, isbn} = req.body;
        if(id && titre){
            oeuvresModel.getOne(id)
            .then((one) =>{
                if(one[0]){
                    oeuvresModel.update(id, oeuvre_precedente, titre, type_oeuvre_id, date_creation, image_url, courverture, maison_edition, isbn)
                    .then((data)=>{res.status(200).json({message : validateUpdate})})
                    .catch((error)=>{res.status(404).json({message : error.sqlMessage})})
                }else{res.status(500).json({message : errorNotExist})}
            })
            .catch((error)=>{res.status(500).json({message : error.sqlMessage})})
        }
    },
    merge : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".merge")}
        let {oeuvre_precedente, titre, type_oeuvre_id, date_creation, image_url, couverture, maison_edition, isbn} = req.body;
        let id = req.params.id;
        if(id){
            oeuvresModel.getOne(id)
            .then((one) =>{
                if(one[0]){
                    let new_oeuvre_precedente = oeuvre_precedente || one[0].oeuvre_precedente;
                    let new_titre = titre || one[0].titre;
                    let new_type_oeuvre_id = type_oeuvre_id || one[0].type_oeuvre_id;
                    let new_date_creation = date_creation || one[0].date_creation;
                    let new_image_url = image_url || one[0].image_url;
                    let new_couverture = couverture || one[0].courverture;
                    let new_maison_edition = maison_edition || one[0].maison_edition;
                    let new_isbn = isbn || one[0].isbn;

                    oeuvresModel.update(new_id, new_oeuvre_precedente, new_titre, new_type_oeuvre_id, new_date_creation, new_image_url, new_couverture, new_maison_edition, new_isbn)
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
    }
};

module.exports = oeuvresController;