/**
 * @file start test services
 * @author zdying
 */

'use strict';

require('colors');

var blogApp = require('./workspace/blog-app/app');
var mainApp = require('./workspace/main-app/app');
var newsApp = require('./workspace/news-app/app');

mainApp.listen(8000);
blogApp.listen(8001);
newsApp.listen(8002);

console.log('Main App started at: \t' + 'http://127.0.0.1:8000/'.underline.blue);
console.log('Blog App started at: \t' + 'http://127.0.0.1:8001/'.underline.blue);
console.log('News App started at: \t' + 'http://127.0.0.1:8002/'.underline.blue);

console.log();

console.log('How to experience hiproxy?\n');
console.log('> step 1:'.bold.magenta, 'Open a new Terminal tab.');
console.log('> step 2:'.bold.magenta, 'Execute', 'cd workspace && hiproxy start --open --port 8008 --pac-proxy'.bold.green);
console.log('> step 3:'.bold.magenta, 'Visit', 'http://www.example.com/'.underline.blue);
console.log('> step 4:'.bold.magenta, 'Cool,', 'you did not use Nginx, and did not configure your system\'s hosts'.underline, ',but you redirected', '[www/blog/news].example.com'.underline, 'to your local service. 🍻 🍻 🍻');

console.log();

