const Services = require('../model/ServicesModel')




// remove all 
// only admin ----- 
const deleteAll = async (req, res) => {


    try {
        let last = await Services.deleteMany({})

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
        let last = await Services.find({})

        return res.status(200).json(last)
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}


// only user 
// 
const OnlyCustom = async (req, res) => {

    const user = req.user.id

    try {
        let last = await Services.find({user: user})

        return res.status(200).json(last)
    }
    catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}


// create new product 
const Createnewproduct = async (req, res) => {
    const {  name, seo, image, des,location } = req.body

    const CondationName = name?.trim()
    const user = req.user.id
    try {
        let CheckOut = await Services.findOne({ user: user, name: CondationName })

        if (!CheckOut) {

            if(name === '' || des === '' || location === '') return res.status(404).json({message : 'it is empty inputs'})

            let newCreate = new Services({
                user: user,
                name: CondationName,
                des: des,
                image: image,
                seo: seo,
                location : location,
            })
            let save = await newCreate.save()
            return res.status(200).json(save)
        }
        return res.status(200).json({
            message: 'not create',
            data: CheckOut
        })

    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

// delete one product 
const DeleteOneProduct = async (req, res) => {

    const _id = req.params.id
    const user = req.user.id
    try {
        let Delete = await Services.deleteOne({ _id: _id , user : user})
        return res.status(200).json(Delete)

    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}



// Update One product
const UpdateOneproduct = async (req, res) => {

    const _id = req.params.id
    const user = req.user.id

    try {

        let CheckOut = await Services.findOne({ user: user , _id: _id })
        if (CheckOut) {
            let Update = await Services.updateOne({ _id: _id }, { $set: req.body })
            return res.status(200).json(Update)
        } else {
            return res.status(200).json({ message: 'not updateing .. .' })
        }


    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

// Update One product
const ShowAll = async (req, res) => {

    const location = req.params.id

    try {
        let CheckOut = await Services.find({ location: location })
        if (!CheckOut) {

            return res.status(200).json({ message: 'we have not products . . .' })
        } else {

            return res.status(200).json(CheckOut)
        }


    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}


// const UpdateList= async (req,res)=>{
//     try{
//         let Show_ = await Product.updateOne(
//             { 'options._id': id },
//             {
//                 $set: {
//                     'options.$[elementX]._id': id,
//                     'options.$[elementX].title': title,
//                     'options.$[elementX].des': des,
//                     'options.$[elementX].image': image,
//                 }
//             },
//             {
//                 arrayFilters: [
//                     {
//                         'elementX._id': id
//                     }
//                 ]
//             }

//             )
//     }
//     catch(error){
//         return res.status(404).json({
//             message : error.message
//         })
//     }
// }


module.exports = {
    OnlyCustom,
    deleteAll,
    showAll,
    UpdateOneproduct,
    DeleteOneProduct,
    Createnewproduct,
    ShowAll
}