"use strict";
exports.__esModule = true;
exports.schemaBook = void 0;
var fluent_json_schema_1 = require("fluent-json-schema");
exports.schemaBook = fluent_json_schema_1["default"].object()
    .prop('name', fluent_json_schema_1["default"].string().minLength(3).required())
    .prop('bookName', fluent_json_schema_1["default"].string().minLength(3).required())
    .valueOf();
