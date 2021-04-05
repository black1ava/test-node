const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/assets', express.static('assets'));

app.get('/contact', (req, res) => {
  res.render('contact');
});

const urlencoded = bodyParser.urlencoded({
  extended: true
});

app.post('/contact', urlencoded, (req, res) => {
  res.render('contactSuccess', { req: req.body });
});