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
        var putTransactions = document.querySelector(".show-movements__transactions");
        var transaction = "";
        this.transacts.forEach(function (transact) {
            if (transact.movement === "deposit") {
                transaction += "<h3> You have deposited $USD" + transact.money + "</h3>";
            }
            else if (transact.movement === "withdraw") {
                transaction += "<h3> You have withdraw  -$USD" + transact.money + " </h3>";
            }
        });
        putTransactions.innerHTML = transaction;
    };
    Transact.prototype.totalAmount = function (transact) {
        var allTotal = document.querySelector(".show-movements__total");
        if (transact.movement === "deposit") {
            Balance.total += transact.money;
        }
        else if (transact.movement === "withdraw") {
            Balance.total -= transact.money;
        }
        var total = "<h2> Balance $USD " + Balance.total + "</h2>";
        allTotal.innerHTML = total;
    };
    return Transact;
}());
var Balance = new Transact(0);
var handleSubmit = function (ev) {
    ev.preventDefault();
    try {
        var amount = ev.target.elements.amount.valueAsNumber;
        if (amount <= 0)
            throw new Error("You must put an amount greater than 0, try again");
        var movement = ev.target.elements.movement.value;
        var pepe = new Account2(amount, movement);
        Balance.add(pepe);
        console.log(amount, movement);
    }
    catch (error) {
        alert(error);
    }
};
