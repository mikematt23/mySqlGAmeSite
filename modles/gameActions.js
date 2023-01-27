const db = require('../data/database')


async function updateLevel(userLevel, userId){
    let query = `UPDATE users SET level = ${userLevel} WHERE usersID = ${userId}`
    await db.query(query)
}

async function resetLives(userId){
  let query = `UPDATE users SET lives = 4 WHERE usersID = ${userId}`
  await db.query(query) 
}

async function updateLives(userId,userLives){
  let update = userLives - 1
  let query = `UPDATE users SET lives = ${update} WHERE usersID = ${userId}`
  await db.query(query)
}

async function getLives(userId){
  let query = `SELECT lives FROm users WHERE usersID = ${userId}`
  return await db.query(query)
}


module.exports ={
  updateLevel : updateLevel,
  updateLives : updateLives,
  resetLives : resetLives,
  getLives : getLives
}