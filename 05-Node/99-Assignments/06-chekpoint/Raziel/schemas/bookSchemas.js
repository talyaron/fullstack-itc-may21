"use strict";
exports.__esModule = true;
exports.bookAddSchemaFJS = void 0;
var S = require('fluent-json-schema');
exports.bookAddSchemaFJS = S.object()
    .prop('bookName', S.string().minLength(3).required())
    .prop('bookAuth', S.string().required())
    .valueOf();
