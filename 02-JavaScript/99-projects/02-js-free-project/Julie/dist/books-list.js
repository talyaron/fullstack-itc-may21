// Grab your array from local storage and display it
function retrieveStorage() {
    var booksList = JSON.parse(localStorage.getItem("myLibrary"));
    renderBook(booksList);
}
retrieveStorage();
function renderBook(booksList) {
    var booksRoot = document.querySelector("#booksRoot");
    booksList.forEach(function (book) {
        var booktoDom = "<div class=\"form-wrapper-random\">\n    <div>\n        <p><span class = \"title\">Book Name: </span>" + book.bookName + "</p>\n    </div>\n    <div>\n    <p><span class = \"author\">Author: </span>" + book.author + "</p>\n    </div>\n    <div>\n    <p><span class = \"publication-year\">Year of Publication: </span>" + book.pubYear + "</p>\n    </div>\n    <div>\n    <p><span class = \"date-started\">Date Started: </span>" + book.dateStarted + "</p>\n    </div>\n    <div>\n    <p><span class = \"date-finished\">Date Finished: </span>" + book.dateFinished + "</p>\n    </div>\n    <div>\n    <p><span class = \"book-summary\">Summary: </span>" + book.summary + "</p>\n    </div>\n    <div>\n    <p><span class = \"book-mark\">Mark out of Ten: </span>" + book.mark + "</p>\n      </div>\n  </div>";
        booksRoot.insertAdjacentHTML("afterbegin", booktoDom);
    });
}
