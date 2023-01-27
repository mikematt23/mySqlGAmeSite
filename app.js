const express = require('express')
const path = require('path');
const { env } = require('process');
const session = require('express-session')
const mysql2 = require('mysql2/promise')
const MySQlStore = require('express-mysql-session')(session)
const routes = require('./routes/userRoutes')
const postRoute = require('./routes/postSiteRoutes')

const app = express()

const options = {
  host: 'containers-us-west-77.railway.app',
  database: "railway",
  user: 'root',
  password: 'c8SbUFHSJHb7Rn1GwQq7',
  port: '6641'
}

const connection = mysql2.createPool(options)
const sessionStore = new MySQlStore({},connection)

app.use(session({
  secret : "mine",
  cookie: {maxAge:3000000},
  saveUninitialized : false,
  resave: false,
  store: sessionStore
}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.use(routes)
app.use(postRoute)

let port = process.env.PORT || 3000
app.listen(process.env.PORT)