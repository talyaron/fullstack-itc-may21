"use strict";
exports.__esModule = true;
exports.validateBody = void 0;
var Ajv = require('ajv');
var ajv = new Ajv();
var addFormats = require('ajv-formats');
addFormats(ajv);
var userSchema = require('../schema/allSchemas').userSchema;
exports.validateBody = function (req, res, next) {
    console.log("in validataor..");
    var valid = ajv.validate(userSchema, req.body);
    if (!valid) {
        res.status(400).send(ajv.errors);
        return;
    }
    next();
};
