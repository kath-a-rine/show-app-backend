// pull in express, error handlers, express, routes, server

'use strict';

const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const internalError = require('./error-handlers/500');
const showRoute = require('./routes/show')
const userRoute = require('./routes/user')
const reviewRoute = require('./routes/review')
const accountRoute = require('./routes/account');
const moviedbRoute = require('./routes/movieDb')
const app = express();
const cors = require('cors');

require('dotenv').config();
const PORT = process.env.PORT || 3002

app.use(express.json());
app.use(showRoute);
app.use(userRoute);
app.use(reviewRoute);
/// CHECK THE BELOW
// app.use(express.urlencoded({ extended: true }));
app.use(accountRoute);
app.use(moviedbRoute);
app.use('*', notFoundHandler);
app.use(internalError);
app.use(cors());

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port', PORT)),
};