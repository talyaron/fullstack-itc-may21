export const userSchemaAJV = {
    type: 'object',
    properties: {
        name: { type: 'string', minLength: 2 },
        author: { type: 'string', minLength: 2 },
    },
    required: ['name', 'author'],
    additionalProperties: false,
};