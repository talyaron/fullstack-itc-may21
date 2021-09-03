"use strict";
exports.__esModule = true;
exports.validateBody = void 0;
var Ajv = require('ajv');
var ajv = new Ajv();
//Validate with AJV
function validateBody(schema) {
    try {
        return function (req, res, next) {
            var valid = ajv.validate(schema, req.body);
            if (!valid) {
                //Get the error in that way to send the error to the DOM
                res.status(400).send(ajv.errors[0]['message']);
                return;
            }
            next();
        };
    }
    catch (error) {
        console.error(error);
    }
}
exports.validateBody = validateBody;
;
