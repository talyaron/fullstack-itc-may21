"use strict";

var balance = document.getElementById("balance");
var money_plus = document.getElementById("money-plus");
var money_minus = document.getElementById("money-minus");
var list = document.getElementById("list");
var form = document.getElementById("form");
var text = document.getElementById("text");
var amount = document.getElementById("amount"); // const localStorageTransactions = JSON.parse(
//   localStorage.getItem('transactions')
// );
// let transactions =
//   localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

var transactions = [{}]; // Add transaction

function addTransaction(e) {
  var addtransaction, transactionServer, data;
  return regeneratorRuntime.async(function addTransaction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          e.preventDefault();

          if (!(text.value.trim() === "" || amount.value.trim() === "")) {
            _context.next = 5;
            break;
          }

          alert("Please add a text and amount");
          _context.next = 17;
          break;

        case 5:
          addtransaction = {
            text: text.value,
            amount: +amount.value
          };
          console.log(addtransaction);
          _context.next = 9;
          return regeneratorRuntime.awrap(axios.post("/addTransaction", {
            addtransaction: addtransaction
          }));

        case 9:
          transactionServer = _context.sent;
          data = transactionServer.data;
          transactions.push(data);
          console.log(transactions);
          addTransactionDOM(transactions);
          updateValues(); // updateLocalStorage();

          text.value = "";
          amount.value = "";

        case 17:
        case "end":
          return _context.stop();
      }
    }
  });
} // Add transactions to DOM list


function addTransactionDOM(transactions) {
  // Get sign
  var sign = transactions.amount < 0 ? "-" : "+";
  var item = document.createElement("li"); // Add class based on value

  item.classList.add(transactions.amount < 0 ? "minus" : "plus");
  item.innerHTML = "\n    ".concat(transactions.text, " <span>").concat(sign).concat(Math.abs(transactions.amount), "</span> <button class=\"delete-btn\" onclick=\"removeTransaction(").concat(transactions.id, ")\">x</button>\n  </span> <button class=\"edit-btn\" onclick=\"updateTransaction(").concat(transactions.id, ")\">+</button>\n  ");
  list.appendChild(item);
} // Update the balance, income and expense


function updateValues() {
  var amounts = transactions.map(function (transaction) {
    return transaction.amount;
  });
  var total = amounts.reduce(function (acc, item) {
    return acc += item;
  }, 0).toFixed(2);
  var income = amounts.filter(function (item) {
    return item > 0;
  }).reduce(function (acc, item) {
    return acc += item;
  }, 0).toFixed(2);
  var expense = (amounts.filter(function (item) {
    return item < 0;
  }).reduce(function (acc, item) {
    return acc += item;
  }, 0) * -1).toFixed(2);
  balance.innerText = "$".concat(total);
  money_plus.innerText = "$".concat(income);
  money_minus.innerText = "$".concat(expense);
} // Remove transaction by ID


function removeTransaction(id) {
  var option, transactionData;
  return regeneratorRuntime.async(function removeTransaction$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          option = confirm("Are you sure do you want to delete this transaction?");

          if (!option) {
            _context2.next = 7;
            break;
          }

          _context2.next = 5;
          return regeneratorRuntime.awrap(axios["delete"]("/deleteTransaction/".concat(id)));

        case 5:
          transactionData = _context2.sent;
          addTransactionDOM(transactionData.data);

        case 7:
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.error(_context2.t0);

        case 12:
          //   updateLocalStorage();
          init();

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
} //Update transaction by id


function updateTransaction(id) {
  var newText, newAmount, updateTransaction, editTransaction;
  return regeneratorRuntime.async(function updateTransaction$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          newText = text;
          newAmount = amount;
          updateTransaction = {
            newText: newText,
            newAmount: newAmount
          };
          _context3.next = 5;
          return regeneratorRuntime.awrap(axios.put("/editTransaction/".concat(id)));

        case 5:
          editTransaction = _context3.sent;
          transactions.push(editTransaction);
          addTransactionDOM(transactions);
          updateValues();

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  });
} // Init app


function init() {
  list.innerHTML = "";
  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

function getAllTransactions() {
  var getTransactions;
  return regeneratorRuntime.async(function getAllTransactions$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(axios.get("allTransactions"));

        case 2:
          getTransactions = _context4.sent;
          addTransactionDOM(getTransactions.data);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
}

form.addEventListener("submit", addTransaction);