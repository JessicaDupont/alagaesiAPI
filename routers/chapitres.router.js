const express = require("express");
const chapitresController = require("../controllers/chapitres.controller");

const chapitreRouter = express.Router();

//api/v1/chapitres
chapitreRouter.post('/', chapitresController.create)
chapitreRouter.get('/', chapitresController.getAll)
chapitreRouter.get('/:id([0-9]+)', chapitresController.getOne)
// chapitreRouter.put('/:id([0-9]+)', chapitresController.update)
chapitreRouter.patch('/:id([0-9]+)', chapitresController.merge)
chapitreRouter.delete('/:id([0-9]+)', chapitresController.delete)

module.exports = chapitreRouter;