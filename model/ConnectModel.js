const mongoose = require('mongoose')


const ConnectSchema = mongoose.Schema({

    user: {
        ref: 'Auth',
        required: true,
        type: mongoose.Schema.Types.ObjectId
    },
    location: { type: String },
    name: { type: String },
    user: { type: String },
    phone: { type: String },
    addres: { type: String },
    whatapp: { type: String },

    facebook: { type: String },
    twitter: { type: String },
    instagram: { type: String },

    aboutus: {
        name: { type: String },
        des: { type: String },
    },
    image: { type: String },


}, {
    timestamps: true,
})



module.exports = mongoose.model('Connect', ConnectSchema)

