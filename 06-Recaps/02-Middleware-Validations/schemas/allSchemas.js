const S = require('fluent-json-schema');

// / Fluent JSON Schema
exports.regsiterSchemaFJS = S.object()
  .prop('userName', S.string().required())
  .prop('email', S.string().format(S.FORMATS.EMAIL).required())
  .prop('password', S.string().minLength(3).required())
  .prop('repassword', S.string().minLength(3).required())
  .valueOf();


/// AJV Schema
exports.regsiterSchemaAJV = {
  type: 'object',
  properties: {
    userName: { type: 'string' },
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 3 },
    repassword: { type: 'string', minLength: 3 },
  },
  required: ['userName', 'email', 'password'],
  additionalProperties: false,
};
