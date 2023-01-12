const personnesModel = require("../models/personnes.model");

let errorNotExist = "Cette personne n'existe pas."
let validateUpdate = "La personne a bien été modifiée."
let validateDelete = "La personne a bien été supprimée."
let nomControler = "personnesController"

const personnesController = {
    create : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".create")}
        let {prenoms, nom} = req.body;
        personnesModel.create(prenoms, nom)
        .then((result) =>{res.status(201).json({id : result.insertId})})
        .catch((error) =>{res.status(500).json({message : error.slqMessage})})
    },
    getAll : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".getAll")}
        personnesModel.getAll()
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
    update : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".update")}
        let {prenoms, nom} = req.body;
        let id = req.params.id;
        if(id && prenoms && nom){
            personnesModel.getOne(id)
            .then((one) =>{
                if(one[0]){
                    personnesModel.update(id, prenoms, nom)
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