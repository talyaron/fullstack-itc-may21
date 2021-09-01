export const userSchemaAJV = {
    type: 'object',
    properties: {
        name: { type: 'string', format: 'email' },
        imgUrl: { type: 'string', format: 'url' },
        color: { type: 'string' }
    },
    required: ['name'],
    additionalProperties: false,
};