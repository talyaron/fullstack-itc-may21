export const userSchemaAJV = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        imgUrl: { type: 'string' },
        color: { type: 'string' }
    },
    required: ['name', 'imgUrl', 'color'],
    additionalProperties: false,
};