const express = require('express')
const posts = require('../controllers/postController')
const router = express.Router()

router.post('/signUp', posts.userSignUp)
router.post('/logIn', posts.logIn)
router.post('/log-out',posts.logOut)


module.exports = router