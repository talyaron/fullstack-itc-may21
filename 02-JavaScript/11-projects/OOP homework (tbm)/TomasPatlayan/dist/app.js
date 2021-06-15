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
    Transact.prototype.add = function (transact) {
        this.transacts.push(transact);
    };
    Transact.prototype.totalAmount = function (transact) {
        var allTotal = document.querySelector(".total");
        if (transact.movement === "deposit") {
            Movements.total += transact.money;
        }
        else if (transact.movement === "transfer") {
            Movements.total -= transact.money;
        }
        var total = "<div> Balance $ " + Movements.total + "</div>";
        allTotal.innerHTML = total;
    };
    return Transact;
}());
var Movements = new Transact(0);
var nowSubmit = function (ev) {
    ev.preventDefault();
    var amount = ev.target.elements.amount.valueAsNumber;
    var movement = ev.target.elements.movement.value;
    var pepe = new Account2(amount, movement);
    Movements.add(pepe);
};
