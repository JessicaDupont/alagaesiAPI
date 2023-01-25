const personnesModel = require("../models/personnes.model");
const personnesOeuvresModel = require("../models/personnes_oeuvres.model");

let errorNotExist = "Cette personne n'existe pas."
let validateUpdate = "La personne a bien été modifiée."
let validateDelete = "La personne a bien été supprimée."
let nomControler = "personnesController"

const personnesController = {
    create : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".create")}
        let {prenom, nom} = req.body;
        personnesModel.create(prenom, nom)
        .then((result) =>{res.status(201).json({id : result.insertId})})
        .catch((error) =>{res.status(500).json({message : error.slqMessage})})
    },
    getAll : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getAll")}
        // personnesModel.getByOeuvre(1)
        personnesModel.getAll()
        .then((all) => {res.status(200).json(all)})
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    getAllByOeuvre : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getAllByOeuvre")}
        let oeuvreId = req.params.id;
        personnesOeuvresModel.getByOeuvre(oeuvreId)
        .then((all) => {res.status(200).json(all)})
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    getOne : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getOne")}
        let id = req.params.id;
        personnesModel.getOne(id)
        .then((one) => {
            if(one[0]) {res.status(200).json(one)}
            else {res.status(404).json({message : errorNotExist})}
        })
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    // update : (req, res) => {
    //     if(process.env.CONSOLE_LOG){console.log(nomControler+".update")}
    //     let {prenoms, nom} = req.body;
    //     let id = req.params.id;
    //     if(id && prenoms && nom){
    //         personnesModel.getOne(id)
    //         .then((one) =>{
    //             if(one[0]){
    //                 personnesModel.update(id, prenoms, nom)
    //                 .then((data)=>{res.status(200).json({message : validateUpdate})})
    //                 .catch((error)=>{res.status(404).json({message : error.sqlMessage})})
    //             }else{res.status(500).json({message : errorNotExist})}
    //         })
    //         .catch((error)=>{res.status(500).json({message : error.sqlMessage})})
    //     }
    // },
    merge : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".update")}
        let id = req.params.id;
        if(id){
            personnesModel.getOne(id)
            .then((one) =>{
                if(one[0]){
                    let new_prenom = req.body.prenom ?? one[0].prenom;
                    let new_nom = req.body.nom ?? one[0].nom;
                    let new_dateDN = req.body.date_de_naissance ?? one[0].date_de_naissance;
                    let new_lieuDN = req.body.lieu_de_naissance ?? one[0].lieu_de_naissance;
                    personnesModel.update(id, new_prenom, new_nom, new_dateDN, new_lieuDN)
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
            personnesModel.getOne(id)
            .then((one) =>{
                if(one[0]){
                    personnesModel.delete(id)
                    .then((data)=>{res.status(200).json({message : validateDelete})})
                    .catch((error)=>{res.status(404).json({message : error.sqlMessage})})
                }else{res.status(500).json({message : errorNotExist})}
            })
            .catch((error)=>{res.status(500).json({message : error.sqlMessage})})
        }
    }
};

module.exports = personnesController;