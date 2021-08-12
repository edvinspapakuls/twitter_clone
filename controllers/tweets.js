const Tweet = require('../models/tweet')

exports.getTweets = (req, res) => {
    Tweet.fetchAll()
    .then(([rows, fieldData]) => {
        res.render('tweets', {tweet: rows})
    })
    .catch(err => console.log(err))
}

exports.postTweet = (req, res) => {
    const text = req.body.text
    const image = req.body.image
let date_ob = new Date();
// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);
// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// current year
let year = date_ob.getFullYear();
// current hours
let hours = date_ob.getHours();
// current minutes
let minutes = date_ob.getMinutes();
// current seconds
let seconds = date_ob.getSeconds();
    const time = year + "-" + month + "-" + date + " " + hours + ":" + minutes

    const tweet = new Tweet(text, image, time)
    tweet.save()
    .then(() => {
        res.redirect('/')
    })
    .catch(err => console.log(err))
}

exports.getViewTweet = (req, res) => {
    const tweetId = req.params.tweetId
    Tweet.findById(tweetId, tweet => {
        res.render('detail', {t: tweet})
    })
}

exports.postLikedTweet = (req, res) => {
    const tweetId = req.body.tweetId
    console.log(tweetId)
    res.redirect('/')
}

exports.get404 = (req, res) => {
    res.status(404).send('<title>404 Page Not Found!</title><h1>404 Page Not Found!</h1>')
}