const body = document.querySelector('#body') as HTMLBodyElement;
const inputSearch = document.querySelector('#search') as HTMLInputElement;
let allBooks;
inputSearch.addEventListener('keydown', (e) => searchBooksByTitle(e));

function searchBooksByTitle(e) {
  const title = inputSearch.value;
  const author = inputSearch.value;

  const regrExp: string = `${title}|${author}`;
  const searchTermReg: RegExp = new RegExp(regrExp, 'gim');

  const booksFoundByTitle = allBooks.filter((book) => {
    return searchTermReg.test(book.title);
  });
  renderBooks({ books: booksFoundByTitle });
  return booksFoundByTitle;
}

async function searchByTitle() {
  try {
    const searchTitle = {
      searchTitle: inputSearch.value,
    };

    const getSearchByTitle = searchBooksByTitle(searchTitle);

    const { data, error } = getSearchByTitle;

    renderBooks(data);
  } catch (error) {}
}

body.onload = getBooks;
async function getBooks() {
  try {
    const getBook = await getBooksAxios();
    const { data, error } = getBook;
    allBooks = data.books.books;

    renderBooks(data.books);
  } catch (error) {
    console.error(error);
  }
}

function renderBooks(books) {
  try {
    let html: string = '';
    const root = document.querySelector('#root');
    books.books.forEach((book) => {
      const { title, author } = book;

      html += `<div >
                                <h4><b>Book title: ${title}</b></h4>
                                <h4><b>Author: ${author}</b></h4>
                    </div>`;
    });
    root.innerHTML = html;
  } catch (e) {
    console.error(e);
  }
}
