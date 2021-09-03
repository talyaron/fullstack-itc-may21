"use strict";
exports.__esModule = true;
exports.registerSchemaFJS = void 0;
var S = require('fluent-json-schema');
//Use Fluent to create and validate the schemas
exports.registerSchemaFJS = S.object()
    .prop('bookname', S.string().minLength(3).maxLength(50).required())
    .prop('author', S.string().minLength(3).maxLength(50).required())
    .prop('year', S.integer().required())
    .valueOf();
