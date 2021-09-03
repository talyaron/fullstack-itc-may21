"use strict";

function handleSubmit(e) {
  var _e$target$elements, title, author, newBook, response;

  return regeneratorRuntime.async(function handleSubmit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();
          _e$target$elements = e.target.elements, title = _e$target$elements.title, author = _e$target$elements.author;
          title = title.value.toUpperCase();
          author = author.value.toUpperCase();
          console.log(title, author);
          newBook = {
            title: title,
            author: author
          };
          _context.next = 8;
          return regeneratorRuntime.awrap(axios.post('/book/addbook', newBook));

        case 8:
          response = _context.sent;
          window.location.reload();

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}

window.onload = setTimeout(function getBooks() {
  var getBooks, books;
  return regeneratorRuntime.async(function getBooks$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(axios('/book/getbook'));

        case 2:
          getBooks = _context2.sent;
          books = getBooks.data;
          renderBooks(books);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}, 400);

function renderBooks(books) {
  var root, html;
  return regeneratorRuntime.async(function renderBooks$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          root = document.querySelector("#tablaRender");
          html = "";
          books.forEach(function (book) {
            html += "<tr>\n                    <th scope=\"row\">".concat(book.title, "</th>\n                     <td>").concat(book.author, "</td>\n                     <td><i onclick='deleteBook(\"").concat(book.id, "\")' class=\"fas fa-trash\"></i></td>\n                 </tr>");
          });
          root.innerHTML = html;

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function deleteBook(id) {
  return regeneratorRuntime.async(function deleteBook$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(axios.post("/book/delete/".concat(id)));

        case 2:
          window.location.reload();

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function searchBook(ev) {
  var _searchBar, bookSearch, bookArr, i;

  return regeneratorRuntime.async(function searchBook$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          ev.preventDefault();
          _searchBar = ev.target.parentElement.elements.searchBar.value;
          console.log(_searchBar);
          _context5.next = 6;
          return regeneratorRuntime.awrap(axios.post('/book/searchbook', {
            searchBar: _searchBar
          }));

        case 6:
          bookSearch = _context5.sent;
          bookArr = [bookSearch.data];

          for (i = 0; i < bookArr.length; i++) {
            console.log(bookArr[i].title);
            renderBooks(bookArr[i]);
          }

          _context5.next = 14;
          break;

        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          console.error(_context5.t0);

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 11]]);
} // EVENTLISTENERS


var searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keyup', searchBook);