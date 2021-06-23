// Grab your array from local storage and display it

function retrieveStorage() {
  const booksList = JSON.parse(localStorage.getItem("myLibrary"));
  renderBook(booksList);
}
retrieveStorage();

function renderBook(booksList) {
  const booksRoot: HTMLElement = document.querySelector("#booksRoot");
  booksList.forEach((book) => {
    const booktoDom = `<div class="form-wrapper-random">
    <div>
        <p><span class = "title">Book Name: </span>${book.bookName}</p>
    </div>
    <div>
    <p><span class = "author">Author: </span>${book.author}</p>
    </div>
    <div>
    <p><span class = "publication-year">Year of Publication: </span>${book.pubYear}</p>
    </div>
    <div>
    <p><span class = "date-started">Date Started: </span>${book.dateStarted}</p>
    </div>
    <div>
    <p><span class = "date-finished">Date Finished: </span>${book.dateFinished}</p>
    </div>
    <div>
    <p><span class = "book-summary">Summary: </span>${book.summary}</p>
    </div>
    <div>
    <p><span class = "book-mark">Mark out of Ten: </span>${book.mark}</p>
      </div>
  </div>`;
    booksRoot.insertAdjacentHTML("afterbegin", booktoDom);
  });
}
