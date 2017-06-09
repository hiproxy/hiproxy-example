'use strict';

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());
app.use(function (req, res, next) {
  res.setHeader('APP-NAME', 'image-app');
  next();
});

app.get('/', function (req, res, next) {
  res.end('News App Home Page');
});

app.get('/:id', function (req, res, next) {
  res.end('get news by id => ' + req.params.id);
});

module.exports = app;
