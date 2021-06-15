var BankAccount = /** @class */ (function () {
    function BankAccount(description, amount) {
        this.amount = amount;
        this.description = description;
    }
    return BankAccount;
}());
var Transaction = /** @class */ (function () {
    function Transaction() {
        this.transaction = [];
    }
    Transaction.prototype.getTransaction = function (acc) {
        this.transaction.push(acc);
    };
    Transaction.prototype.getTotalAmount = function (count) {
        var x = 0;
        for (var i = 0; i < count; i++) {
            x += this.transaction[i]['amount'];
        }
        return x;
    };
    Transaction.prototype.renderTransaction = function () {
        var _this = this;
        var descriptionValue = document.querySelector('#descriptionValue');
        var depositVale = document.querySelector('#depositValue');
        var totalValue = document.querySelector('#totalValue');
        var description = '';
        var deposit = '';
        var withdraw = '';
        var total = '';
        var count = 1;
        this.transaction.forEach(function (acc) {
            description += "<span>" + count + "- " + acc.description + "</span><br>";
            deposit += "<span> " + acc.amount.toFixed(2) + " \u20AA</span><br>";
            total += "<span > " + _this.getTotalAmount(count).toFixed(2) + " \u20AA</span><br>";
            _this.balance = _this.getTotalAmount(count);
            count++;
        });
        descriptionValue.innerHTML = description;
        depositVale.innerHTML = deposit;
        totalValue.innerHTML = total;
    };
    return Transaction;
}());
var transactionOne = new Transaction();
function handleSubmit(ev) {
    ev.preventDefault();
    var description = ev.target.elements.description.value;
    var deposit = parseFloat(ev.target.elements.deposit.value);
    var newAccount = new BankAccount(description, deposit);
    transactionOne.getTransaction(newAccount);
    transactionOne.renderTransaction();
    console.log(transactionOne.balance);
}
