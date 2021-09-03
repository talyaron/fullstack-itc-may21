"use strict";
exports.__esModule = true;
exports.schemaSearchBook = exports.schemaBooks = void 0;
exports.schemaBooks = {
    type: "object",
    required: ["title", "author"],
    properties: {
        title: { type: 'string', minLength: 1, errorMessage: "Length must be greater than 1" },
        author: { type: 'string', minLength: 1, errorMessage: "Length must be greater than 1" }
    },
    additionalProperties: true
};
exports.schemaSearchBook = {
    type: "object",
    required: ["searchTitle"],
    properties: {
        searchTitle: { type: 'string', errorMessage: "It must be a string" }
    },
    additionalProperties: true
};
