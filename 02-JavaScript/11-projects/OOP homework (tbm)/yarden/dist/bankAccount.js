var Account = /** @class */ (function () {
    function Account(totalAmount, transactionList) {
        var _this = this;
        if (totalAmount === void 0) { totalAmount = 0; }
        this.transactionList = [];
        this.addTransaction = function (transaction) {
            _this.transactionList.push(transaction);
            _this.totalAmount += transaction.amount;
        };
        this.total = function () {
            return _this.totalAmount;
        };
        this.totalAmount = totalAmount;
        this.transactionList = transactionList;
    }
    return Account;
}());
var Transaction = /** @class */ (function () {
    function Transaction(description, amount) {
        this.addDeposit = function () {
            var depositButton = document.querySelector('#depositButton');
            var depositSum = document.querySelector('#deposit');
            depositSum.addEventListener('click', function () {
                return Account.total += depositSum;
            });
        };
        this.addWithdrawal = function () {
            var withdrawButton = document.querySelector('#withdrawButton');
            var withdrawSum = document.querySelector('#withdrawSum');
            withdrawButton.addEventListener('click', function () {
                return Account.total += withdrawSum;
            });
        };
        this.generateTranListItem = (this.description, this.amount);
        this.description = description;
        this.amount = amount;
    }
    return Transaction;
}());
{
    var tranList = document.querySelector('.overview-wrapper__transactions-list');
    tranList.appendChild;
}
