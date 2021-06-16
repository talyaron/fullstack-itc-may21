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
        var sum = 0;
        for (var i = 0; i < count; i++) {
            sum += this.transaction[i]['amount'];
        }
        return sum;
    };
    TransactionList.prototype.getDeleteAll = function () {
    };
    TransactionList.prototype.renderTransaction = function () {
        var _this = this;
        var descriptionRoot = document.querySelector('#square__item--description--value');
        var depositRoot = document.querySelector('#square__item--deposit--value');
        var withdrawRoot = document.querySelector('#square__item--withdraw--value');
        var totalRoot = document.querySelector('#square__item--total--value');
        try {
            if (!descriptionRoot)
                throw new Error('Description Root Not Founded');
            if (!depositRoot)
                throw new Error('Description Root Not Founded');
            if (!withdrawRoot)
                throw new Error('Description Root Not Founded');
            if (!totalRoot)
                throw new Error('Description Root Not Founded');
            var description_1 = '';
            var deposit_1 = '';
            var withdraw_1 = '';
            var total_1 = '';
            var count_1 = 1;
            this.transaction.forEach(function (account) {
                if (account.amount < 0) {
                    description_1 += "<span>" + count_1 + "- " + account.description + "</span><br>";
                    withdraw_1 += "<span>\u20AA " + account.amount.toFixed(2) + "</span><br>";
                    deposit_1 += "<span>\u20AA 0.00</span><br>";
                    total_1 += "<span class =\"green_text\"><img src=\"https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-error-icon.png\" class = \"img-no-ok\">\u20AA " + _this.getTotal(count_1).toFixed(2) + "</span><br>";
                    _this.balance = _this.getTotal(count_1);
                    count_1++;
                }
                else {
                    description_1 += "<span>" + count_1 + "- " + account.description + "</span><br>";
                    deposit_1 += "<span>\u20AA " + account.amount.toFixed(2) + "</span><br>";
                    withdraw_1 += "<span>\u20AA 0.00</span><br>";
                    total_1 += "<span class =\"green_text\"><img src=\"https://cdn.icon-icons.com/icons2/1506/PNG/512/emblemok_103757.png\" class = \"img-ok\">\u20AA " + _this.getTotal(count_1).toFixed(2) + "</span><br>";
                    _this.balance = _this.getTotal(count_1);
                    count_1++;
                }
            });
            descriptionRoot.innerHTML = description_1;
            depositRoot.innerHTML = deposit_1;
            withdrawRoot.innerHTML = withdraw_1;
            totalRoot.innerHTML = total_1;
        }
        catch (e) {
            console.log(e);
        }
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
    console.log(transaction.balance);
}
function handleDelete(event) {
    event.preventDefault();
    transaction.getDeleteAll();
}
