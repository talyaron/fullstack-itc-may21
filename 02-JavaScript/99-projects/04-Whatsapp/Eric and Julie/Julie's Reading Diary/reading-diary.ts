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

let totalArray = booksData;

class BooksArray {
  addBook(book: Book) {
    totalArray.unshift(book);
    renderBook(totalArray);
  }
}

const bookArrayInstance = new BooksArray();

function handleDelete(bookId: string) {
  const reducedArray = totalArray.filter((book) => {
    return bookId !== book.bookId;
  });
  totalArray = reducedArray;
  renderBook(reducedArray);
}

function updateTitle(bookPassId: string) {
  //you pass your ID which item you want to update

  let user = window.prompt("Enter a new title: ");

  totalArray.find((book) => {
    if (bookPassId === book.bookId) {
      //book.bookID, you iterate the array until you get your id
      book.title = user;
    }
  });

  renderBook(totalArray);
}

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
  let newBooks = "";
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
    <button id = "update" onclick='updateTitle("${book.bookId}")'>Update</button>
  </div>`;
    newBooks += booktoDom;
    booksRoot.innerHTML = newBooks;
  });
}

window.onload = renderBook(booksData);

const searchBooksbyTerm = (totalArray: Array<any>, searchTerm: string) => {
  const myRegEx: RegExp = new RegExp(searchTerm, "gmi");

  const searchedBooks: Array<any> = totalArray.filter((book) =>
    myRegEx.test(book.author)
  );
  return searchedBooks;
};

const handleKeyUp = (ev: any) => {
  ev.preventDefault();
  const searchTerm: string = ev.target.value;
  const results = searchBooksbyTerm(totalArray, searchTerm);
  renderBook(results);
};
