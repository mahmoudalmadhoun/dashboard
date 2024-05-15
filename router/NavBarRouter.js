const express = require('express')
const router = express.Router()
const NavBar = require('../controller/NavBarController')
const { Theverify, Admin } = require('../Jwt/index')



// delet 
router.delete('/navbar/', Theverify, Admin, NavBar.deleteAll)

// all 
router.get('/navbar/', Theverify, Admin, NavBar.showAll)


// create new product
router.post('/navbar/create/', Theverify, NavBar.CreateNav)



// admin show 
router.get('/navbar/show/a/', Theverify, NavBar.AdminShow)

// update
router.put('/navbar/update/:id/', Theverify, NavBar.UpdateList)

// delete.
router.delete('/navbar/delete/:id/', Theverify, NavBar.DeleteOne)

// show
router.get('/navbar/show/navbar/:id/', NavBar.Show___)
// show admin

// push new item 
router.post('/navbar/pushing/navbar/', Theverify, NavBar.PushingNewObject__)


// delete one item of object 
//
router.get('/navbar/filter/navbar/:id/', Theverify, NavBar.deleteOneItemOfObject)




module.exports = router