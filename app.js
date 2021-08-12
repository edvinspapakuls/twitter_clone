const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const tweetsRoutes = require('./routes/tweets')
const path = require('path')
const tweetsController = require('./controllers/tweets')
const userRoutes = require('./routes/user')
const db = require('./util/db')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.use(tweetsRoutes)

app.use(userRoutes)

app.use(tweetsController.get404)

app.listen(3000)
