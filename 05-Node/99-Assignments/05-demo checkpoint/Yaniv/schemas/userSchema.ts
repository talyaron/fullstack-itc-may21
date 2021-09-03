export const userSchema = {
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email' },
    username: { type: 'string', minLength: 2 },
    password: { type: 'string', pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$" }, // pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$"
    imageUrl: { type: 'string', format: 'url' },
    favColor: { type: 'string', pattern: "^#([0-9a-fA-F]{3}){1,2}$" }, // pattern: "^#([0-9a-fA-F]{3}){1,2}$"
    registerOrLogin: { type: 'string', pattern: 'register' },
  },
  required: ['email', 'username', 'password', 'imageUrl', 'favColor'],
  additionalProperties: false,
}