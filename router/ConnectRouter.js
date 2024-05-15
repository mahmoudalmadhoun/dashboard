const express = require('express')
const router = express.Router()
const Connect = require('../controller/ConnectController')
const {Theverify, Admin} = require('../Jwt/index')



// delete all -- only admin 
router.delete('/connect/',Theverify, Admin, Connect.deleteAll)
// show all -- only admin 
router.get('/connect/all/', Theverify, Admin, Connect.showAll)

// show all --
router.get('/connect/user/', Theverify, Connect.OnlyCustom)
// create new product
router.post('/connect/create/', Theverify, Connect.Createnew_Connect)

// show data.
router.get('/connect/show/:id/', Connect.ShowOneProduct_Connect)

// update one product
router.put('/connect/update/:id/', Theverify, Connect.Update_Connect)
// delete 
router.delete('/connect/delete/:id/', Theverify, Connect.DeleteItems_Coneect)




module.exports = router