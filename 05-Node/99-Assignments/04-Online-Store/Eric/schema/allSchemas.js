"use strict";
exports.__esModule = true;
exports.loginSchema = exports.registerSchema = void 0;
var fluent_json_schema_1 = require("fluent-json-schema");
exports.registerSchema = fluent_json_schema_1["default"].object()
    .prop('username', fluent_json_schema_1["default"].string().required())
    .prop('email', fluent_json_schema_1["default"].string().format(fluent_json_schema_1["default"].FORMATS.EMAIL).required())
    .prop('password', fluent_json_schema_1["default"].string().minLength(1).required())
    .valueOf();
exports.loginSchema = fluent_json_schema_1["default"].object()
    .prop('email', fluent_json_schema_1["default"].string().format(fluent_json_schema_1["default"].FORMATS.EMAIL).required())
    .prop('password', fluent_json_schema_1["default"].string().minLength(1).required())
    .valueOf();
