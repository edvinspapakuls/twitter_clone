const Tweet = require('../models/tweet')
const User = require('../models/user')

exports.getSignUp = (req, res) => {
    res.render('signUp')
}

exports.postSignUp = (req, res) => {
    const email = req.body.email
    const password = req.body.psw
    const user = new User(email, password)
    user.create()
    .then(() => {
        res.redirect('/')
    })
    .catch(err => console.log(err))
}

exports.getLogIn = (req, res) => {
    res.render('logIn')
}

exports.postLogIn = (req, res) => {
    const email = req.body.email
    const password = req.body.psw
    const userId = User.findByData(email, password)
    console.log(userId)
    //req.session.loggedIn = true
    res.redirect('/')
}

exports.getLogOut = (req, res) => {
    req.session.destroy(err => {
        console.log(err)
        res.redirect('/')
    })
}

exports.getProfile = (req, res) => {
    Tweet.fetchAll()
    .then(([rows, fieldData]) => {
        res.render('profile', {tweet: rows, isAuth: req.session.loggedIn})
    })
    .catch(err => console.log(err))
}

exports.getBookmarks = (req, res) => {
    res.render('bookmarks')
}
