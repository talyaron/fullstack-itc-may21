"use strict";
exports.__esModule = true;
exports.productSchemaFJS = exports.registerSchema = void 0;
var X = require('fluent-json-schema');
var roles = { admin: "admin", user: "user" };
exports.registerSchema = X.object()
    .prop('username', X.string().minLength(4).required())
    .prop('email', X.string().format(X.FORMATS.EMAIL).required())
    .prop('password', X.string().minLength(6).required())
    .prop('role', X.string()["enum"](Object.values(roles)))
    .valueOf();
exports.productSchemaFJS = X.object()
    .prop('product', X.string().required())
    .prop('description', X.string().minLength(6).required())
    .prop('price', X.number().required())
    .prop('stock', X.integer().required())
    .prop('image')
    .valueOf();
