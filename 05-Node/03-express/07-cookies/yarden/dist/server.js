var express = require('express');
var app = require('express')();
var cookieParser = require('cookie-parser');
app.use(express.static('public'));
app.listen(3000, function () { console.log('listen on 3000'); });
