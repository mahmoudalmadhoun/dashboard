const Article = require('../model/Article')


// create new product 
const ArticleCreate = async (req, res) => {
    const { name, more, image, des, location } = req.body

    const CondationName = name?.trim()
    const user = req.user.id
    try {
        let CheckOut = await Article.findOne({ user: user, name: CondationName })

        if (!CheckOut) {

            if (name === '' || des === '' || location === '') return res.status(404).json({ message: 'it is empty inputs' })

            let newCreate = new Article({
                user: user,
                name: CondationName,
                des: des,
                image: image,
                more: more,
                location: location,
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


// create new product 
const ArticleShow = async (req, res) => {



    const user = req.user.id
    try {
        let Show___ = await Article.find({ user: user })

        if (!Show___) {
            return res.status(200).json('not data.')
        }
        return res.status(200).json(Show___)

    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}


// delele one item
const ArticleDelete = async (req, res) => {


    const _id = req.params.id
    const user = req.user.id
    try {
        let Show___ = await Article.deleteOne({ user: user, _id: _id })

        if (!Show___) {
            return res.status(200).json('not data.')
        }
        return res.status(200).json(Show___)

    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}


// Update
const ArticleUpdate = async (req, res) => {


    const _id = req.params.id
    const user = req.user.id
    try {
        let Show___ = await Article.updateOne({ user: user, _id: _id }, { $set: req.body })

        if (!Show___) {
            return res.status(200).json('not data.')
        }
        return res.status(200).json(Show___)

    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}


// domin
const ArticleWEB = async (req, res) => {


    let location = req.params.id


    try {
        let Show___ = await Article.find({ location: location })

        if (!Show___) {
            return res.status(200).json('not data.')
        }
        return res.status(200).json(Show___)

    }
    catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

module.exports = {
    ArticleWEB,
    ArticleUpdate,
    ArticleDelete,
    ArticleShow,
    ArticleCreate
}