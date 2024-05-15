
const mongoose = require('mongoose')


const LastworkingSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auth',
    },
    name: { type: String },
    image: { type: String },
    location: { type: String },
}, {
    timestamps: true,
})



module.exports = mongoose.model('Lastworking', LastworkingSchema)


