var books = [
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
        author: "artreaa",
        bookName: 'eeee',
        yearOfPublication: 50
    },
    {
        author: "gghf",
        bookName: 'gg',
        yearOfPublication: 2001
    },
    {
        author: "ertert",
        bookName: 'hh',
        yearOfPublication: 2021
    }
];
books.forEach(function (book) {
    console.log(book.author);
});
var booksForDOM = books.map(function (book, index) { return "<p id=" + index + ">" + book.bookName + " Author is " + book.author + "</p>"; }).join(' ');
console.log(booksForDOM);
// localStorage.setItem('books',JSON.stringify(books));
// let newBooks = JSON.parse(localStorage.getItem('books'));
// console.log('newBooks', newBooks)
var root = document.querySelector('#root');
root.innerHTML = booksForDOM;
