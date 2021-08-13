const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const tweetsRoutes = require('./routes/tweets')
const path = require('path')
const tweetsController = require('./controllers/tweets')
const userRoutes = require('./routes/user')
const db = require('./util/db')
const session = require('express-session')
const MySqlSessionStore = require('express-mysql-session')(session)

app.set('view engine', 'ejs')

const storeSession = new MySqlSessionStore({createDatabaseTable: true}, db)

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({secret: 'my secret', resave: false, saveUninitialized: false, store: storeSession}))

app.use(tweetsRoutes)

app.use(userRoutes)

app.use(tweetsController.get404)

app.listen(3000)
