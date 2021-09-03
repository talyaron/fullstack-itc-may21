"use strict";
exports.__esModule = true;
exports.validateBook = void 0;
var Ajv = require("ajv");
var ajv = new Ajv["default"]({ allErrors: true });
var addFormats = require('ajv-formats');
var ajvErrors = require('ajv-errors');
addFormats(ajv);
ajvErrors(ajv);
function validateBook(schema) {
    return function (req, res, next) {
        var valid = ajv.validate(schema, req.body);
        if (!valid) {
            var propError = ajv.errors[0].instancePath.replace('/', '');
            propError = propError.charAt(0).toUpperCase() + propError.slice(1);
            res.status(404).send({ error: propError + ": " + ajv.errors[0]['message'] });
        }
        else
            next();
    };
}
exports.validateBook = validateBook;
;
