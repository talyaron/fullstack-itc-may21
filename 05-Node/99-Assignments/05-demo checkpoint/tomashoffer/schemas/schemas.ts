/// AJV Schema
export const schemaUsers = {
    type: 'object',
    properties: {
      name: { type: 'string' },
      email: { type: 'string', format: 'email' },
      password: { type: 'string', minLength: 3 },
      color: { type: 'string' },
      image: { type: 'string' },
    },
    required: ['name', 'email', 'password', 'color', 'image'],
    additionalProperties: false,
  };

  export const schemaLogIn = {
    type: 'object',
    properties: {
      email: { type: 'string', format: 'email' },
      password: { type: 'string', minLength: 3 },
    },
    required: ['email', 'password'],
    additionalProperties: false,
  };