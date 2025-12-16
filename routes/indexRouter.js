const Router = require('router');

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

const indexRouter = Router();

indexRouter.get('/', (req, res) => res.render('index', {messages:messages}));
indexRouter.get('/new', (req, res) => res.render('newMessage'))
indexRouter.post('/new', (req, res) => {
    const newMessage = {
        text: req.body.message,
        user: req.body.username,
        added: new Date(req.body.date)
    }
    messages.push(newMessage)
    res.render('index', {messages: messages})
})

module.exports = indexRouter;