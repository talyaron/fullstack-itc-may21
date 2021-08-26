const S = require('fluent-json-schema');

// / Fluent JSON Schema
exports.regsiterSchema = S.object()
  .prop('userName', S.string().required())
  .prop('email', S.string().format(S.FORMATS.EMAIL).required())
  .prop('password', S.string().minLength(3).required())
  .prop('repassword', S.string().minLength(3).required())
  .valueOf();

exports.loginSchema = S.object()
  .prop('email', S.string().format(S.FORMATS.EMAIL).required())
  .prop('password', S.string().minLength(3).required())
  .valueOf();
