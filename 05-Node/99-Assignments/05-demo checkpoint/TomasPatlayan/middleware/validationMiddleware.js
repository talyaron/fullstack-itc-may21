"use strict";
exports.__esModule = true;
exports.validateUser = void 0;
var ajv_1 = require("ajv");
var ajv_formats_1 = require("ajv-formats");
var ajv = new ajv_1["default"]();
ajv_formats_1["default"](ajv);
exports.validateUser = function (schema) {
    return function (req, res, next) {
        var valid = ajv.validate(schema, req.body);
        if (!valid) {
            res.status(400).send(ajv.errors);
            return;
        }
        next();
    };
};
