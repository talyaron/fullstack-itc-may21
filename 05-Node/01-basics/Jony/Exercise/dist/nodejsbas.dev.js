"use strict";

var http = require('http');

var fs = require('fs');

var express = require('express');

var html = 'index.html';
http.createServer(function (req, res) {
  fs.readFile(html, function (err, data) {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(data);
    return res.end();
  });
}).listen(3000);
app.use(express["static"](join(__dirname, "public")));