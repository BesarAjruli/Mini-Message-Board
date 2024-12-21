const {Router} = require('express')

const indexRouter = Router()

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  
  indexRouter.post('/new', (req, res) => {
    const user = req.body.user
    const text = req.body.text
    const added = new Date()
    messages.push({user, text, added})
    res.redirect('/')
  })

indexRouter.get('/', (req,res) => {
    res.render('index', {title: 'Mini Messageboard', messages:messages})
})

module.exports = indexRouter