const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');

const clientRouter = require('./routes/client.route');
const searchRouter = require('./routes/search.route');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', clientRouter);
app.use('/api/search', searchRouter);
app.get('/*', (req, res) => res.status(404).json({ message: 'Not Found' }));

module.exports = app;
