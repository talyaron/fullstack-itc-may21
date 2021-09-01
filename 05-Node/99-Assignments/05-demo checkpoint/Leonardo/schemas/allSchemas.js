"use strict";
exports.__esModule = true;
exports.registerSchemaFJS = void 0;
var S = require('fluent-json-schema');
//Use Fluent to create and validate the schemas
exports.registerSchemaFJS = S.object()
    .prop('username', S.string().minLength(3).required())
    .prop('picture', S.string().required())
    .prop('color', S.string().required())
    .valueOf();
