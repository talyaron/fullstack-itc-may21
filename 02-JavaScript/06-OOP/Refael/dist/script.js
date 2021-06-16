var acount = /** @class */ (function () {
    function acount(desc, amount) {
        this.desc = desc;
        this.amount = amount;
        this.trans_time = new Date();
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
        var show__total = document.querySelector(".show__total");
        var html = "";
        this.transactions.forEach(function (acount) {
            html += "<div class=\"div__total\">" + acount.amount + "</div>";
            console.dir(html);
            var show__total = html;
        });
        show__total.innerHTML = html;
    };
    return acountTrans;
}());
var transactions = new acountTrans();
var handleSubmit = function (ev) {
    ev.preventDefault();
    var desc = ev.target.elements.desc.value;
    var amount = ev.target.elements.amount.value;
    var newAcount = new acount(desc, amount);
    transactions.add(newAcount);
    transactions.addAcountToDOM();
    transactions.showTotal();
    ev.target.reset();
};
