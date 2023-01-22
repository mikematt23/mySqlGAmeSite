const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: 'containers-us-west-77.railway.app',
  database: "railway",
  user: 'root',
  password: 'c8SbUFHSJHb7Rn1GwQq7',
  port: '6641'
})

module.exports = pool