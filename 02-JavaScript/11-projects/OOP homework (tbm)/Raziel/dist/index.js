var DepoSit = /** @class */ (function () {
    function DepoSit(deposit, transaction) {
        this.deposit = deposit;
        this.transaction = transaction;
    }
    return DepoSit;
}());
var AddDep = /** @class */ (function () {
    function AddDep() {
        this.addMoney = [];
    }
    AddDep.prototype.addDep = function (dep) {
        this.addMoney.push(dep);
    };
    AddDep.prototype.renderDeposit = function () {
        var depositScreen = document.querySelector('#depositScreen');
        var addToDiv = "";
        this.addMoney.forEach(function (add) {
            addToDiv += "<div><p>Amount:" + add.deposit + "</p><br><p>Details:" + add.transaction + "</p>";
        });
        depositScreen.innerHTML = addToDiv;
    };
    AddDep.prototype.totalAmount = function () {
        var sum = this.addMoney['deposit'].reduce(function (a, b) {
            return a + b;
        }, 0);
        console.log(sum);
    };
    return AddDep;
}());
var addDeposit = new AddDep();
var handleDeposit = function (ev) {
    ev.preventDefault();
    var deposit = ev.target.elements.deposit.value;
    var transaction = ev.target.elements.transaction.value;
    var newAction = new DepoSit(deposit, "" + transaction);
    console.log(newAction);
    addDeposit.addDep(newAction);
    addDeposit.renderDeposit();
};
