// pull in express, error handlers, express, routes, server

'use strict';

const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const internalError = require('./error-handlers/500');
const showRoute = require('./routes/show')
const userRoute = require('./routes/user')
const reviewRoute = require('./routes/review')
const moviedbRoute = require('./routes/movieDb')
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3002

app.use(express.json());
app.use(showRoute);
app.use(userRoute);
app.use(reviewRoute);
app.use(moviedbRoute);
app.use('*', notFoundHandler);
app.use(internalError);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port', PORT)),
};