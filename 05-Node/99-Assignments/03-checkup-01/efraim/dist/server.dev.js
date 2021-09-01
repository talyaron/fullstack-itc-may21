"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
var router = express.Router();
var beaches = [{}]; // var drinks = require('');

app.use(express["static"]('public'));
router.get('/beaches', function (req, res) {
  res.send('Wiki home page');
}); // About page route.

router.get('/about', function (req, res) {
  res.send('About this wiki');
});
app.listen(port, function () {
  return console.log('Server listen on port', port);
});
module.exports = router;