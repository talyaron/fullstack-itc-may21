//method to see the transactions in a specific date
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
    Account.prototype.findTransactionsByDate = function (fromDate, toDate) {
        try {
            this.account.forEach(function (element) {
                if (fromDate < element.date && toDate > element.date) {
                    console.log(element.description);
                }
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    return Account;
}());
var account = new Account('Yaniv');
var transactionId1 = account.addNewTransaction(100, new Date(), 'Tel-Aviv', 'Bank deposit');
account.addNewTransaction(-300, new Date(), 'Ramat-Gan', 'ATM redrwal');
account.addNewTransaction(-300, new Date('20-Jun-2020'), 'Ramat-Gan', 'ATM redrwal');
/* console.log(account.calculateSum());
console.log(JSON.stringify(account))
 */
account.editTransaction(transactionId1, 'Walllllaaaaa!!!');
/* console.log(account) */
var doSubmit = function (ev) {
    ev.preventDefault();
    var fromDate = new Date(ev.target.elements.fromDate.value);
    var toDate = new Date(ev.target.elements.toDate.value);
    account.findTransactionsByDate(fromDate, toDate);
};
