const express = require('express')
const router = express.Router()
const Services = require('../controller/ServicesController')
const {Theverify, Admin} = require('../Jwt/index')




// delete all -- only admin 
router.delete('/services/', Theverify, Admin, Services.deleteAll)
// show all -- only admin 
router.get('/services/all/', Theverify, Admin, Services.showAll)

// create new product
router.get('/services/user/', Theverify, Services.OnlyCustom)

// create new product
router.post('/services/create/', Theverify, Services.Createnewproduct)

// show all products
router.get('/services/user/:id/', Services.ShowAll)


// deklete one product
router.delete('/services/delete/:id/', Theverify, Services.DeleteOneProduct)
// update one product
router.put('/services/update/:id/', Theverify, Services.UpdateOneproduct)





module.exports = router