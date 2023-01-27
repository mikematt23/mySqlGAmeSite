const express = require('express')
const posts = require('../controllers/postController')
const router = express.Router()

router.post('/signUp', posts.userSignUp)
router.post('/logIn', posts.logIn)
router.post('/logOut',posts.logOut)


module.exports = router