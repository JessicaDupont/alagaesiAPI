const fichesModel = require("../models/fiches.model");
const typeFichesModel = require("../models/types_fiches.model");
const oeuvresModel = require("../models/oeuvres.model");
const chapitresModel = require("../models/chapitres.model");
const citationsModel = require("../models/citations.model");
const fichesInformationsModel = require("../models/fiches_informations.model");

let errorNotExist = "Cette fiche n'existe pas."
let validateUpdate = "La fiche a bien été modifiée."
let validateDelete = "La fiche a bien été supprimée."
let nomControler = "fichesController"

const fichesController = {
    create : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".create")}
        let {type_fiche_id, nom, description} = req.body;
        fichesModel.create(type_fiche_id, nom, description)
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
                //liste des oeuvres
                oeuvresModel.getAllByFiche(one[0].fiche_id)
                .then((oeu)=>{
                    one[0].oeuvres = oeu;
                    //liste des chapitres
                    chapitresModel.getAllByFiche(one[0].fiche_id)
                    .then((chap)=>{
                        one[0].chapitres = chap;
                        //liste des citations
                        citationsModel.getAllByAuteur(one[0].fiche_id)
                        .then((cit)=>{
                            one[0].citations = cit;
                            //liste des fiches
                            fichesModel.getAllByFiche(one[0].fiche_id)
                            .then((fich)=>{
                                one[0].fiches = fich;
                                //liste des informations
                                fichesInformationsModel.getAllByFiche(one[0].fiche_id)
                                .then((info)=>{
                                    one[0].informations = info;
                                    res.status(200).json(one)
                                })
                                .catch((error)=>{res.status(200).json(one)})
                            })
                            .catch((error)=>{res.status(200).json(one)})
                        })
                        .catch((error)=>{res.status(200).json(one)})
                    })
                    .catch((error)=>{res.status(200).json(one)})
                })
                .catch((error)=>{
                    //liste des chapitres
                    // chapitresModel.getAllByFiche(one[0].fiche_id)
                    // .then((chap)=>{
                    //     one[0].chapitres = chap;
                    //     //liste des citations
                    //     citationsModel.getAllByAuteur(one[0].fiche_id)
                    //     .then((cit)=>{
                    //         one[0].citations = cit;
                    //         //liste des fiches
                    //         fichesModel.getAllByFiche(one[0].fiche_id)
                    //         .then((fich)=>{
                    //             one[0].fiches = fich;
                    //             //liste des informations
                    //             fichesInformationsModel.getAllByFiche(one[0].fiche_id)
                    //             .then((info)=>{
                    //                 one[0].informations = info;
                                    res.status(200).json(one)
                    //             })
                    //             .catch((error)=>{res.status(200).json(one)})
                    //         })
                    //         .catch((error)=>{res.status(200).json(one)})
                    //     })
                    //     .catch((error)=>{res.status(200).json(one)})
                    // })
                    // .catch((error)=>{res.status(200).json(one)})
                })
            }
            else {res.status(404).json({message : errorNotExist})}
        })
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    merge : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".merge")}
        let id = req.params.id;
        if(id){
            fichesModel.getOne(id)
            .then((one) =>{
                if(one[0]){
                    let new_type_fiche_id = req.body.type_fiche_id ?? one[0].type_fiche_id;
                    let new_nom = req.body.nom ?? one[0].nom;
                    let new_description = req.body.description ?? one[0].description;
                    let new_date_naine = req.body.date_naine ?? one[0].date_naine;
                    let new_date_debut = req.body.date_debut ?? one[0].date_debut;
                    let new_date_fin = req.body.date_fin ?? one[0].date_fin;
                    fichesModel.update(id, new_type_fiche_id, new_nom, new_description, new_date_naine, new_date_debut, new_date_fin)
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
            fichesModel.getOne(id)
            .then((one) =>{
                if(one[0]){
                    fichesModel.delete(id)
                    .then((data)=>{res.status(200).json({message : validateDelete})})
                    .catch((error)=>{res.status(404).json({message : error.sqlMessage})})
                }else{res.status(500).json({message : errorNotExist})}
            })
            .catch((error)=>{res.status(500).json({message : error.sqlMessage})})
        }
    },
    getAllTypes : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getAllTypes")}
        typeFichesModel.getAll()
        .then((all) => {res.status(200).json(all)})
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    getAllByTypes : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getAllTypes")}
        let id = req.params.id;
        fichesModel.getAllByType(id)
        .then((all) => {res.status(200).json(all)})
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    }
}

module.exports = fichesController;