const express = require('express')
const router = express.Router()
const path = require('path')
const tweetsController = require('../controllers/tweets')

router.get('/', tweetsController.getTweets)

router.post('/tweet', tweetsController.postTweet)

router.get('/like-tweet/:tweetId', tweetsController.getViewTweet)

router.post('/like-tweet', tweetsController.postLikedTweet)

router.post('/delete-tweet', tweetsController.postDeleteTweet)

module.exports = router
