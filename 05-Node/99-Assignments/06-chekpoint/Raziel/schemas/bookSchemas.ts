const S = require('fluent-json-schema')

export const bookAddSchemaFJS = S.object()
    .prop('bookName', S.string().minLength(3).required())
    .prop('bookAuth', S.string().required())
    .valueOf();