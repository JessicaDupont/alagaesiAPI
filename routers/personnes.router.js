const express = require("express");
const personnesController = require("../controllers/personnes.controller");

const personnesRouter = express.Router();

personnesRouter.get('/', personnesController.getAll)

personnesRouter.post('/', personnesController.create)
personnesRouter.get('/:id([0-9]+)', personnesController.getOne)
personnesRouter.put('/:id([0-9]+)', personnesController.update)
personnesRouter.delete('/:id([0-9]+)', personnesController.delete)

module.exports = personnesRouter;