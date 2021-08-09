"use strict";

//buttons
var btnReturn = document.querySelector('.headerh1--i'); //addEventListener

btnReturn.addEventListener('click', returnIndex);

function returnIndex(ev) {
  ev.preventDefault();
  window.location.href = 'index.html';
}

function getCookies(ev) {
  var response, _response$data, username, balance, rootMessage, rootBalance, root;

  return regeneratorRuntime.async(function getCookies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ev.preventDefault();
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get('/getCookie'));

        case 3:
          response = _context.sent;
          _response$data = response.data, username = _response$data.username, balance = _response$data.balance;
          rootMessage = document.querySelector('#rootMessage');
          rootMessage.innerHTML = "<p>Hello \u270B ".concat(username.charAt(0).toUpperCase() + username.slice(1), ", welcome to our bank. Have a nice day</p>");
          rootBalance = document.querySelector('#rootBalance');

          if (balance < 0) {
            rootBalance.style.border = '2px solid #FF6666';
            rootBalance.innerHTML = "\n                                     <p>Your balance account is:\n                                        <span class=\"rootBalance--red\">\u20AA ".concat(parseFloat(balance), "</span>\n                                     </p>\n                                ");
          } else {
            rootBalance.style.border = '2px solid #90EE90';
            rootBalance.innerHTML = "\n                                     <p>Your balance account is:\n                                        <span class=\"rootBalance--green\">\u20AA ".concat(parseFloat(balance), "</span>\n                                     </p>\n                                ");
          }

          root = document.querySelector('#root');

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}