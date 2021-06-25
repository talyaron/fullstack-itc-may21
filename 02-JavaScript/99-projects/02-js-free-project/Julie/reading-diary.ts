class Book {
  bookName: string;
  author: string;
  pubYear: number;
  dateStarted: Date;
  dateFinished: Date;
  summary: string;
  mark: number;
  BookId: string;

  constructor(
    bookName: string,
    author: string,
    pubYear: number,
    dateStarted: Date,
    dateFinished: Date,
    summary: string,
    mark: number
  ) {
    this.bookName = bookName;
    this.author = author;
    this.pubYear = pubYear;
    this.dateStarted = dateStarted;
    this.dateFinished = dateFinished;
    this.summary = summary;
    this.mark = mark;
    this.BookId = "id" + Math.random().toString(16).slice(2);
  }
}

class BooksArray {
  booksList: Array<Book> = []; //YS: In order to save your previous books, here you had to make it equal to your items from localstorage < JSON.parse(localStorage.getItem("myLibrary")) > instead of making it equal to an empty array. 
  addBook(book: Book) {
    this.booksList.push(book);
    localStorage.setItem("myLibrary", JSON.stringify(this.booksList); 
  };
  
}

const booksArray = new BooksArray();

const handleSubmit = (ev: any): void => {
  ev.preventDefault();

  const bookName: string = ev.target.elements.bookName.value;
  const author: string = ev.target.elements.author.value;
  const pubYear: number = parseInt(ev.target.elements.pubYear.value);
  const dateStarted: Date = new Date(ev.target.elements.dateStarted.value);
  const dateFinished: Date = new Date(ev.target.elements.dateFinished.value);
  const summary: string = ev.target.elements.summary.value;
  const mark: number = parseInt(ev.target.elements.mark.value);
  const book = new Book(
    bookName,
    author,
    pubYear,
    dateStarted,
    dateFinished,
    summary,
    mark
  );

  booksArray.addBook(book);
 
};
