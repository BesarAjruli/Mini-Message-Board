const {Router} = require('express')

const msgDtlRouter = Router()

msgDtlRouter.get('/:details', (req, res) => {
    const {details} = req.params
    res.render('messageDetail', {user:details})
})

module.exports = msgDtlRouter