"use strict";
exports.__esModule = true;
exports.userSchemaAJV = void 0;
exports.userSchemaAJV = {
    type: 'object',
    properties: {
        name: { type: 'string', minLength: 2 },
        author: { type: 'string', minLength: 2 }
    },
    required: ['name', 'author'],
    additionalProperties: false
};
