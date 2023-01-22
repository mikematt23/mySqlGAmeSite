const express = require('express')
const path = require('path');
const { env } = require('process');
const routes = require('./routes/userRoutes')
const postRoute = require('./routes/postSiteRoutes')

const app = express()

app.use(routes)
app.use(postRoute)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))


app.listen(process.env.PORT)