var Account = /** @class */ (function () {
    function Account(description, amount) {
        this.description = description;
        this.amount = amount;
    }
    return Account;
}());
var TransactionList = /** @class */ (function () {
    function TransactionList() {
        this.transaction = []; //array account
    }
    TransactionList.prototype.getTransaction = function (account) {
        //add transaction
        this.transaction.push(account);
    };
    TransactionList.prototype.getTotal = function (count) {
        var acumular = 0;
        for (var i = 0; i < count; i++) {
            acumular += this.transaction[i]['amount'];
        }
        return acumular;
    };
    TransactionList.prototype.getDeleteAll = function () {
    };
    TransactionList.prototype.renderTransaction = function () {
        var _this = this;
        var transactionRoot = document.querySelector('#transactionRoot');
        var descriptionRoot = document.querySelector('#square__item--description--value');
        var depositRoot = document.querySelector('#square__item--deposit--value');
        var withdrawRoot = document.querySelector('#square__item--withdraw--value');
        var totalRoot = document.querySelector('#square__item--total--value');
        var description = '';
        var deposit = '';
        var withdraw = '';
        var total = '';
        var count = 1;
        this.transaction.forEach(function (account) {
            if (account.amount < 0) {
                description += "<span>" + account.description + "</span><br>";
                withdraw += "<span>\u20AA " + Number(account.amount).toFixed(2) + "</span><br>";
                deposit += "<span>\u20AA 0.00</span><br>";
                if (_this.getTotal(count) < 0) {
                    total += "<span class =\"red_text\">\u20AA " + Number(_this.getTotal(count)).toFixed(2) + "</span><br>";
                }
                else {
                    total += "<span class =\"green_text\">\u20AA " + Number(_this.getTotal(count)).toFixed(2) + "</span><br>";
                }
                count++;
            }
            else {
                description += "<span>" + account.description + "</span><br>";
                deposit += "<span>\u20AA " + Number(account.amount).toFixed(2) + "</span><br>";
                withdraw += "<span>\u20AA 0.00</span><br>";
                if (_this.getTotal(count) < 0) {
                    total += "<span class =\"red_text\">\u20AA " + Number(_this.getTotal(count)).toFixed(2) + "</span><br>";
                }
                else {
                    total += "<span class =\"green_text\">\u20AA " + Number(_this.getTotal(count)).toFixed(2) + "</span><br>";
                }
                count++;
            }
        });
        descriptionRoot.innerHTML = description;
        depositRoot.innerHTML = deposit;
        withdrawRoot.innerHTML = withdraw;
        totalRoot.innerHTML = total;
    };
    return TransactionList;
}());
var transaction = new TransactionList(); //instance of TransactionList
function handleSumbitDeposit(event) {
    event.preventDefault();
    var description = event.target.elements.description_deposit.value;
    var amount = parseFloat(event.target.elements.amount_deposit.value);
    if (amount <= 0) {
        alert('Please enter a positive number');
    }
    else {
        var account = new Account(description, amount);
        transaction.getTransaction(account);
        transaction.renderTransaction();
    }
}
function handleSumbitWithdraw(event) {
    event.preventDefault();
    var description = event.target.elements.description_withdraw.value;
    var amount = -parseFloat(event.target.elements.amount_withdraw.value);
    if (amount >= 0) {
        alert('Is negative the number you want to enter');
    }
    else {
        var account = new Account(description, amount);
        transaction.getTransaction(account);
        transaction.renderTransaction();
    }
}
function handleDelete(event) {
    event.preventDefault();
    transaction.getDeleteAll();
}
