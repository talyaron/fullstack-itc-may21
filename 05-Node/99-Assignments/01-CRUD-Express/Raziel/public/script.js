const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

// const localStorageTransactions = JSON.parse(
//   localStorage.getItem('transactions')
// );

// let transactions =
//   localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

let transactions = [{}];

// Add transaction
async function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Please add a text and amount");
  } else {
    const addtransaction = {
      text: text.value,
      amount: +amount.value,
    };
    console.log(addtransaction);
    const transactionServer = await axios.post("/addTransaction", {
      addtransaction,
    });

    const data = transactionServer.data;

    transactions.push(data);
    console.log(transactions);
    addTransactionDOM(transactions);

    updateValues();

    // updateLocalStorage();

    text.value = "";
    amount.value = "";
  }
}

// Add transactions to DOM list
function addTransactionDOM(transactions) {
  // Get sign
  const sign = transactions.amount < 0 ? "-" : "+";

  const item = document.createElement("li");

  // Add class based on value
  item.classList.add(transactions.amount < 0 ? "minus" : "plus");

  item.innerHTML = `
    ${transactions.text} <span>${sign}${Math.abs(
    transactions.amount
  )}</span> <button class="delete-btn" onclick="removeTransaction(${
    transactions.id
  })">x</button>
  </span> <button class="edit-btn" onclick="updateTransaction(${
    transactions.id
  })">+</button>
  `;

  list.appendChild(item);
}

// Update the balance, income and expense
function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  balance.innerText = `$${total}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
}

// Remove transaction by ID
async function removeTransaction(id) {
  try {
    const option = confirm(
      `Are you sure do you want to delete this transaction?`
    );
    if (option) {
      const transactionData = await axios.delete(`/deleteTransaction/${id}`);
      addTransactionDOM(transactionData.data);
    }
  } catch (error) {
    console.error(error);
  }

  //   updateLocalStorage();

  init();
}

//Update transaction by id

async function updateTransaction(id) {
  const newText = text;
  const newAmount = amount;
  const updateTransaction = {
    newText,
    newAmount,
  };
  const editTransaction = await axios.put(`/editTransaction/${id}`);
  transactions.push(editTransaction);
  addTransactionDOM(transactions);

  updateValues();
}

// Init app
function init() {
  list.innerHTML = "";

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();

async function getAllTransactions() {
  const getTransactions = await axios.get("allTransactions");
  addTransactionDOM(getTransactions.data);
}
form.addEventListener("submit", addTransaction);
