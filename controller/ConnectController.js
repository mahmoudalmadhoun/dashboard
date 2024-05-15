const Connect = require('../model/ConnectModel')



// remove all 
// only admin ----- 
const deleteAll = async (req, res) => {


    try {
        let last = await Connect.deleteMany({})

        return res.status(200).json(last)
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

// show all data 
// only admin ----- 
const showAll = async (req, res) => {


    try {
        let last = await Connect.find({})

        return res.status(200).json(last)
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}



const OnlyCustom = async (req, res) => {


    try {
        let last = await Connect.findOne({user: req.user.id})

        return res.status(200).json(last)
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

// create new 
const Createnew_Connect = async (req, res) => {
    const {
        name,
        phone,
        addres,
        whatapp,
        facebook,
        twitter,
        instagram,
        aboutus,
        image,
        location
    } = req.body
    const user = req.user.id
    try {

        let CheckOut = await Connect.findOne({ user: user })
        if (!CheckOut) {

            let createnew = new Connect({
                user: user,
                name,
                phone,
                addres,
                whatapp,
                facebook,
                twitter,
                instagram,
                aboutus,
                image,
                location
            })

            let save = await createnew.save()
            return res.status(200).json(save)

        } else {
            return res.status(200).json({
                message: 'is not create',
                data: CheckOut
            })
        }
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}



// Update
const Update_Connect = async (req, res) => {

    const _id = req.params.id
    const user = req.user.id
    try {

        let CheckOut = await Connect.findOne({ user: user, _id: _id })
        if (!CheckOut) {

            return res.status(200).json({
                message: 'not update '
            })

        } else {

            let Update = await Connect.updateOne({ _id: _id, user: user }, { $set: req.body })
            return res.status(200).json({
                message: 'update.',
                data: Update
            })
        }
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}




// show one product 
// Update
const ShowOneProduct_Connect = async (req, res) => {

    const _id = req.params.id

    try {

        let CheckOut = await Connect.findOne({ location: _id })

        return res.status(200).json(CheckOut)
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}



// delete
const DeleteItems_Coneect = async (req, res) => {

    const _id = req.params.id
    const user = req.user.id
    try {
        let Delete = await Connect.deleteOne({ _id: _id, user: user })
        return res.status(200).json(Delete)
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}



module.exports = {
    deleteAll,
    showAll,
    OnlyCustom,
    Createnew_Connect,
    Update_Connect,
    ShowOneProduct_Connect,
    DeleteItems_Coneect,
}