"use strict";

// 1. Create a bank account for a customer (let it be a class "Account"), which will hold all the transactions.
// 2. Add transaction method ({description, amount (+/-)}) // for advance developers, the transaction should be a class; use a form to add transactions.
// 3. Have a total method.
// 4. Write all transactions in the order they occurred, with the last line: total.
// Use TypeScript, SCSS, BEM etc.
var button1 = document.getElementById('deposit_check'); //YS: Use more descriptive names: depositButton instead of button1. 

var button2 = document.getElementById('withdraw_check');
var amount_total = document.getElementById('amount'); // Funcion para tomar info de formulario

var handleSubmit = function handleSubmit(ev) {
  ev.preventDefault();
  var trans = ev.target.elements.trans.value;
  var amount = ev.target.elements.transaction_amount.valueAsNumber;
  var description = ev.target.elements.transaction_description.value;

  if (button2.checked) {
    amount = -amount;
  } // Esto debe ir debajo del if para que tome los Withdraws negativos (-)


  var newTrasaction = new Transaction(trans, amount, description);

  if (button2.checked) {
    amount = -amount;
  } // Esto debe ir debajo del if para que tome los Withdraws negativos (-)


  var newTrasaction = new Transaction(trans, amount, description);

  var Transaction =
  /** @class */
  function () {
    function Transaction(trans, amount, description) {
      this.trans = trans;
      this.amount = amount;
      this.description = description;
    }

    return Transaction;
  }();

  var TransactionList =
  /** @class */
  function () {
    function TransactionList() {
      this.transaction = []; //YS: Nice! 
    }

    TransactionList.prototype.addTrans = function (trans) {
      this.transaction.push(trans);
    };

    TransactionList.prototype.renderTrans = function () {
      var transRoot = document.querySelector('#acount_transactions__print'); //YS: Try to always put your DOM elements together, at the beginning of your code and in global scope.

      var TotalRoot = document.querySelector('#acount_total__print'); //loop over transactions

      var htmlTrans = '';
      var htmlTotal = 0;
      this.transaction.forEach(function (trans) {
        htmlTrans += "<div class=\"trans\"><li>" + trans.trans + ": $" + trans.amount + " - Description: " + trans.description + "</li></div>";
        htmlTotal += trans.amount;
      });
      console.log(htmlTrans); //YS: Dont leave console logs.  

      transRoot.innerHTML = htmlTrans; //YS: Whenever you have a DOM element followed by a .  (transRoot.innerHTML) you need a try/catch 

      TotalRoot.innerHTML = "$" + htmlTotal;
    };

    return TransactionList;
  }();

  var TransactionList =
  /** @class */
  function () {
    function TransactionList() {
      this.transaction = [];
    }

    TransactionList.prototype.addTrans = function (trans) {
      this.transaction.push(trans);
    };

    TransactionList.prototype.renderTrans = function () {
      var transRoot = document.querySelector("#acount_transactions__print");
      var TotalRoot = document.querySelector("#acount_total__print"); //loop over transactions

      var htmlTrans = "";
      var htmlTotal = 0;
      this.transaction.forEach(function (trans) {
        htmlTrans += "<div class=\"trans\"><li>" + trans.trans + ": $" + trans.amount + " - Description: " + trans.description + "</li></div>";
        htmlTotal += trans.amount;
      });
      console.log(htmlTrans);
      transRoot.innerHTML = htmlTrans;
      TotalRoot.innerHTML = "$" + htmlTotal;
    };

    return TransactionList;
  }();

  var newTrans = new TransactionList();
};