const express = require('express')
const posts = require('../controllers/postController')
const router = express.Router()


router.post('/logIn', posts.logIn)


module.exports = router