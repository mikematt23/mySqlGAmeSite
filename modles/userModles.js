const db = require('../data/database')

async function logIn(userName){
  let query = `SELECT * FROM users WHERE(usersName = '${userName}' )`
  return await db.query(query)
}
async function insertUser(name,password,email,level,lives){
  data = [
    name,
    password,
    email,
    level,
    lives
  ]
  await db.query(`INSERT INTO users(usersName,password,email,level,lives)VALUES(?)`,[data])
}


module.exports = {
  logIn: logIn,
  insertUser: insertUser
}