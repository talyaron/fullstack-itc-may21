const createUser = document.querySelector("#formNewBook");
createUser.addEventListener("submit", addNewBook);

async function addNewBook(ev) {
  try {
    ev.preventDefault();
    let { bookName, bookAuth } = ev.target.elements;
    bookName = bookName.value;
    bookAuth = bookAuth.value;

    if (!bookName || !bookAuth)
      throw new Error("Please fill the missing fields");
    ev.target.reset();

    const newBook = { bookName, bookAuth };
    const bookInfo = await axios.post(`/books/newBook/`, newBook);
  } catch (error) {
    console.error(error);
  }
}

async function renderBooks(BooksToShow) {
  try {
    const root: HTMLElement = document.querySelector("#root");

    let html: any = "";
    const book = await axios.get(`/books/allBooks`);
    

    BooksToShow.forEach((element) => {
        return `<p>Book Name:${element.bookName}</p>
        <p>Book Name:${element.bookAuth}</p> `;
      })
    

    root.innerHTML = html;

  } catch (error) {
    console.error(error);
  }
}



async function handleSearch() {
  try {
    const searchBook: any = document.querySelector("#search");
    const regEx: string = searchBook.value;
    const searching: RegExp = new RegExp(regEx, "gmi");
    const book = await axios.get(`/books/allBooks`);
    const bookFiltered = book.data.allBooks.books.filter((book) =>
      searching.test(book.bookName )
    );
    renderBooks(bookFiltered);
  } catch (error) {
    console.error(error);
  }
}
