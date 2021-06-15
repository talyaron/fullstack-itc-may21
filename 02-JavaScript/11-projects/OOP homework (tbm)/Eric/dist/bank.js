/*1. Create a bank account for a customer (let it be a class "Account"), which will hold all the transactions.
2. Add transaction method ({description, amount (+/-)}) // for advance developers, the transaction should be a class; use a form to add transactions.
3. Have a total method.
4. Write all transactions in the order they occurred, with the last line: total.

Use TypeScript, SCSS, BEM etc.
*/
var Movements = /** @class */ (function () {
    //withdraw:number;
    function Movements(description, deposit /*, withdraw: number*/) {
        this.description = description;
        this.deposit = deposit;
        //this.withdraw= withdraw;
    }
    return Movements;
}());
var AccountList = /** @class */ (function () {
    function AccountList(amount) {
        this.accountUsers = [];
        this.amount = amount;
    }
    AccountList.prototype.add = function (accountUser) {
        this.accountUsers.push(accountUser);
        this.total(accountUser);
    };
    AccountList.prototype.renderMovements = function () {
        var balance = document.querySelector('#balance');
        var html = '';
        this.accountUsers.forEach(function (accountUser) {
            html += "<p>" + accountUser.description + "  " + accountUser.deposit + " " + accountUsers.amount + " </p>";
        });
        balance.innerHTML = html;
    };
    AccountList.prototype.total = function (accountUser) {
        accountUsers.amount += accountUser.deposit;
        console.log(accountUsers.amount);
    };
    return AccountList;
}());
var accountUsers = new AccountList(0);
var handleSubmit = function (ev) {
    ev.preventDefault();
    var description = ev.target.elements.description.value;
    var deposit = ev.target.elements.deposit.valueAsNumber;
    //const withdraw:number = ev.target.elements.withdraw.value;
    var accountUser = new Movements(description, deposit /*,withdraw*/);
    accountUsers.add(accountUser);
    accountUsers.renderMovements();
};
