const express = require("express");
const oeuvresController = require("../controllers/oeuvres.controller");

const oeuvresRouter = express.Router();

//api/v1/oeuvres
oeuvresRouter.post('/', oeuvresController.create)
oeuvresRouter.get('/', oeuvresController.getAll)
oeuvresRouter.get('/:id([0-9]+)', oeuvresController.getOne)//.../api/v1/oeuvres/3
oeuvresRouter.put('/:id([0-9]+)', oeuvresController.update)
oeuvresRouter.patch('/:id([0-9]+)', oeuvresController.merge)
oeuvresRouter.delete('/:id([0-9]+)', oeuvresController.delete)

oeuvresRouter.get('/types', oeuvresController.getTypesOeuvre)
oeuvresRouter.post('/personne/:id([0-9]+)', oeuvresController.addPersonne)
oeuvresRouter.get('/personne/:id([0-9]+)', oeuvresController.getAllByPersonne)

module.exports = oeuvresRouter;