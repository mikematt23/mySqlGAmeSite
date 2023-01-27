const express = require('express')
const postActions = require('../controllers/postGameController')
const router = express.Router()

router.post('/testLevelOne', postActions.testLevelOne)
router.post('/testLevelTwo', postActions.testLevelTwo)
router.post('/testLevelThree',postActions.testLevelThree)

module.exports = router