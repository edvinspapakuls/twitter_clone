const express = require('express')
const router = express.Router()
const path = require('path')
const userController = require('../controllers/user')

router.get('/sign-up', userController.getSignUp)

router.post('/sign-up', userController.postSignUp)

router.get('/log-in', userController.getLogIn)

router.post('/log-in', userController.postLogIn)

router.get('/log-out', userController.getLogOut)

router.get('/profile', userController.getProfile)

router.get('/bookmarks', userController.getBookmarks)

module.exports = router
