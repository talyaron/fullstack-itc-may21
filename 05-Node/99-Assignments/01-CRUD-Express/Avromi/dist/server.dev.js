"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
app.use(express["static"]('public'));

var _require = require('uuid'),
    uuidv4 = _require.v4;

uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.listen(port, function () {
  console.log("App Listening on port: ".concat(port));
});