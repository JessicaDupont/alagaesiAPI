const express = require("express");
const citationsController = require("../controllers/citations.controller");

const citationsRouter = express.Router();

//api/v1/citations
citationsRouter.post('/', citationsController.create)
citationsRouter.get('/', citationsController.getAll)
citationsRouter.get('/:id([0-9]+)', citationsController.getOne)
citationsRouter.patch('/:id([0-9]+)', citationsController.merge)
citationsRouter.delete('/:id([0-9]+)', citationsController.delete)

citationsRouter.get('/oeuvre/:id([0-9]+)', citationsController.getAllByOeuvre)
citationsRouter.get('/chapitre/:id([0-9]+)', citationsController.getAllByChapitre)

module.exports = citationsRouter;