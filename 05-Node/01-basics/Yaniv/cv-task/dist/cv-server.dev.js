"use strict";

var express = require('express');

var app = express();

var path = require('path');

var port = 3025;
app.use('/public', express["static"]('cv')); // app.use(express.static(__dirname));
// app.get('/', (req, res) => {
//     res.sendFile('./cv/cv.html', {root: __dirname});
// });

app.listen(port, function () {
  console.log("listening on port ".concat(port));
});