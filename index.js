const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
require('dotenv').config()

const Db = require('./Db')
const Auth = require('./router/AuthRouter')

// start 
const Services = require('./router/ServicesRouter')
const Connect = require('./router/ConnectRouter')
const NavBar = require('./router/NavBarRouter')
const Uploading = require('./router/Uploading')
const Working = require('./router/WorkingRouter')
const Article = require('./router/ArticleRouter')
// end
const {
    PORT,
} = require('./export')
let port = PORT || 4000
//mahmoudtalat899
// yUviJ6HEqCClLmHS
// talat
// mahmoud.talat899@gmail.com






Db()

app.use([
    express.json(),
    express.urlencoded({ extended: true }),
    morgan('dev'),
    cors({
        // origin: 'https://www.mirstad.se',
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true
    })
])

app.use('/*', (req, res, next) => {
    res.setHeader('Last-Modified', (new Date()).toUTCString());
    next();
})

app.use('/upload', express.static(path.join(__dirname, '/upload')))
app.use('/api/',[Services,Connect,NavBar,Uploading,Working,Auth,Article])

app.listen(port, () => {
    console.log(`the Server is runig on port - ${port}`)
})
