"use strict";
exports.__esModule = true;
exports.validateBook = void 0;
var Ajv = require('ajv');
var ajv = new Ajv();
var addFormats = require('ajv-formats');
addFormats(ajv);
function validateBook(schema) {
    return function (req, res, next) {
        try {
            var valid = ajv.validate(schema, req.body);
            if (!valid) {
                console.log(ajv.errors);
                throw new Error(ajv.errors[0]);
            }
            next();
        }
        catch (err) {
            res.status(400).send(err);
        }
    };
}
exports.validateBook = validateBook;
;
