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
        // show__total.innerHTML = sum;
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
    acountTrans.prototype.calculateSum = function () {
        var show__total = document.querySelector(".show__total");
        var sum = this.transactions.reduce(function (sum, acount) {
            return sum + acount.amount;
        }, 0);
        show__total.innerHTML = sum;
        console.log(sum);
        // const show__total.innerHTML = sum;
    };
    return acountTrans;
}());
// showTotal() {
//   const show__total = document.querySelector(".show__total");
//   let html: any = "";
//   this.transactions.forEach((acount) => {
//     html += `<div class="div__total">${acount.amount}</div>`;
//     console.dir(html);
//     let show__total = html;
//   });
//   show__total.innerHTML = html; show__total.innerHTML = html;
// }
var transactions = new acountTrans();
var handleSubmit = function (ev) {
    ev.preventDefault();
    var desc = ev.target.elements.desc.value;
    var amount = ev.target.elements.amount.value;
    var newAcount = new acount(desc, amount);
    transactions.add(newAcount);
    transactions.addAcountToDOM();
    transactions.calculateSum();
    // transactions.showTotal();
    ev.target.reset();
};
