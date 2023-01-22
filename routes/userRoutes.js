const express = require('express')
const getActions = require('../controllers/gitController')
const router = express.Router()


router.get('/', getActions.home)

router.get('/logIn',getActions.logIn)

router.get('/signUp',getActions.signUp)

router.get('/user',getActions.user)


module.exports = router