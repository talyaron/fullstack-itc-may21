async function getData(bookTitle: string, bookAuthor: string): Promise<any> {
  const dataToFetch: any = ((!bookTitle) && (!bookAuthor)) ? await getBooks() : await searchBooks(bookTitle, bookAuthor);
  const dataToRender: Books | string = (typeof dataToFetch.data.books === "string") ? dataToFetch.data.books : new Books(dataToFetch.data.books);

  const booksRoot: HTMLElement = document.querySelector(".books");

  if (typeof dataToRender === "string") {
    booksRoot.innerHTML = `<h3>${dataToRender}</h3>`;

    if (dataToRender !== 'Your to-do list is empty. Go do something you love 🤩') return;

    for (let i = 0; i < searchBooksForm.children.length; i++) {
      searchBooksForm.children[i].disabled = true;
    }
    return;
  }

  dataToRender.renderBooks();
}

async function getBooks() {
  try {
    const books = await axios.get("/book/all");
    return books;

  } catch (error) {
    console.error(error);
  }
}

async function postBook(title: string, author: string) {
  try {
    const books = await axios.post("/book", { title, author });
    return books;
    
  } catch (error) {
    console.error(error);
  }
}

async function searchBooks(title: string, author: string) {
  try {
    const searchedBooks = await axios.get(`/book?title=${title}&author=${author}`);
    return searchedBooks;

  } catch (error) {
    console.error(error);
  }
}