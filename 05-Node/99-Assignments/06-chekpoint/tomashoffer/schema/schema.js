"use strict";
exports.__esModule = true;
exports.schemaBook = void 0;
/// AJV Schema
exports.schemaBook = {
    type: 'object',
    properties: {
        title: { type: 'string' },
        author: { type: 'string' }
    },
    required: ['title', 'author'],
    additionalProperties: false
};
