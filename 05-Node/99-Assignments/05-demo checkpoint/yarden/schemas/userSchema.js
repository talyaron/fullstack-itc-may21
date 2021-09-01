"use strict";
exports.__esModule = true;
exports.userSchemaAJV = void 0;
exports.userSchemaAJV = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        imgUrl: { type: 'string' },
        color: { type: 'string' }
    },
    required: ['name', 'imgUrl', 'color'],
    additionalProperties: false
};
