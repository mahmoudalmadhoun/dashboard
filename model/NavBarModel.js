const mongoose = require('mongoose')


const NavBarSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auth',
        required: true
    },
    location: { type: String },
    navbar: [
        {
            name: { type: String },
            link: { type: String },
        }
    ]
}, {
    timestamps: true,
})



module.exports = mongoose.model('NavBar', NavBarSchema)

