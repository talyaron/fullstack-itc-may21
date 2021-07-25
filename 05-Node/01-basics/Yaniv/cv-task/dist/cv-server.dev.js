"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use('/public', express["static"]('public')); // app.use(express.static(__dirname));
// app.get('/', (req, res) => {
//     res.sendFile('./cv/cv.html', {root: __dirname});
// });

app.listen(port, function () {
  console.log("listening on port ".concat(port));
});