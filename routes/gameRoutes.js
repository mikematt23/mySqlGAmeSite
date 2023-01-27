const express = require('express')
const getActions = require('../controllers/gitGameController')
const router = express.Router()

router.get('/startGame',getActions.startGame)

module.exports = router