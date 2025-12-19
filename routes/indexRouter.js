const Router = require('router');
const queries = require('./../db/queries')

const indexRouter = Router();

indexRouter.get('/', async (req, res) => {
  const messages = await queries.getTable()
  res.render('index', {messages:messages})
});
indexRouter.get('/new', (req, res) => res.render('newMessage'))
indexRouter.post('/new', async (req, res) => {
  const {username, message, date} = req.body;
  await queries.insertMessage(username, message, date);
  res.redirect('/')
})

module.exports = indexRouter;