// 1. Create a bank account for a customer (let it be a class "Account"), which will hold all the transactions.
// 2. Add transaction method ({description, amount (+/-)}) // for advance developers, the transaction should be a class; use a form to add transactions.
// 3. Have a total method.
// 4. Write all transactions in the order they occurred, with the last line: total.
// Use TypeScript, SCSS, BEM etc.
var handleSubmit = function (ev) {
    ev.preventDefault();
    var trans = ev.target.elements.trans.value;
    var amount = ev.target.elements.transaction_amount.valueAsNumber;
    var description = ev.target.elements.transaction_description.value;
    var newTrasaction = new Transaction(trans, amount, description);
    newTrans.addTrans(newTrasaction);
    newTrans.renderTrans();
    console.log(trans, amount, description);
};
var Transaction = /** @class */ (function () {
    function Transaction(trans, amount, description) {
        this.trans = trans;
        this.amount = amount;
        this.description = description;
    }
    return Transaction;
}());
var TransactionList = /** @class */ (function () {
    function TransactionList() {
        this.transaction = [];
    }
    TransactionList.prototype.addTrans = function (trans) {
        this.transaction.push(trans);
    };
    TransactionList.prototype.renderTrans = function () {
        var transRoot = document.querySelector('#acount_transactions__print');
        var TotalRoot = document.querySelector('#acount_total__print');
        //loop over deposit
        var htmlTrans = '';
        var htmlTotal = 0;
        this.transaction.forEach(function (trans) {
            htmlTrans += "<div class=\"trans\"><li>" + trans.trans + ": $" + trans.amount + " - Description: " + trans.description + "</li></div>";
            htmlTotal += trans.amount;
        });
        console.log(htmlTrans);
        transRoot.innerHTML = htmlTrans;
        TotalRoot.innerHTML = "$" + htmlTotal;
    };
    return TransactionList;
}());
var newTrans = new TransactionList();
var button1 = document.getElementById('deposit_check');
var button2 = document.getElementById('withdraw_check');
var amount = document.getElementById('amount');
if (button1.checked) {
    amount.removeAttribute("max");
    amount.setAttribute("min", "0");
}
else {
    button1.checked = false;
    amount.removeAttribute("min");
    amount.setAttribute("max", "0");
}
console.dir(button1);
