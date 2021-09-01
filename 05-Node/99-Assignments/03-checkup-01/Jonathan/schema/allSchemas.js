"use strict";
exports.__esModule = true;
exports.schemaStudent = void 0;
exports.schemaStudent = {
    type: "object",
    required: ["firstname", "lastname", "age"],
    properties: {
        firstname: { type: 'string', minLength: 1, maxLength: 5, errorMessage: "La longitud debe ser entre 1 a 5" },
        lastname: { type: 'string', minLength: 1, maxLength: 5, errorMessage: "La longitud debe ser entre 1 a 5" },
        age: { type: 'number', minLength: 1, errorMessage: "La longitud debe ser mayor a 1" }
    },
    additionalProperties: true
};
