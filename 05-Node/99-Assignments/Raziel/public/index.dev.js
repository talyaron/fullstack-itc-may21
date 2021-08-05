"use strict";

/* www.youtube.com/CodeExplained */
// SELECT ELEMENTS
var balanceEl = document.querySelector(".balance .value");
var incomeTotalEl = document.querySelector(".income-total");
var outcomeTotalEl = document.querySelector(".outcome-total");
var incomeEl = document.querySelector("#income");
var expenseEl = document.querySelector("#expense");
var allEl = document.querySelector("#all");
var incomeList = document.querySelector("#income .list");
var expenseList = document.querySelector("#expense .list");
var allList = document.querySelector("#all .list"); // SELECT BTNS

var expenseBtn = document.querySelector(".tab1");
var incomeBtn = document.querySelector(".tab2");
var allBtn = document.querySelector(".tab3"); // INPUT BTS

var addExpense = document.querySelector(".add-expense");
var expenseTitle = document.getElementById("expense-title-input");
var expenseAmount = document.getElementById("expense-amount-input");
var addIncome = document.querySelector(".add-income");
var incomeTitle = document.getElementById("income-title-input");
var incomeAmount = document.getElementById("income-amount-input"); // VARIABLES

var ENTRY_LIST = [];
var balance = 0,
    income = 0,
    outcome = 0;
var DELETE = "delete",
    EDIT = "edit"; // // LOOK IF THERE IS SAVED DATA IN LOCALSTORAGE
// ENTRY_LIST = JSON.parse(localStorage.getItem("entry_list")) || [];
// updateUI();
// EVENT LISTENERS

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
});
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
incomeList.addEventListener("click", deleteOrEdit);
expenseList.addEventListener("click", deleteOrEdit);
allList.addEventListener("click", deleteOrEdit); // HELPERS

function deleteOrEdit(event) {
  var targetBtn = event.target;
  var entry = targetBtn.parentNode;

  if (targetBtn.id == DELETE) {
    deleteEntry(entry);
  } else if (targetBtn.id == EDIT) {
    editEntry(entry);
  }
}

function deleteEntry(entry) {
  ENTRY_LIST.splice(entry.id, 1);
  updateUI();
}

function editEntry(entry) {
  console.log(entry);
  var ENTRY = ENTRY_LIST[entry.id];

  if (ENTRY.type == "income") {
    incomeAmount.value = ENTRY.amount;
    incomeTitle.value = ENTRY.title;
  } else if (ENTRY.type == "expense") {
    expenseAmount.value = ENTRY.amount;
    expenseTitle.value = ENTRY.title;
  }

  deleteEntry(entry);
}

function updateUI() {
  income = calculateTotal("income", ENTRY_LIST);
  outcome = calculateTotal("expense", ENTRY_LIST);
  balance = Math.abs(calculateBalance(income, outcome)); // DETERMINE SIGN OF BALANCE

  var sign = income >= outcome ? "$" : "-$"; // UPDATE UI

  balanceEl.innerHTML = "<small>".concat(sign, "</small>").concat(balance);
  outcomeTotalEl.innerHTML = "<small>$</small>".concat(outcome);
  incomeTotalEl.innerHTML = "<small>$</small>".concat(income);
  clearElement([expenseList, incomeList, allList]);
  ENTRY_LIST.forEach(function (entry, index) {
    if (entry.type == "expense") {
      showEntry(expenseList, entry.type, entry.title, entry.amount, index);
    } else if (entry.type == "income") {
      showEntry(incomeList, entry.type, entry.title, entry.amount, index);
    }

    showEntry(allList, entry.type, entry.title, entry.amount, index);
  });
  updateChart(income, outcome); // localStorage.setItem("entry_list", JSON.stringify(ENTRY_LIST));
}

function showEntry(list, type, title, amount, id) {
  var entry = " <li id = \"".concat(id, "\" class=\"").concat(type, "\">\n                        <div class=\"entry\">").concat(title, ": $").concat(amount, "</div>\n                        <div id=\"edit\"></div>\n                        <div id=\"delete\"></div>\n                    </li>");
  var position = "afterbegin";
  list.insertAdjacentHTML(position, entry);
}

function clearElement(elements) {
  elements.forEach(function (element) {
    element.innerHTML = "";
  });
}

function calculateTotal(type, list) {
  var sum = 0;
  list.forEach(function (entry) {
    if (entry.type == type) {
      sum += entry.amount;
    }
  });
  return sum;
}

function calculateBalance(income, outcome) {
  return income - outcome;
}

function clearInput(inputs) {
  inputs.forEach(function (input) {
    input.value = "";
  });
}

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
}