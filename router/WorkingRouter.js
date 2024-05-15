const express = require('express')
const router = express.Router()
const ControllerWorkin = require('../controller/Lastworkingcontroller')
const { Theverify, Admin } = require('../Jwt/index')






// show all items --- only admin 
router.get('/working/', Theverify, Admin, ControllerWorkin.showAll)

// show all items --- only admin 
router.get('/working/user/', Theverify, ControllerWorkin.OnlyCustom)

// delete all
router.delete('/working/d/',Theverify, Admin, ControllerWorkin.deleteAll)


// show product 
router.get('/working/show/:id/', ControllerWorkin.ShowLastWork)


// create // method Post 
router.post('/working/create/', Theverify, ControllerWorkin.CreateLastWork)



// delete one product 
router.delete('/working/delete/:id/',Theverify, ControllerWorkin.DeleteLastWork)


// update one product 
router.put('/working/update/:id/',Theverify, ControllerWorkin.UpdateLastWork)

module.exports = router