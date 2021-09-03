export {};

const Ajv = require("ajv");
const ajv = new Ajv();
const addFormats = require("ajv-formats");
addFormats(ajv);

const { Book, Books } = require("../../models/dist/booksModel");

export function validateBody(schema) {
    try {
        return (req, res, next) => {
            try {
                const valid = ajv.validate(schema, req.body);
                if (!valid) {
                    res.status(409).send('Something is not right with the data you entered. Please verify and try again.'); // ajv.errors[0]["message"]
                    return;
                }
                next();

            } catch (error) {
                console.error(error.message);
                res.status(500).send(error.message);
            }
        }
    } catch (error) {
        console.error(error.message);
    }
}

export function doesBookExist(req, res, next) {
    try {
        const books = new Books();

        const { title, author } = req.body;
        
        const similarBooks: Array<Book> = books.searchBooks(title, author);

        if (similarBooks.length > 0) res.status(409).send({ message: `Book already exist. Can't proceed.` });
        else next();
        return;

    } catch (error) {
        console.error(error.message);
        res.status(500).send(error.message);    
    }
}