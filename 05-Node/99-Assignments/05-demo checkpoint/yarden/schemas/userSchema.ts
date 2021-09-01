export const userSchemaAJV = {
    type: 'object',
    properties: {
        name: { type: 'string', minLength: 3 },
        imgUrl: { type: 'string' },
        color: { type: 'string' }
    },
    required: ['name', 'imgUrl', 'color'],
    additionalProperties: false,
};