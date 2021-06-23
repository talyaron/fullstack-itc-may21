"use strict";

var handleSubmit = function handleSubmit(ev) {
  ev.preventDefault();
  var amount = ev.target.elements.amount.value;
  var description = ev.target.elements.description.value;
  console.log(amount);
  console.log(description);
  var transaction = new Transaction(amount, description);
  transactions.add(transaction);
  transactions.renderTransactions();
  transactions.runningTotal();
  ev.target.reset();
};

var Transaction =
/** @class */
function () {
  function Transaction(amount, description) {
    this.amount = amount;
    this.description = description;
  }

  return Transaction;
}();

var AllTransactions =
/** @class */
function () {
  function AllTransactions() {
    this.transactions = [];
  }

  AllTransactions.prototype.add = function (transaction) {
    this.transactions.push(transaction);
  };

  AllTransactions.prototype.renderTransactions = function () {
    var transactionsDiv = document.querySelector(".transactions-div");
    var html = "";
    this.transactions.forEach(function (transaction) {
      html += "<p>Amount: " + transaction.amount + " Description: " + transaction.description + " </p>";
    });
    transactionsDiv.innerHTML = html;
  };

  AllTransactions.prototype.runningTotal = function () {
    var totalDiv = document.querySelector(".total");
    var i;

    for (var _i = 0, transactions_1 = transactions; _i < transactions_1.length; _i++) {
      transaction.amount = transactions_1[_i];
      transaction.amount++;
    }

    totalDiv.innerHTML = "<p>Running Total: " + total + "</p>";
  };

  return AllTransactions;
}();

var transactions = new AllTransactions();