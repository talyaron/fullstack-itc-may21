"use strict";

var Transaction =
/** @class */
function () {
  function Transaction(transAmount, transBiz) {
    this.transDate = new Date();
    this.transId = "id" + Math.random().toString(16).slice(2); //YS: Why are these variables defined here and not in the constructor?

    this.transBiz = transBiz;
    this.transAmount = transAmount;
  }

  return Transaction;
}();

document.querySelector("#total_amount").innerHTML = "₪0";

var Account =
/** @class */
function () {
  function Account() {
    this.allTransactions = [];
    this.totalAmount = Number(document.querySelector("#total_amount").innerHTML.replace("₪", ""));
  } // constructor (profImageUrl : string) { // YA: out of scope for this task
  //     this.profImageUrl = profImageUrl;
  // }


  Account.prototype.addTrans = function (transaction) {
    this.allTransactions.push(transaction);
    this.addTransToDOM(transaction);
    this.refreshTotal(transaction.transAmount);
  };

  Account.prototype.addTransToDOM = function (transaction) {
    /*YS: Good, if you wanted to make it shorter as you mention you could have created the HTML as a string (using template literals) and then make it equal or append to the innerHTML (innerHTML= or innerHTML+=):
    <div class="transactions__item transactions__item--action">
        <i id="sign" class="fas fa-2x fa-plus-circle" title="Income" aria-hidden="true" style="color: green;"></i>
        <span class="sr-only">Income</span>
        <div id="trans_amount" style="color: green;">₪20</div>
        <div id="trans_date">16-6-2021</div><div id="trans_business">asfasf</div>
        <div id="trans_id">idbd7eb6f648f0a</div>
    </div>*/
    try {
      var transContainer = document.querySelector(".transactions");
      var signFAClass = transaction.transAmount >= 0 ? "plus" : "minus";
      var signTitle = transaction.transAmount >= 0 ? "Income" : "Expense";
      var transColor = transaction.transAmount >= 0 ? "green" : "red";
      var transFormatedDate = transaction.transDate.getDate() + "-" + (transaction.transDate.getMonth() + 1) + "-" + transaction.transDate.getFullYear();
      var myHtml = "<div class=\"transactions__item transactions__item--action\">\n      <i id=\"sign\" class=\"fas fa-2x fa-" + signFAClass + "-circle\" title=\"" + signTitle + "\" style=\"color: " + transColor + ";\"></i>\n      <div id=\"trans_amount\" style=\"color: " + transColor + ";\">\n        \u20AA" + Math.abs(transaction.transAmount) + "\n      </div>\n      <div id=\"trans_date\">" + transFormatedDate + "</div>\n      <div id=\"trans_business\">" + transaction.transBiz + "</div>\n      <div id=\"trans_id\">" + transaction.transId + "</div>\n    </div>";
      transContainer.insertAdjacentHTML('beforeend', myHtml);
      var totalDate = document.querySelector("#total_date");
      totalDate.innerText = "For Date: " + transFormatedDate;
    } catch (er) {
      console.error(er);
    }
  };

  Account.prototype.refreshTotal = function (transAmount) {
    this.totalAmount += transAmount;
    this.updateDOMTotal(this.totalAmount);
  };

  Account.prototype.updateDOMTotal = function (totalAmount) {
    try {
      var domTotal = document.querySelector("#total_amount");
      domTotal.innerText = "\u20AA" + totalAmount;

      if (totalAmount >= 0) {
        domTotal.style.color = "green";
      } else {
        domTotal.style.color = "red";
      }
    } catch (er) {
      console.error(er);
    }
  };

  return Account;
}();

var isModalOpen = false;
var addTransBtn = document.querySelector(".transactions__item--add");

var openModal = function openModal() {
  //YS: Very nice modal!
  try {
    var modal_1 = document.querySelector(".modalWrapper");
    var modalBox_1 = document.querySelector(".modalBox");
    addTransBtn.addEventListener("click", function (ev) {
      isModalOpen = true;
      modal_1.style.display = "flex";
      modalBox_1.style.display = "unset";
    });
  } catch (er) {
    console.error(er);
  }
};

var closeModal = function closeModal() {
  try {
    var close = document.querySelector(".close");
    var modal_2 = document.querySelector(".modalWrapper");
    var modalBox_2 = document.querySelector(".modalBox");
    close.addEventListener("click", function (ev) {
      isModalOpen = false;
      modal_2.style.display = "none";
      modalBox_2.style.display = "none";
    });
  } catch (er) {
    console.error(er);
  }
};

var transactions = new Account();

var handleSubmit = function handleSubmit(ev) {
  try {
    ev.preventDefault();
    var transAmount = Number(ev.target.elements.transAmount.value);
    var transBiz = ev.target.elements.transBiz.value;
    var transaction = new Transaction(transAmount, transBiz);
    transactions.addTrans(transaction);
    var modal = document.querySelector(".modalWrapper");
    var modalBox = document.querySelector(".modalBox");
    isModalOpen = false;
    modal.style.display = "none";
    modalBox.style.display = "none";
    ev.target.reset();
  } catch (er) {
    console.error(er);
  }
};

openModal();
closeModal();