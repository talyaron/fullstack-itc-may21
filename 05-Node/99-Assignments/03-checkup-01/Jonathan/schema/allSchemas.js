"use strict";
exports.__esModule = true;
exports.schemaStudent = void 0;
exports.schemaStudent = {
    type: "object",
    required: ["firstname", "lastname", "age"],
    properties: {
        firstname: { type: 'string', minLength: 1, errorMessage: "Debe ser mayor a 1" },
        lastname: { type: 'string', minLength: 1, errorMessage: "Debe ser mayor a 1" },
        age: { type: 'string' }
    },
    additionalProperties: true
};
