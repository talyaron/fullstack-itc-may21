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
    }
    catch (e) {
        console.error(e);
    }
    ;
};
exports.createToken = function (req, res, next) {
    try {
        var body = req.body;
        var bookName = body.bookName, author = body.author;
        var token = jwt.sign({
            bookName: bookName,
            author: author
        }, process.env.SECRET_KEY, {
            expiresIn: '1h'
        });
        req.token = token;
        next();
    }
    catch (e) {
        console.error(e);
    }
};
