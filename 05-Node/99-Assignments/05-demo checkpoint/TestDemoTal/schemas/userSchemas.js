"use strict";
exports.__esModule = true;
exports.userSchema = void 0;
var fluent_json_schema_1 = require("fluent-json-schema");
exports.userSchema = fluent_json_schema_1["default"].object()
    .prop('name', fluent_json_schema_1["default"].string().required())
    .prop('image', fluent_json_schema_1["default"].string().format(fluent_json_schema_1["default"].FORMATS.URL).required())
    .valueOf();
