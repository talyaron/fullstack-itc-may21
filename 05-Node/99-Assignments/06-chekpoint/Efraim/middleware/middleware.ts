const Ajv = require('ajv');
const ajv = new Ajv();
const addFormats = require('ajv-formats');
addFormats(ajv);
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

exports.validateBody = (schema) => {
    try {
      return (req, res, next) => {
        const valid = ajv.validate(schema, req.body);
        if (!valid) {
          res.status(400).send(ajv.errors[0]['message']);
          return;
        }
        next();
      }
    } catch (e) {
      console.error(e);
    };}

    exports.createToken = (req, res, next) => {
      try {
        const {body} = req
        const {bookName, author} = body
        const token = jwt.sign({
          bookName: bookName,
          author: author
        }, process.env.SECRET_KEY, {
          expiresIn: '1h'
        });
        req.token = token;
       next()}
      catch (e) {
        console.error(e);
      }
    }