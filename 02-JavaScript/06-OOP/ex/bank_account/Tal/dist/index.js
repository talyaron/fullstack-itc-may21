var Transaction = /** @class */ (function () {
    function Transaction(amount, date, place, description) {
        this.amount = amount;
        this.date = date;
        this.place = place;
        this.description = description;
    }
    return Transaction;
}());
var Account = /** @class */ (function () {
    function Account() {
        this.account = [];
    }
    Account.prototype.addNewTransaction = function (amount, date, place, description) {
        this.account.push(new Transaction(amount, date, place, description));
    };
    Account.prototype.calculateSum = function () {
        var sum = this.account.reduce(function (sum, transaction) { return sum + transaction.amount; }, 0);
        return sum;
    };
    return Account;
}());
var account = new Account();
account.addNewTransaction(100, new Date(), 'Tel-Aviv', 'Bank deposit');
account.addNewTransaction(-300, new Date(), 'Ramat-Gan', 'ATM redrwal');
console.log(account.calculateSum());
