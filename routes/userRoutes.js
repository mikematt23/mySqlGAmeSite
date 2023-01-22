const express = require('express')
const router = express.Router()
const db = require('../data/database')


router.get('/',async (req,res)=>{

  let users = await db.query("SELECT * FROM railway.users")
   
  console.log(users[0])
  
  res.render('home')
})


module.exports = router