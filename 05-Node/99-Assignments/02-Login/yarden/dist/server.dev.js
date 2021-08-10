"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

/* 
    This is a simple login 2 + page site exercise
            This is the back-end file.
*/
var express = require('express');

var Ajv = require('ajv');

var cookieParser = require('cookie-parser');

var port = process.env.PORT || 3000;
var app = express();
app.use(express.json());
app.use(express["static"]('public'));
app.use(cookieParser());
var ajv = new Ajv();
var user = ''; // Create user on server:

app.post('/uddUser', function (res, req) {
  // Validation with ajv:
  var schema = {
    type: "object",
    properties: {
      name: {
        type: "string"
      },
      email: {
        type: "string"
      }
    },
    required: ["name", "email"],
    additionalProperties: false
  };
  var validate = ajv.compile(schema);
  console.log(schema);
  console.log(req.body);
  var body = req.body;
  console.log(body);
  var valid = validate(body);
  if (!valid) console.log(validate.errors);
  user = (_readOnlyError("user"), JSON.stringify("Name: ".concat(body.name, ", Email: ").concat(body.email)));
}); // Listen on port:

app.listen(port, function () {
  console.log("Server listening on port ".concat(port, "..."));
});