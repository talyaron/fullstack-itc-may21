"use strict";
exports.__esModule = true;
exports.userSchemaAJV = void 0;
exports.userSchemaAJV = {
    type: 'object',
    properties: {
        name: { type: 'string', format: 'email' },
        imgUrl: { type: 'string', format: 'url' },
        color: { type: 'string' }
    },
    required: ['name'],
    additionalProperties: false
};
