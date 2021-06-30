class Book {
  author: string;
  country: string;
  title: string;
  year: number;
  bookId: string;

  constructor(author: string, country: string, title: string, year: number) {
    this.author = author;
    this.country = country;
    this.title = title;
    this.year = year;
    this.bookId = "id" + Math.random().toString(16).slice(2);
  }
}
// const addedBookArray = [];

const totalArray = booksData;

class BooksArray {
  totalArray: Array<any>;
  addBook(book: Book) {
    // this.totalArray.push(book);
    // renderBook(this.totalArray);
    // const addedBookArray = [];
    totalArray.push(book);
    renderBook(totalArray);
    // When I"m rendering the book, the booksLIst is this.totalArray
  }
}

const bookArrayInstance = new BooksArray();
bookArrayInstance.totalArray;

function handleDelete(bookId: string) {
  console.log(bookArrayInstance.totalArray);
  const reducedArray = bookArrayInstance.totalArray.filter((book) => {
    return bookId !== book.bookId;
  });
  // renderBook(reducedArray);
  // console.log(reducedArray);
  // When I'm deleting, booksList is assigned to reducedArray
}

// function updateTitle ()

const handleSubmit = (ev: any): void => {
  ev.preventDefault();

  const author: string = ev.target.elements.author.value;
  const country: string = ev.target.elements.country.value;
  const title: string = ev.target.elements.title.value;
  const year: number = parseInt(ev.target.elements.year.value);
  const book = new Book(author, country, title, year);

  bookArrayInstance.addBook(book);
};

function renderBook(booksList) {
  console.log(booksList);
  const booksRoot: HTMLElement = document.querySelector("#booksRoot");
  booksList.forEach((book) => {
    const booktoDom = `<div class="form-wrapper-random">
    <div>
        <p><span class = "author">Author: </span>${book.author}</p>
    </div>
    <div>
    <p><span class = "country">Country: </span>${book.country}</p>
    </div>
    <div>
    <p><span class = "title">Title: </span>${book.title}</p>
    </div>
    <div>
    <p><span class = "year">Year: </span>${book.year}</p>
    </div>
    <button onclick='handleDelete("${book.bookId}")'>Delete</button>
    <button onclick='updateTitle("${book.bookId}")'>Update</button>
  </div>`;
    booksRoot.insertAdjacentHTML("afterbegin", booktoDom);
  });
}

window.onload = renderBook(booksData);
// Displaying everything in bookslist array

// Write  a function for handle Delete and another for handle Update

// function searchBooks(term: string, totalArray: Array<any>): any {
//   const searchTermReg: RegExp = new RegExp(term, "i");

//   return totalArray.filter((book) => searchTermReg.test(book.title));
// }
