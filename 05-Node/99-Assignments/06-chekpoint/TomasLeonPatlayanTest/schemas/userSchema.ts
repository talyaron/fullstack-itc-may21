import S from 'fluent-json-schema';
export const schemaBook = S.object()
.prop('name',S.string().minLength(3).required())
.prop('bookName',S.string().minLength(3).required())
.valueOf()