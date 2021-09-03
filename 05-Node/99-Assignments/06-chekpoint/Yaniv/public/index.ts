getData(null, null);

const addBookForm: HTMLFormElement = document.querySelector('#add-book-form');
const searchBooksForm: HTMLFormElement = document.querySelector('#search-books-form');
const searchBooksTitleInput: HTMLElement = document.querySelector('#search-books-title');
const searchBooksAuthorInput: HTMLElement = document.querySelector('#search-books-author');
const resetBtn: HTMLElement = document.querySelector('#reset');

interface Book {
  bookUuid: string;
  createdDate: Date;
  title: string;
  author: string;
}

class Books {
  books: Array<Book>;

  constructor(books: Array<Book>) {
      this.books = books;
  }
  renderBooks(): void {
    try {
      const booksRoot: HTMLElement = document.querySelector(".books");

      for (let i = 0; i < searchBooksForm.children.length; i++) {
        searchBooksForm.children[i].disabled = false;
      }

      let booksHtml: string = `<h2 class="books__item books__item--header">Books</h2>`;

      booksRoot.innerHTML = booksHtml;

      this.books = this.books.sort((a: Book, b: Book) => {
        const aId = a.author;
        const bId = b.author;
        if (aId > bId) {return -1;}
        if (aId < bId) {return 1;}
        return 0;
      });

      this.books.forEach((book: Book): void => {
        booksHtml += 
          `<div class="books__item books__item--book book" id="${book.bookUuid}">
            <div class="book__item book__item--title">${book.title}</div>
            <div class="book__item book__item--author">${book.author}</div>
          </div>`;
      });

      booksRoot.innerHTML = booksHtml;
      
    } catch (error) {
      console.error(error);
    }
  }
}

addBookForm.addEventListener('submit', ev => handleAddBook(ev));
searchBooksTitleInput.addEventListener('keyup', ev => handleSearchBook(ev));
searchBooksAuthorInput.addEventListener('keyup', ev => handleSearchBook(ev));
resetBtn.addEventListener('click', ev => handleReset(ev));

const handleAddBook = async (ev: any): Promise<void> => {
  try {
    ev.preventDefault();
    const formElements = ev.target.elements;

    const title: string = formElements.bookTitle.value;
    const author: string = formElements.bookAuthor.value;

    await postBook(title, author);
    await getData(null, null); 

    ev.target.reset();

  } catch (error) {
    console.error(error);
  }
}

const handleSearchBook =  (ev: any): void => {
  try {
    const formElements = ev.target.parentElement.elements;

    const title: string = formElements.bookTitle.value;
    const author: string = formElements.bookAuthor.value;

    if ((title === '') && (author === '')) return;

    getData(title, author);
    resetBtn.style.display = 'unset';

  } catch (error) {
    console.error(error);
  }
}

const handleReset =  (ev: any): void => {
  try {
    getData(null, null);
    resetBtn.style.display = 'none';

  } catch (error) {
    console.error(error);
  }
}