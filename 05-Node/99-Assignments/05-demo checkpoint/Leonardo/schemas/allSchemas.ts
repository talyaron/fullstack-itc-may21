const S = require('fluent-json-schema')

//Use Fluent to create and validate the schemas
export const registerSchemaFJS = S.object()
    .prop('username', S.string().minLength(3).required())
    .prop('picture', S.string().required())
    .prop('color', S.string().required())
    .valueOf();