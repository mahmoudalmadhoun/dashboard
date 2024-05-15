const mongoose = require('mongoose')


const AuthSchema = mongoose.Schema({

    fullname: { type: String },
    email: { type: String },
    password: { type: String },
    phone: { type: String },
    showPassword: { type: Number },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
    location: { type: String }
}, {
    timestamps: true,
})



module.exports = mongoose.model('Auth', AuthSchema)

