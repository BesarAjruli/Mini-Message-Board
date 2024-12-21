const {Router} = require('express')

const msgDtlRouter = Router()

msgDtlRouter.get('/', (req, res) => {
    res.render('messageDetail')
})

module.exports = msgDtlRouter