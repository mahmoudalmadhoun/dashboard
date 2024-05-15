const mongoose = require('mongoose')


const ServicesSchema = mongoose.Schema({
    location : {type : String},
    user : {
      ref : 'Auth',
      type : mongoose.Schema.Types.ObjectId,
      required :true
    },
    name: {type : String},
    seo :  {type : String},
    image :  {type : String},
    des:  {type : String},


},{
    timestamps: true,
})



module.exports = mongoose.model('Services', ServicesSchema)

