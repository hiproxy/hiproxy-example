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
app.use(compression());
app.use(function (req, res, next) {
  res.setHeader('APP-NAME', 'image-app');
  next();
});

app.use(function (req, res, next) {
  console.log('[access]'.bold.green, req.method, req.url.underline, JSON.stringify(req.headers));
  console.log();
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
  res.end('Blog App Home Page');
});

app.get('/:id', function (req, res, next) {
  res.end('get blog posts by id => ' + req.params.id);
});

module.exports = app;
