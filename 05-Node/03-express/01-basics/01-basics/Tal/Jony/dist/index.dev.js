"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.post('/addStudent', function (req, res) {
  try {
    var body = req.body;
    var name = body.name,
        id = body.id;
    if (!name || !id) throw new Error("bad request");
    students;
  } catch (e) {
    res.status(400).send({
      error: e.message
    });
  }
});