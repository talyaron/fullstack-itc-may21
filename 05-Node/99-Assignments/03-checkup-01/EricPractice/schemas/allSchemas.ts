export const schemaStudent = {
    type: "object",
    required: ["firstname", "lastname", "age"],
    properties: {
        firstname: { type: 'string', minLength: 1, maxLength:5, errorMessage: "Length should be 5 characters" },
        lastname: { type: 'string', minLength: 1, maxLength:20, errorMessage: "Length should be 20 characters" },
        age: { type: 'number', minLength: 1, errorMessage: "Length should be higher than 1 or is type number"},
    },
    additionalProperties: true,

}