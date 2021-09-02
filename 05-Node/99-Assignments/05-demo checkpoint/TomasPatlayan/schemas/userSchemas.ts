import S from 'fluent-json-schema';
export const userSchema =S.object()
.prop('name',S.string().required())
.prop('image',S.string().format(S.FORMATS.URL).required())
.valueOf();
 