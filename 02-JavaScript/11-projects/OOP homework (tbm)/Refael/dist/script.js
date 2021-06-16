var acount = /** @class */ (function () {
    function acount(desc, amount) {
        this.desc = desc;
        this.amount = amount;
        this.trans_time = new Date(); //YS: Use camelCase for javascript
        this.acountID = "id" + Math.random().toString(16).slice(2);
    }
    return acount;
}());
var acountTrans = /** @class */ (function () {
    function acountTrans() {
        this.transactions = [];
    }
    acountTrans.prototype.add = function (trans) {
        this.transactions.push(trans);
    };
    acountTrans.prototype.addAcountToDOM = function () {
        var trans__container = document.querySelector(".trans__container");
        var html = "";
        this.transactions.forEach(function (acount) {
            html += "<div class=\"div__dom\">Transaction was for <h1>" + acount.desc + "</h1> with the amount of <h1>" + acount.amount + "$</h1> at " + acount.trans_time + " </div>";
        });
        trans__container.innerHTML = html;
    };
    acountTrans.prototype.showTotal = function () {
        var show__total = document.querySelector(".show__total"); //YS: Use camelCase for javascript
        var html = "";
        this.transactions.forEach(function (acount) {
            html += "<div class=\"div__total\">" + acount.amount + "</div>";
            console.dir(html); //YS: Please don't leave console.logs
            var show__total = html; //YS: You already declared show__total as const in line 31. You cant re-decalare it here. This line is not being used
        });
        show__total.innerHTML = html; //YS: 
    };
    return acountTrans;
}());
var transactions = new acountTrans();
var handleSubmit = function (ev) {
    ev.preventDefault();
    var desc = ev.target.elements.desc.value;
    var amount = ev.target.elements.amount.value;
    var newAcount = new acount(desc, amount);
    transactions.add(newAcount); //YS: Here you are adding the whole class instead of just the transactions (amount). 
    transactions.addAcountToDOM();
    transactions.showTotal();
    ev.target.reset();
};
