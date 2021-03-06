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
    Account.prototype.findDate = function (fromDate, toDate) {
        var transactionDates = [];
        var arr = [];
        transactionDates = this.account.filter(function (transaction) { return transaction.date > fromDate && transaction.date < toDate; });
        var dates1 = [this.account.filter(function (transaction) { return transaction.date; })];
        console.log(dates1);
        return transactionDates;
    };
    return Account;
}());
var account = new Account('Yaniv');
var transactionId1 = account.addNewTransaction(100, new Date(), 'Tel-Aviv', 'Bank deposit');
account.addNewTransaction(-300, new Date(), 'Ramat-Gan', 'ATM redrwal');
var bla = new Transaction(-300, new Date(), 'Ramat-Gan', 'ATM redrwal');
console.log(JSON.stringify(account));
account.editTransaction(transactionId1, 'Walllllaaaaa!!!');
console.log(account);
console.log(account.findDate(new Date('1-1-2050'), new Date('1-1-3000')));
