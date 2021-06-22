let x: Array<any> = ['bop', -2, 11, 5, 7, 3, "4", 5, 6, 'boo', 12, -4, "a", "A"];


let b: Array<number> = x.sort();
console.log(b)

let c: Array<any> = x.sort((a, b) => a - b);

console.log(c)

interface Book {
    author: string;
    yearOfPublication: number;
}

let books: Array<Book> = [
    {
        author: 'Daglas Adams',
        yearOfPublication: 1980
    },
    {
        author: 'Hobbes',
        yearOfPublication: 1620
    },
    {
        author:"aaa",
        yearOfPublication:50
    }
]

console.log(books.sort((a, b) => a.yearOfPublication - b.yearOfPublication))
