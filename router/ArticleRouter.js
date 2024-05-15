const express = require('express')
const router = express.Router()
const ArticleController = require('../controller/ArticleController')
const {Theverify,Admin} = require('../Jwt/index')


// remove all data...



// create
router.post('/article/create/',Theverify, ArticleController.ArticleCreate)

// show custom 
router.get('/article/show/',Theverify, ArticleController.ArticleShow)

// delete...
router.delete('/article/delete/:id/',Theverify, ArticleController.ArticleDelete)
// update...
router.put('/article/update/:id/',Theverify, ArticleController.ArticleUpdate)

// show to websigin ...
router.get('/article/web/:id/', ArticleController.ArticleWEB)
// 




module.exports = router