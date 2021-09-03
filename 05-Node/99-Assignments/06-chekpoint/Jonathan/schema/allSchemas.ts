export const schemaBooks = {
    type: "object",
    required: ["title", "author"],
    properties: {
        title: { type: 'string', minLength: 1, errorMessage: "Length must be greater than 1" },
        author: { type: 'string', minLength: 1, errorMessage: "Length must be greater than 1" }
    },
    additionalProperties: true,
}

export const schemaSearchBook = {
    type: "object",
    required: ["searchTitle"],
    properties: {
        searchTitle: { type: 'string', errorMessage: "It must be a string" },
    },
    additionalProperties: true,

}