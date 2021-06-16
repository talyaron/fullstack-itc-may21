"use strict";
exports.__esModule = true;
var Transaction = /** @class */ (function () {
    function Transaction(amount, date, place, description) {
        this.transactionId = "id" + Math.random().toString(16).slice(2);
        this.amount = amount;
        this.date = date;
        this.place = place;
        this.description = description;
    }
    return Transaction;
}());
var Account = /** @class */ (function () {
    function Account(name) {
        this.account = [];
        this.name = '';
        this.name = name;
    }
    Account.prototype.addNewTransaction = function (amount, date, place, description) {
        var newTransaction = new Transaction(amount, date, place, description);
        this.account.push(newTransaction);
        return newTransaction.transactionId;
    };
    Account.prototype.calculateSum = function () {
        var sum = this.account.reduce(function (sum, transaction) { return sum + transaction.amount; }, 0);
        return sum;
    };
    Account.prototype.editTransaction = function (transactionIdToEdit, updatedDescription) {
        try {
            //find the transactiond
            var transactionIndex = this.account.findIndex(function (transaction) { return transaction.transactionId === transactionIdToEdit; });
            console.log(transactionIndex);
            //want to edit
            this.account[transactionIndex].description = updatedDescription;
        }
        catch (e) {
            console.error(e);
        }
    };
    Account.prototype.filterByDate = function (fromDate, toDate) {
        try {
            // create the array to be returned eventually + find all transactions between those dates
            var filteredbyDates = this.account.filter(function (transaction) { return ((transaction.date >= fromDate) && (transaction.date <= toDate)); });
            // return a new array with only those transactions
            return filteredbyDates;
        }
        catch (er) {
            console.error(er);
        }
    };
    return Account;
}());
var account = new Account('Yaniv');
var transactionId1 = account.addNewTransaction(100, new Date(), 'Tel-Aviv', 'Bank deposit');
account.addNewTransaction(-300, new Date(), 'Ramat-Gan', 'ATM redrwal');
console.log(account.calculateSum());
console.log(JSON.stringify(account));
account.editTransaction(transactionId1, 'Walllllaaaaa!!!');
console.log(account);
var filteredAccount = account.filterByDate(new Date('15-jun-2021'), new Date('17-jun-2021'));
console.log(filteredAccount);
