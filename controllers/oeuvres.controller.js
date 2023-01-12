const oeuvresModel = require("../models/oeuvres.model");

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
            if(one[0]) {res.status(200).json(one)}
            else {res.status(404).json({message : errorNotExist})}
        })
        .catch((error) =>{res.status(500).json({message : error.sqlMessage})})
    },
    update : (req, res) => {
        if(process.env.CONSOLE_LOG){console.log(nomControler+".update")}
        let {titre} = req.body;
        let id = req.params.id;
        if(id && titre){
            oeuvresModel.getOne(id)
            .then((one) =>{
                if(one[0]){
                    oeuvresModel.update(id, titre)
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