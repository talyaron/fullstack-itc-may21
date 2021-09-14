import { Book, BooksList } from "../models/booksModel";

const books = new BooksList()

export const get_books = (req, res) => {
    res.send({ books: books.booksArray })
}

export const add_book = (req, res) => {
    try {
        const { name, author } = req.body
        if (!name || !author) throw new Error('Missing input')
        const newBook = new Book(name, author)
        books.addUser(newBook)
        console.log('Added book:', newBook);

        res.send({ books: books.booksArray })
    } catch (error) {
        console.error(error)
    }
}

export const search_books = (req, res) => {
    try {
        const searchTerm = req.body.search
        console.log('Search input: ' + searchTerm);
        const searchTermRegex: RegExp = new RegExp(searchTerm, 'gmi');
        let results = books.booksArray.filter((book) => {
            return searchTermRegex.test(book.name || book.author)
        });
        console.log('Results: ', results);
        res.send({ results })

    } catch (error) {
        console.error(error);
    };
};
