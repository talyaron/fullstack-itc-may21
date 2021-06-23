var handleSubmit = function (ev) {
    ev.preventDefault();
    var amount = ev.target.elements.amount.value;
    var description = ev.target.elements.description.value;
    var transaction = new Transaction(amount, description);
    transactions.add(transaction);
    transactions.renderTransactions();
    transactions.runningTotal();
    ev.target.reset();
};
var Transaction = /** @class */ (function () {
    function Transaction(amount, description) {
        this.amount = amount;
        this.description = description;
    }
    return Transaction;
}());
var AllTransactions = /** @class */ (function () {
    function AllTransactions() {
        this.transactions = [];
    }
    AllTransactions.prototype.add = function (transaction) {
        this.transactions.push(transaction);
    };
    AllTransactions.prototype.renderTransactions = function () {
        var transactionsDiv = document.querySelector(".transactions-div");
        var html = "";
        this.transactions.forEach(function (transaction) {
            html +=
                "<p>Amount: " + transaction.amount + " Description: " + transaction.description + " </p>";
        });
        transactionsDiv.innerHTML = html;
    };
    AllTransactions.prototype.runningTotal = function () {
        var allTransactions = [];
        this.transactions.forEach(function (transaction) {
            allTransactions.push(Number(transaction.amount));
        });
        console.log(allTransactions);
        // var total = 0;
        // for (var i in arr) { total += arr[i]; }
        //     let result[] = this.transactions.map(a => a.amount);
        //     console.log(result)
        var arr = [1, 2, 3, 4, 5];
        var total = allTransactions.reduce(function (acc, cur) { return acc + cur; });
        // console.log(accumulator)
        // console.log(current)
        console.log(total);
        var totalDiv = document.querySelector(".total");
        totalDiv.innerHTML = "<p>Running Total:" + total + " </p>";
    };
    return AllTransactions;
}());
var transactions = new AllTransactions();
