require('dotenv').config();
const express = require('express');
const indexRouter = require('./routes/indexRouter')
const path = require('node:path')

const app = express();

app.set('views', './views')
app.set('view engine', 'ejs' )
app.use(express.urlencoded({ extended: true }));


const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath))

app.use('/', indexRouter)

app.listen(3000)
