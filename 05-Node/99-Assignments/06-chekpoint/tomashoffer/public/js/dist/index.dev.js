"use strict";

function handleSubmit(e) {
  var _e$target$elements, title, author, newBook, response;

  return regeneratorRuntime.async(function handleSubmit$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          e.preventDefault();
          _e$target$elements = e.target.elements, title = _e$target$elements.title, author = _e$target$elements.author;
          title = title.value.toUpperCase();
          author = author.value.toUpperCase();
          console.log(title, author);
          newBook = {
            title: title,
            author: author
          };
          _context.next = 9;
          return regeneratorRuntime.awrap(axios.post('/book/addbook', newBook));

        case 9:
          response = _context.sent;
          window.location.reload();
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
}

window.onload = setTimeout(function getBooks() {
  var _getBooks, books;

  return regeneratorRuntime.async(function getBooks$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(axios('/book/getbook'));

        case 3:
          _getBooks = _context2.sent;
          books = _getBooks.data;
          renderBooks(books);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.error(e);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
}, 380);

function renderBooks(books) {
  var root, html;
  return regeneratorRuntime.async(function renderBooks$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          try {
            root = document.querySelector("#tablaRender");
            html = "";
            books.forEach(function (book) {
              html += "<tr>\n                    <th scope=\"row\">".concat(book.title, "</th>\n                     <td>").concat(book.author, "</td>\n                     <td><i onclick='deleteBook(\"").concat(book.id, "\")' class=\"fas fa-trash\"></i></td>\n                 </tr>");
            });
            root.innerHTML = html;
          } catch (e) {
            console.error(e);
          }

        case 1:
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
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(axios.post("/book/delete/".concat(id)));

        case 3:
          window.location.reload();
          _context4.next = 9;
          break;

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          console.error(_context4.t0);

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 6]]);
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