const db = require('../data/database')

async function logIn(userName){
  let query = `SELECT * FROM users WHERE(userName = '${userName}' )`
  return await db.query(query)
}


module.exports = {
  logIn: logIn
}