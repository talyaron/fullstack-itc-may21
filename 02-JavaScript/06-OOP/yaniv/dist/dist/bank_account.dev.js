"use strict";

var Transaction =
/** @class */
function () {
  function Transaction(transAmount, transBiz) {
    this.transDate = new Date();
    this.transId = "id" + Math.random().toString(16).slice(2);
    this.transBiz = transBiz;
    this.transAmount = transAmount;
  }

  return Transaction;
}();

var Account =
/** @class */
function () {
  function Account() {
    this.allTransactions = [];
  } // constructor (profImageUrl : string) {
  //     this.profImageUrl = profImageUrl;
  // }


  Account.prototype.addTrans = function (transaction) {
    this.allTransactions.push(transaction);
    this.addTransToDOM(transaction);
    this.refreshTotal(transaction.transAmount);
  };

  Account.prototype.addTransToDOM = function (transaction) {
    var transContainer = document.querySelector('.transactions');
    var newTrans = document.createElement("div");
    newTrans.classList.add('transactions__item', 'transactions__item--action');
    transContainer.appendChild(newTrans);
    var newTransSign = document.createElement("i");
    newTransSign.id = 'sign';

    if (transaction.transAmount > 0) {
      newTransSign.classList.add('fas', 'fa-2x', 'fa-plus-circle');
      newTransSign.style.color = 'green';
    } else {
      newTransSign.classList.add('fas', 'fa-2x', 'fa-minus-circle');
      newTransSign.style.color = 'red';
    }

    newTrans.appendChild(newTransSign);
    var newTransAmount = document.createElement("div");
    newTransAmount.id = 'trans_amount';
    newTransAmount.innerText = "\u20AA" + transaction.transAmount;
    newTrans.appendChild(newTransAmount);
    var newTransDate = document.createElement("div");
    newTransDate.id = 'trans_date';
    newTransDate.innerText = "" + transaction.transDate;
    newTrans.appendChild(newTransDate);
    var newTransBiz = document.createElement("div");
    newTransBiz.id = 'trans_business';
    newTransBiz.innerText = "" + transaction.transBiz;
    newTrans.appendChild(newTransBiz);
    var newTransId = document.createElement("div");
    newTransId.id = 'trans_id';
    newTransId.innerText = "" + transaction.transId;
    newTrans.appendChild(newTransId);
  };

  Account.prototype.refreshTotal = function (transAmount) {
    this.totalAmount += transAmount;
    this.updateDOMTotal(this.totalAmount);
  };

  Account.prototype.updateDOMTotal = function (totalAmount) {
    var domTotal = document.querySelector('#total_amount');
    domTotal.innerText = "\u20AA" + totalAmount;
  };

  return Account;
}();

var isModalOpen = false;

var openModal = function openModal() {
  var addTransBtn = document.querySelector(".transactions__item--add");
  var modal = document.querySelector(".modalWrapper");
  var modalBox = document.querySelector(".modalBox");
  addTransBtn.addEventListener("click", function (ev) {
    isModalOpen = true;
    modal.style.display = "flex";
    modalBox.style.display = "unset";
  });
};

var closeModal = function closeModal() {
  var close = document.querySelector(".close");
  var modal = document.querySelector(".modalWrapper");
  var modalBox = document.querySelector(".modalBox");
  close.addEventListener("click", function (ev) {
    isModalOpen = false;
    modal.style.display = "none";
    modalBox.style.display = "none";
  });
};

var transactions = new Account();

var handleSubmit = function handleSubmit(ev) {
  ev.preventDefault();
  var transAmount = Number(ev.target.elements.transAmount.value);
  var transBiz = ev.target.elements.transBiz.value;
  var transaction = new Transaction(transAmount, transBiz);
  transactions.addTrans(transaction);
  ev.target.reset();
};

openModal();
closeModal();