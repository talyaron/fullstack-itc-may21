export const bookSchema = {
    type: 'object',
    properties: {
      title: { type: 'string', minLength: 2, maxLength: 20 },
      author: { type: 'string', pattern: '^[a-zA-Z.,\\-& ]{2,40}$' }, // only letters, spaces and &, -, . signs on author's name. 2-40 chars
    },
    required: ['title', 'author'],
    additionalProperties: false,
  }