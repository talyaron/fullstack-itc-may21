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
    }
    Account.prototype.addNewTransaction = function (amount, date, place, description) {
        this.account.push(new Transaction(amount, date, place, description));
    };
    return Account;
}());
