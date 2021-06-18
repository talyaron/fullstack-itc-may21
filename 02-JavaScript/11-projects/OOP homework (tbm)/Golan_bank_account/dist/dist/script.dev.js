"use strict";

//MEthod for adding transactions:
var Transaction =
/** @class */
function () {
  function Transaction(name, banknum, branch, acc, amount, date) {
    this.transactionId = "id" + Math.random().toString(16).slice(2);
    this.name = name;
    this.banknum = banknum;
    this.branch = branch;
    this.acc = acc;
    this.amount = amount;
    this.date = date;
  }

  return Transaction;
}(); //Method for displaying the information in an array:


var Account =
/** @class */
function () {
  function Account(name) {
    this.account = [];
    this.name = "";
    this.name = name;
  } //method for adding new transactions:


  Account.prototype.addNewTransaction = function (name, banknum, branch, acc, amount, date) {
    var newTransaction = new Transaction(name, banknum, branch, acc, amount, date);
    this.account.push(newTransaction);
    return newTransaction.transactionId;
  };

  return Account;
}();

var account = new Account("Golan");
var transactionId1 = account.addNewTransaction(100, new Date());
account.addNewTransaction(-15, new Date());
console.log(account); //method for injecting the info from the form to the DOM
//couldn't figure out how to do this function in TS

function handleSubmit(event) {
  event.preventDefault();
  console.dir(event.target);
  var name = event.target.elements.name.value;
  var banknum = event.target.elements.banknum.value;
  var branch = event.target.elements.branch.value;
  var acc = Number(event.target.elements.acc.value); // let amount = event.target.elements.amount.value;
  // let date = event.target.elements.date.value;
  //for some reason I couldn't make the amount and date work when printing to console.log or injecting to the DOM

  console.log(name, banknum, branch, acc);
  document.getElementById("data").innerHTML = name + " transferred a secret amount of funds from bank number " + banknum + ", branch number " + branch + ", account number " + acc + ".";
} //method for calculating sum - couldn't connect it to the rest of my code or make it work
// calculateSum(): number {
//     const sum = this.acc.reduce(()sum,transaction) => {
//         return sum + transaction.amount;
//     }, 0);
//     return sum;
// }
//method for creating new instances - Something with createElement and appendChild methods. - planned to do it but didn't have enough time before new deadline