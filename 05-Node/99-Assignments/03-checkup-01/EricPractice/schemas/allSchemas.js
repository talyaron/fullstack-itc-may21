"use strict";
exports.__esModule = true;
exports.schemaStudent = void 0;
exports.schemaStudent = {
    type: "object",
    required: ["firstname", "lastname", "age"],
    properties: {
        username: { type: 'string', minLength: 1, errorMessage: "" },
        email: { type: 'string', minLength: 1, errorMessage: "" },
        password: { type: 'number', minLength: 1, errorMessage: "" }
    },
    additionalProperties: true
};
