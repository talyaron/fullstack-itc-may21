"use strict";
exports.__esModule = true;
exports.bookSchema = void 0;
exports.bookSchema = {
    type: 'object',
    properties: {
        title: { type: 'string', minLength: 2, maxLength: 20 },
        author: { type: 'string', pattern: '^[a-zA-Z.,\\-& ]{2,40}$' }
    },
    required: ['title', 'author'],
    additionalProperties: false
};
