"use strict";
exports.__esModule = true;
exports.schemaLogIn = exports.schemaUsers = void 0;
/// AJV Schema
exports.schemaUsers = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        email: { type: 'string', format: 'email' },
        password: { type: 'string', minLength: 3 },
        color: { type: 'string' },
        image: { type: 'string' }
    },
    required: ['name', 'email', 'password', 'color', 'image'],
    additionalProperties: false
};
exports.schemaLogIn = {
    type: 'object',
    properties: {
        email: { type: 'string', format: 'email' },
        password: { type: 'string', minLength: 3 }
    },
    required: ['email', 'password'],
    additionalProperties: false
};
