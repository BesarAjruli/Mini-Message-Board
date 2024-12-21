const express = require('express')
const path = require('node:path')

const app = express()

const indexRouter = require('../routers/indexRouter')

app.set('views', path.join(__dirname, '..', 'views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter)

app.listen(3000, () => {
    console.log(`Listening in port: 3000`)
})