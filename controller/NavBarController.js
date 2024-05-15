const { Theverify } = require('../Jwt')
const NavBar = require('../model/NavBarModel')



// remove all 
// only admin ----- 
const deleteAll = async (req, res) => {


    try {
        let last = await NavBar.deleteMany({})

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
        let last = await NavBar.find({})

        return res.status(200).json(last)
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}


// create
const CreateNav = async (req, res) => {
    const { navbar, location } = req.body
    const userId = req.user.id


    try {
        let CheckOut = await NavBar.findOne({ user: userId })

        if (!CheckOut) {

            let newcreate = new NavBar({
                user: userId,
                navbar: navbar,
                location: location
            })
            let save = await newcreate.save()

            return res.status(200).json(save)
        } else {

            return res.status(200).json({
                message: 'not create',
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

// show 
//
const Show___ = async (req, res) => {
    const data = req.params.id
    try {
        let Show_ = await NavBar.findOne({ location: data })


            .select('-createdAt -updatedAt -__v -user')

        return res.status(200).json(Show_)
    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

// admin show 
const AdminShow = async (req, res) => {
    const user = req.user.id
    try {
        let Show_ = await NavBar.findOne({ user: user })


            .select('-createdAt -updatedAt -__v -user')

        return res.status(200).json(Show_)
    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}


// delete 
const DeleteOne = async (req, res, next) => {

    const _id = req.params.id
    const user = req.user.id

    try {


        let CheckOut = await NavBar.findOne({ _id: _id, user: user })

        if (!CheckOut) return res.status(200).json({ message: 'not / - / - /' })


        await NavBar.deleteOne({ _id: _id })

        return res.status(200).json({ message: 'delete' })

    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}


// update
const UpdateList = async (req, res) => {
    const _id = req.params.id
    const user = req.user.id
    const { name, link } = req.body

    try {

        let CheckOut = await NavBar.findOne({ 'navbar._id': _id, user: user })

        if (!CheckOut) return res.status(200).json({ message: 'not / - / - /' })

        let Show_ = await NavBar.updateOne(
            { 'navbar._id': _id },
            {
                $set: {
                    'navbar.$[elementX].name': name,
                    'navbar.$[elementX].link': link,

                }
            },
            {
                arrayFilters: [
                    {
                        'elementX._id': _id
                    }
                ]
            }

        )

        return res.status(200).json(Show_)
    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}


// show 
const PushingNewObject__ = async (req, res) => {

    const user = req.user.id

    const { name, link,location} = req.body
    try {

        let Show_ = await NavBar.findOne({ user: user })
        const Pushing_ = {
            name : name,
            link : link
        }

        if (!Show_) {

            let newCreate = new NavBar({
                user : user,
                navbar : Pushing_,
                location : location
            })
            let save = await newCreate.save()

          return  res.status(201).json({ message: save})
        }

        let newData = {
            name: name,
            link: link
        }
        Show_.navbar.push(newData)
        let save = await Show_.save()


        return res.status(201).json(save)
    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}


// delete one item of array 
const deleteOneItemOfObject = async (req, res) => {

    const _id = req.params.id
    const user = req.user.id

    try {
        let Show_ = await NavBar.findOne({ user: user })

        if (!Show_) return res.status(404).json({ message: 'not create..' })

        let thefilter = Show_.navbar?.filter((x) => x?._id.toString() !== _id?.toString())

        Show_.navbar = thefilter
        let save = await Show_.save()

        return res.status(200).json(save)
    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

module.exports = {
    AdminShow,
    showAll,
    deleteAll,
    deleteOneItemOfObject,
    PushingNewObject__,
    Show___,
    UpdateList,
    DeleteOne,
    CreateNav
}