var Transaction = /** @class */ (function () {
    function Transaction(amount, date, place, description) {
        this.amount = amount;
        this.date = date;
        this.place = place;
        this.description = description;
    }
    return Transaction;
}());
var bankAccount = [];
bankAccount.push(new Transaction(13, new Date(), 'tel-aviv', 'ATM transaction'));
bankAccount.push(new Transaction(-200, new Date(), 'tel-aviv', 'ATM transaction'));
console.log(bankAccount);
