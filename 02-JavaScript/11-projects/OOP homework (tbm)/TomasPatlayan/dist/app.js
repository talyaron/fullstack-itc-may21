var Account2 = /** @class */ (function () {
    function Account2(money, movement) {
        this.money = money;
        this.movement = movement;
    }
    return Account2;
}());
var Transact = /** @class */ (function () {
    function Transact(total) {
        this.transacts = [];
        this.total = total;
    }
    Transact.prototype.add = function (trans) {
        this.transacts.push(trans);
        this.totalAmount(trans);
        this.showTransactions();
    };
    Transact.prototype.showTransactions = function () {
        var putTransactions = document.querySelector(".transactions");
        var transaction = "";
        this.transacts.forEach(function (transact) {
            if (transact.movement === "deposit") {
                transaction += " You have deposited $USD" + transact.money;
            }
            else if (transact.movement === "withdraw") {
                transaction += " You have withdraw  -$USD" + transact.money;
            }
            // transaction += ` You have deposited ${transact.money}`;
        });
        putTransactions.innerHTML = transaction;
    };
    Transact.prototype.totalAmount = function (transact) {
        var allTotal = document.querySelector(".total");
        if (transact.movement === "deposit") {
            Balance.total += transact.money;
        }
        else if (transact.movement === "withdraw") {
            Balance.total -= transact.money;
        }
        var total = "<div> Balance $USD " + Balance.total + "</div>";
        allTotal.innerHTML = total;
    };
    return Transact;
}());
var Balance = new Transact(0);
var handleSubmit = function (ev) {
    ev.preventDefault();
    var amount = ev.target.elements.amount.valueAsNumber;
    var movement = ev.target.elements.movement.value;
    var pepe = new Account2(amount, movement);
    Balance.add(pepe);
    console.log(amount, movement);
};
