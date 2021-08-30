export const schemaRegister = {
    type: "object",
    required: ["username", "email", "password"],
    properties: {
        username: { type: 'string', minLength: 1, errorMessage: "See something is wrong. Max of characters 12" },
        email: { type: 'string', format: 'email', errorMessage: "Empty or format is wrong" },
        password: { type: 'string', minLength: 1, errorMessage: "See something is wrong" },
    },
    additionalProperties: true,

}

export const schemaProduct = {
    type: "object",
    required: ["name", "description", "image", "quantity", "price"],
    properties: {
        name: { type: 'string', minLength: 1, errorMessage: "See something is wrong. Max of characters 12" },
        description: { type: 'string', minLength: 1, errorMessage: "See something is wrong" },
        image: { type: 'string', minLength: 1, errorMessage: "See something is wrong" },
        quantity: { type: 'number', errorMessage: "See something is wrong" },
        price: { type: 'number', errorMessage: "See something is wrong" }, //format: 'float'

    },
    additionalProperties: true,
}

export const schemaEditNumber = {
    type: "object",
    required: ["number"],
    properties: {
        number: { type: 'number', errorMessage: "See something is wrong" },
    },
    additionalProperties: true,
}
