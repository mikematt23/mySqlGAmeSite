const express = require('express')
const path = require('path');
const routes = require('./routes/userRoutes')

const app = express()

app.use(routes)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.listen(3000)