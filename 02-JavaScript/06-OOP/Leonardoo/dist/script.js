/* create a bank account for a customer (let it be a class "account"), which will hold all the transactions.
add transaction method ({description, amount (+/-)}) // for advance developers, the transaction should be a class;
use a form to add transactions.
have a total method.

write all transactions in the order they occurred, with the last line: total.
 */
var Transaction = /** @class */ (function () {
    function Transaction(description, amount, movement) {
        this.description = description;
        this.amount = amount;
        this.movement = movement;
        this.id = Math.random().toString(16).slice(2);
        this.date = new Date();
    }
    return Transaction;
}());
//The class account it will contain all the transactions that I declare before (class Transaction) and the balance:
var Account = /** @class */ (function () {
    function Account(balance) {
        this.transactions = [];
        this.balance = balance;
    }
    //Every time that I add a transaction I will use this method, this add a new transaction to the array   
    Account.prototype.addTransaction = function (transaction) {
        try {
            if (!transaction)
                throw new Error('The transaction it doesn´t exist!');
            this.transactions.push(transaction);
            this.renderTransaction();
            this.total(transaction);
        }
        catch (error) {
            console.error(error);
        }
    };
    //To Show the transaction in the page
    Account.prototype.renderTransaction = function () {
        try {
            var showTransaction = document.querySelector('#transactions');
            if (!showTransaction)
                throw new Error('The element where to show the transactions doesn´t exist!');
            //Doing a loop to show the transaction
            var html_1 = '';
            this.transactions.forEach(function (element) {
                if (element.movement === 'deposit') {
                    html_1 += "<div class=\"deposit\">Description: \"" + element.description + "\"; Amount: $" + element.amount + "; Type: " + element.movement + "; Date: " + element.date.toLocaleDateString() + "</div>";
                }
                else if (element.movement === 'transfer') {
                    html_1 += "<div class=\"transfer\">Description: \"" + element.description + "\"; Amount: $" + element.amount + "; Type: " + element.movement + "; Date: " + element.date.toLocaleDateString() + "</div>";
                }
            });
            showTransaction.innerHTML = html_1;
        }
        catch (error) {
            console.error(error);
        }
    };
    Account.prototype.total = function (transaction) {
        try {
            var totalAmount = document.querySelector('#transactions--total');
            if (!totalAmount)
                throw new Error('The element where to show the balance doesn´t exist!');
            if (transaction.movement === 'deposit') {
                allTransactions.balance += transaction.amount;
            }
            else if (transaction.movement === 'transfer') {
                allTransactions.balance -= transaction.amount;
            }
            var total = "<div>Final balance: $" + allTransactions.balance + "</div>";
            totalAmount.innerHTML = total;
        }
        catch (error) {
            console.error(error);
        }
    };
    return Account;
}());
//I initialice a new array that will contains all the transactions:
var allTransactions = new Account(0);
//With this function I handle the form:
var doingSubmit = function (ev) {
    ev.preventDefault();
    try {
        var description = ev.target.elements.description.value;
        var amount = ev.target.elements.amount.valueAsNumber;
        var movement = ev.target.elements.movement.value;
        var transaction = new Transaction(description, amount, movement);
        if (!transaction)
            throw new Error('The transaction doesn´t exist!');
        if (transaction.movement === 'transfer' && transaction.amount > allTransactions.balance) {
            alert("It is imposible to do the transaction, you don´t have enough money!");
        }
        else {
            allTransactions.addTransaction(transaction);
        }
    }
    catch (error) {
        console.error(error);
    }
};
