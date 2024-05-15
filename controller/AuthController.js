const Auth = require('../model/Auth')
const Object = require('mongoose').Types.ObjectId
const bcrypt = require('bcrypt')
const { getToken } = require('../Jwt/index')


// login in ..... 
const login = async (req, res) => {

    const { phone, password } = req.body

    try {

        const user = await Auth.findOne({ phone })
        if (!user) return res.status(404).json({
            message: `Invalid phone number - ${phone}`
        })
        else {


            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(404).json({ message: `The password is wrong` })

            return res.json({
                token: getToken(user._id),
                data: {
                    _id: user._id,
                    email: user.email,
                    phone: user.phone,
                    isAdmin: user.isAdmin,
                    fullname: user.fullname,
                    location : user.location
                },
            })
        }
    } catch (error) {

        return res.status(404).json({
            message: error.message
        })
    }

}


// create new use 
const CreateNewUser = async (req, res) => {

    const {
        phone,
        password,
        email,
        fullname,
    } = req.body


    try {
        let newCreate = await Auth.findOne({ phone: phone.trim()})
        if (newCreate) return res.status(404).json({ message: 'We have the same phone number' })

        const hasPassword = await bcrypt.hash(password, 10)
        let Testing = new Auth({
            phone,
            password: hasPassword,
            email,
            fullname : fullname?.trim()?.towo,
            showPassword: password
            // Usernumber :
        })

        let SaveData = await Testing.save()
        return res.status(201).json({
            message: 'A new account has been created',
            SaveData
        })


    } catch (error) {

        res.status(404).json({
            message: error.message
        })

    }
}


// show all users only admin 
const ShowAll = async (req, res) => {

    try {
        // isAdmin showPassword
        let Show_ = await Auth.find({}).sort({ createdAt: - 1 })
            .select('phone personnummer total fullname isAdmin half showPassword' )
        return res.status(200).json(Show_)
    } catch (error) {

        res.status(404).json({
            message: error.message
        })

    }
}


// update user 
const Updated = async (req, res) => {

    try {

        let Updated = await Auth.updateOne({ _id: req.user.id },
            {
                $set: req.body
            }

        )

        return res.status(200).json({
            updated: Updated
        })

    } catch (error) {

        return res.status(404).json({
            message: error.message
        })
    }


}






module.exports = {
    Updated,
    login,
    CreateNewUser,
    ShowAll,
}


