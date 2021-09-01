import S from 'fluent-json-schema';
export const registerSchema = S.object()
.prop('name',S.string().required())
.prop('email',S.string().format(S.FORMATS.EMAIL).required())
.prop('password',S.string().minLength(4).required())
.valueOf();
 
export const loginSchema = S.object()
.prop('email',S.string().format(S.FORMATS.EMAIL).required())
.prop('password',S.string().minLength(4).required())
.valueOf();