// pull in express, error handlers, express, routes, server

'use strict';

const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const internalError = require('./error-handlers/500');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3002

app.use(express.json());
app.use('*', notFoundHandler);
app.use(internalError);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port', PORT)),
};