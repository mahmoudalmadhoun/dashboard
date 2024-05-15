const mongoose = require('mongoose')
const {
    MONGOOSE_URL
} = require('./export')

let Db = async ()=>{
    mongoose.connect(
        MONGOOSE_URL,
        console.log('the database is runing')
    
     
    ).catch((error)=>{
        console.log('ERROR ........',error)
    })
}


module.exports = Db