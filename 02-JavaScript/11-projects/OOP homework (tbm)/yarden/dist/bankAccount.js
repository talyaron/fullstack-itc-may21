var totalAmount = 0;
var Transaction = /** @class */ (function () {
    function Transaction(description, amount) {
        this.addWithdrawal = function () {
            var withdraw = document.querySelector('#withdraw');
            withdraw.addEventListener('click', function () {
                return totalAmount -= withdraw;
                Number;
            });
        };
        this.addDeposit = function () {
            var deposit = document.querySelector('#deposit');
            deposit.addEventListener('click', function () {
                return totalAmount += deposit;
                Number;
            });
        };
        this.description = description;
        this.amount = amount;
    }
    return Transaction;
}());
var Account = /** @class */ (function () {
    function Account() {
        var _this = this;
        this.transactionList = [];
        this.addTransaction = function (transaction) {
            _this.transactionList.push(transaction);
            _this.totalAmount += transaction.amount;
        };
        this.total = function () { return _this.totalAmount; };
        this.getTransactionsString = function () { return _this.transactionList.reduce; };
    }
    return Account;
}());
