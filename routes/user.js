const express = require('express')
const router = express.Router()
const path = require('path')
const userController = require('../controllers/user')

router.get('/profile', userController.getProfile)

router.get('/bookmarks', userController.getBookmarks)

module.exports = router
