const express = require('express');

const app = express();

app.use(function(req, res, next) {
  console.log('First Middleware');
  next();
});

app.use(function(req, res, next) {
  res.send('Hello from Express!!!');
});

module.exports = app;
