const express = require('express')
const path = require('node:path')

const app = express()

app.use(express.urlencoded({ extended: true }));

const indexRouter = require('../routers/indexRouter')
const newMsgRouter = require('../routers/newMsgRouter')
const msgDtlRouter = require('../routers/msgDtlRouter')

app.set('views', path.join(__dirname, '..', 'views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/new', newMsgRouter)
app.use('/details', msgDtlRouter)

app.listen(3000, () => {
    console.log(`Listening in port: 3000`)
})