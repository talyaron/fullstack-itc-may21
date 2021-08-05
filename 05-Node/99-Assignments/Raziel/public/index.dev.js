"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

//the consts
var balance = document.querySelector(".balance .value");
var outcomeTotal = document.querySelector("outcome-total");
var incomeTotal = document.querySelector("income-total"); //the chart

var chart = document.querySelector(".chart"); // SELECT BTNS

var expenseBtn = document.querySelector(".tab1");
var incomeBtn = document.querySelector(".tab2");
var allBtn = document.querySelector(".tab3"); //output

var incomeEl = document.querySelector("#income");
var expenseEl = document.querySelector("#expense");
var allEl = document.querySelector("#all");
var incomeList = document.querySelector("#income .list");
var expenseList = document.querySelector("#expense .list");
var allList = document.querySelector("#all .list"); //input_status

var addIncome = document.querySelector(".add-income");
var incomeTitle = document.getElementById("income-title-input");
var incomeAmount = document.getElementById("income-amount-input"); //dunctions for disabling and enabiling

function show(element) {
  element.classList.remove("hide");
}

function hide(elements) {
  elements.forEach(function (element) {
    element.classList.add("hide");
  });
}

function active(element) {
  element.classList.add("active");
}

function inactive(elements) {
  elements.forEach(function (element) {
    element.classList.remove("active");
  });
} //disable and enable expense income and all btns


expenseBtn.addEventListener("click", function () {
  show(expenseEl);
  hide([incomeEl, allEl]);
  active(expenseBtn);
  inactive([incomeBtn, allBtn]);
});
incomeBtn.addEventListener("click", function () {
  show(incomeEl);
  hide([expenseEl, allEl]);
  active(incomeBtn);
  inactive([expenseBtn, allBtn]);
});
allBtn.addEventListener("click", function () {
  show(allEl);
  hide([incomeEl, expenseEl]);
  active(allBtn);
  inactive([incomeBtn, expenseBtn]);
}); /////// adding income and expness to array

var ENTRY_LIST = [];
addIncome.addEventListener("click", function () {
  // IF ONE OF THE INPUTS IS EMPTY => EXIT
  if (!incomeTitle.value || !incomeAmount.value) return; // SAVE THE ENTRY TO ENTRY_LIST

  var income = {
    type: "income",
    title: incomeTitle.value,
    amount: parseInt(incomeAmount.value)
  };
  ENTRY_LIST.push(income);
  updateUI();
  clearInput([incomeTitle, incomeAmount]);
});
addExpense.addEventListener("click", function () {
  // IF ONE OF THE INPUTS IS EMPTY => EXIT
  if (!expenseTitle.value || !expenseAmount.value) return; // SAVE THE ENTRY TO ENTRY_LIST

  var expense = {
    type: "expense",
    title: expenseTitle.value,
    amount: parseInt(expenseAmount.value)
  };
  ENTRY_LIST.push(expense);
  updateUI();
  clearInput([expenseTitle, expenseAmount]);
}); //////////////

function calculateTotal(type, ENTRY_LIST) {
  var sum;
  ENTRY_LIST.forEach(function (entry) {
    if (type.entry == type) {
      sym += entry.amount;
    }
  });
  return sum;
}

function calculateBalance(income, outcome) {
  return income - outcome;
} /////////////////////////////////
//each time i add an income/out come the balance and the incom/outcom will be updated.


function updateUI() {
  income = calculateTotal("income", ENTRY_LIST);
  outcome = calculateTotal("expense", ENTRY_LIST);
  balance = (_readOnlyError("balance"), calculateBalance(income, outcome));
  incomeTotal.innerHTML = "<small>$<small>".concat(income);
  outcomeTotal.innerHTML = "<small>$<small>".concat(outcome);
  clearElement([incomeList, expenseList, allList]);
}