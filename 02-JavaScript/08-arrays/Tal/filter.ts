let a: Array<any> = [1, 2, 34, 5, 90];

console.log(a.filter(elm => elm > 33));

interface Book {
    author: string|number;
    yearOfPublication: number;
    bookName: string
}

let books: Array<Book> = [
    {
        author: 'daglas Adams',
        bookName: 'aaaa',
        yearOfPublication: 1980
    },
    {
        author: 'Hobbes',
        bookName: 'bbbb',
        yearOfPublication: 1620
    },
    {
        author: "aaa",
        bookName: 'eeee',
        yearOfPublication: 50
    },
    {
        author: "aaa",
        bookName: 'gg',
        yearOfPublication: 2001
    },
    {
        author: "2021",
        bookName: 'hh',
        yearOfPublication: 2021
    }
]

console.log(books.filter(book => book.bookName >= 'b'));


//removing from an array;

books = books.filter(book => book.yearOfPublication !== 50);

console.log(books);

//filter books after 1975, and sort them according to the author;
let y:any = books.filter(book => book.yearOfPublication >= 1975).sort((a, b) => b.yearOfPublication - a.yearOfPublication);
console.log(y)
