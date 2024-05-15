const express = require('express')
const router = express.Router()
const AuthController = require('../controller/AuthController')
const {Theverify,Admin} = require('../Jwt/index')


// remove all data...



// create
router.post('/auth/create/', AuthController.CreateNewUser)
// login
router.post('/auth/login/', AuthController.login)

// show all 
router.get('/auth/show/all/', AuthController.ShowAll)
//update
router.put('/auth/edit/',Theverify, AuthController.Updated)


module.exports = router