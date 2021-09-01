"use strict";

var Ajv = require('ajv');

var ajv = new Ajv();

var addFormats = require('ajv-formats');

addFormats(ajv);

var jwt = require('jsonwebtoken');

var dotenv = require('dotenv').config();

exports.validateBody = function (schema) {
  try {
    return function (req, res, next) {
      var valid = ajv.validate(schema, req.body);

      if (!valid) {
        res.status(400).send(ajv.errors[0]['message']);
        return;
      }

      next();
    };
  } catch (e) {
    console.error(e);
  }

  ;

  exports.createToken = function (req, res, next) {
    try {
      var body = req.body;
      var name = body.name,
          imageURL = body.imageURL,
          color = body.color;
      var token = jwt.sign({
        name: name,
        imageURL: imageURL,
        color: color
      }, process.env.SECRET_KEY, {
        expiresIn: '1h'
      });
      req.token = token;
      next();
    } catch (e) {
      console.error(e);
    }
  };
};