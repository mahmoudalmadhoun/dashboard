const mongoose = require('mongoose')


const ArticleSchema = mongoose.Schema({
    location : {type : String},
    user : {
      ref : 'Auth',
      type : mongoose.Schema.Types.ObjectId,
      required :true
    },
    name: {type : String},
    des:  {type : String},
    image :  {type : String},
    more : {type : Array},

},{
    timestamps: true,
})



module.exports = mongoose.model('Article', ArticleSchema)

