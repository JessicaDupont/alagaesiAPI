const express = require("express");
const fichesController = require("../controllers/fiches.controller");

const fichesRouter = express.Router();

//api/v1/citations
fichesRouter.post('/', fichesController.create)
fichesRouter.get('/', fichesController.getAll)
fichesRouter.get('/:id([0-9]+)', fichesController.getOne)
fichesRouter.patch('/:id([0-9]+)', fichesController.merge)
fichesRouter.delete('/:id([0-9]+)', fichesController.delete)

module.exports = fichesRouter;