const Working = require('../model/Lastworking')




// remove all 
// only admin ----- 
const deleteAll = async (req, res) => {


    try {
        let last = await Working.deleteMany({})

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
        let last = await Working.find({})

        return res.status(200).json(last)
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}


// 
const OnlyCustom = async (req, res) => {

    const user = req.user.id

    try {
        let last = await Working.find({ user: user })

        return res.status(200).json(last)
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
// create 
const CreateLastWork = async (req, res) => {
    const { name, image, location } = req.body
    let condationname = name?.trim()?.toLowerCase()
    const user = req.user._id

    try {
        let createlastwork = await Working.findOne({ user: user, name: condationname })

        if (!createlastwork) {

            let newcreate = new Working({
                user: user,
                name: condationname,
                image: image,
                location: location
            })

            let save = await newcreate.save()
            return res.status(201).json({ message: 'new create', create: save })

        } else {

            return res.status(201).json({ message: 'not create .... ' })
        }
    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}


// show product 
const ShowLastWork = async (req, res) => {

    const Location = req.params.id

    try {
        let createlastwork = await Working.find({ location: Location })
            .select('-createdAt -updatedAt -__v')

        if (!createlastwork) {

            return res.status(201).json({ message: 'we do not have data .' })

        } else {

            return res.status(201).json(createlastwork)
        }
    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}



// delete
const DeleteLastWork = async (req, res) => {

    const _id = req.params.id
    const user = req.user.id

    try {
        let deleteWorking = await Working.deleteOne({ _id: _id, user: user })
        if (deleteWorking) {
            return res.status(201).json(deleteWorking)
        } else {

            return res.status(201).json({ message: 'not delete .' })
        }


    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}


// Update
const UpdateLastWork = async (req, res) => {

    const _id = req.params.id
    const user = req.user.id
    try {

        let UpdateWorking = await Working.findOne({ _id: _id, user: user })
        if (!UpdateWorking) return res.status(201).json({ message: 'not update' })
        UpdateWorking.name = req.body.name.trim().toLowerCase()
        UpdateWorking.image = req.body.image
        let save = await UpdateWorking.save()

        return res.status(201).json(save)
    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}


module.exports = {
    OnlyCustom,
    deleteAll,
    showAll,
    UpdateLastWork,
    DeleteLastWork,
    CreateLastWork,
    ShowLastWork
}