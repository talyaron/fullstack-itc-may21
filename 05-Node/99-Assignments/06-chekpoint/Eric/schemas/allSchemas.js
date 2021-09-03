"use strict";
exports.__esModule = true;
exports.schemaBook = void 0;
exports.schemaBook = {
    type: "object",
    required: ["title", "author"],
    properties: {
        title: { type: 'string', minLength: 1, errorMessage: "Length should be more than 1 character" },
        author: { type: 'string', minLength: 1, errorMessage: "Length should be more than 1 character" }
    },
    additionalProperties: true
};
