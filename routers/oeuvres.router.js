const express = require("express");
const oeuvresController = require("../controllers/oeuvres.controller");

const oeuvresRouter = express.Router();

oeuvresRouter.get('/', oeuvresController.getAll)

oeuvresRouter.post('/', oeuvresController.create)
oeuvresRouter.get('/:id([0-9]+)', oeuvresController.getOne)//.../api/v1/oeuvres/3
oeuvresRouter.put('/:id([0-9]+)', oeuvresController.update)
oeuvresRouter.delete('/:id([0-9]+)', oeuvresController.delete)

// oeuvresRouter.patch('/:id([0-9]+)', oeuvresController.updateOeuvrePrecedente)
// oeuvresRouter.patch('/:id([0-9]+)', oeuvresController.updateTypeOeuvre)
// oeuvresRouter.patch('/:id([0-9]+)', oeuvresController.updateDateCreation)
// oeuvresRouter.patch('/:id([0-9]+)', oeuvresController.updateImageURL)
// oeuvresRouter.patch('/:id([0-9]+)', oeuvresController.updateCouverture)
// oeuvresRouter.patch('/:id([0-9]+)', oeuvresController.updateMaisonEdition)
// oeuvresRouter.patch('/:id([0-9]+)', oeuvresController.updateISBN)

module.exports = oeuvresRouter;