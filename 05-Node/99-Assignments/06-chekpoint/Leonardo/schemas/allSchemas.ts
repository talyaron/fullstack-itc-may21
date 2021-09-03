const S = require('fluent-json-schema')

//Use Fluent to create and validate the schemas
export const registerSchemaFJS = S.object()
    .prop('bookname', S.string().minLength(3).maxLength(50).required())
    .prop('author', S.string().minLength(3).maxLength(50).required())
    .prop('year', S.integer().required())
    .valueOf();