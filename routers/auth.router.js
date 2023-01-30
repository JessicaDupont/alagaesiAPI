const express = require('express')
const AuthController = require('../controllers/auth.controller')

const router = express.Router()

router.post('/', AuthController.create)                  
router.get('/:email([a-zA-Z0-9.@]+)', AuthController.authenticate)                  

module.exports = router