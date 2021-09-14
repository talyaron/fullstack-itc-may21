/// AJV Schema
export const schemaBook = {
    type: 'object',
    properties: {
      title: { type: 'string' },
      author: { type: 'string' },
    },
    required: ['title', 'author'],
    additionalProperties: false,
  };
