"use strict";
exports.__esModule = true;
exports.validateBodyUser = void 0;
var Ajv = require('ajv');
var addFormats = require('ajv-formats');
var ajv = new Ajv();
addFormats(ajv);
exports.validateBodyUser = function (schema) {
    return function (req, res, next) {
        var valid = ajv.validate(schema, req.body);
        if (!valid) {
            res.status(400).send(ajv.errors[0]['message']);
            return;
        }
        next();
    };
};
