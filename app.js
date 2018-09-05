const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');

const searchRouter = require('./routes/search.route');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  app.use(logger('dev'));
  app.use(cors());
}
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/search', searchRouter);

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => res.redirect('/'));

module.exports = app;
