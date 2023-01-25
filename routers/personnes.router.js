const express = require("express");
const personnesController = require("../controllers/personnes.controller");

const personnesRouter = express.Router();

//api/v1/personnes
personnesRouter.post('/', personnesController.create)
personnesRouter.get('/', personnesController.getAll)
personnesRouter.get('/:id([0-9]+)', personnesController.getOne)//.../api/v1/personnes/3
// personnesRouter.put('/:id([0-9]+)', personnesController.update)
personnesRouter.patch('/:id([0-9]+)', personnesController.merge)
personnesRouter.delete('/:id([0-9]+)', personnesController.delete)

personnesRouter.get('/oeuvre/:id([0-9]+)', personnesController.getAllByOeuvre)

module.exports = personnesRouter;