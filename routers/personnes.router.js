const express = require("express");
const personnesController = require("../controllers/personnes.controller");

const personnesRouter = express.Router();

personnesRouter.get('/', personnesController.getAll)

personnesRouter.post('/', personnesController.create)
personnesRouter.get('/:id([0-9]+)', personnesController.getOne)//.../api/v1/personnes/3
personnesRouter.put('/:id([0-9]+)', personnesController.update)
personnesRouter.delete('/:id([0-9]+)', personnesController.delete)

module.exports = personnesRouter;