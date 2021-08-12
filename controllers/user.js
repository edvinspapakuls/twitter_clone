const Tweet = require('../models/tweet')

exports.getProfile = (req, res) => {
    Tweet.fetchAll()
    .then(([rows, fieldData]) => {
        res.render('profile', {tweet: rows})
    })
    .catch(err => console.log(err))
}

exports.getBookmarks = (req, res) => {
    res.render('bookmarks')
}
