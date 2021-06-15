/*1. Create a bank account for a customer (let it be a class "Account"), which will hold all the transactions.
2. Add transaction method ({description, amount (+/-)}) // for advance developers, the transaction should be a class; use a form to add transactions.
3. Have a total method.
4. Write all transactions in the order they occurred, with the last line: total.

Use TypeScript, SCSS, BEM etc.
*/
var Account = /** @class */ (function () {
    function Account(deposit, withdraw, description) {
        this.description = description;
        this.deposit = deposit;
        this.withdraw = withdraw;
    }
    return Account;
}());
var AccountList = /** @class */ (function () {
    function AccountList() {
        this.accountUsers = [];
    }
    AccountList.prototype.add = function (accountUser) {
        this.accountUsers.push(accountUser);
    };
    AccountList.prototype.renderAccount = function () {
        var accountRoot = document.querySelector('#accountRoot');
        var html = '';
        this.accountUsers.forEach(function (accountUser) {
            html += "<p>" + accountUser.description + "  " + accountUser.deposit + "</p>";
        });
        accountRoot.innerHTML = html;
    };
    AccountList.prototype.getTotal = function () {
        //let totalAccount = 44;
        // totalAccount += this.accountUsers[0]['deposit']
        //console.log(totalAccount)
    };
    return AccountList;
}());
var accountUsers = new AccountList();
var handleSubmit = function (ev) {
    ev.preventDefault();
    var description = ev.target.elements.description.value;
    var deposit = ev.target.elements.deposit.value;
    var withdraw = ev.target.elements.withdraw.value;
    console.log(deposit);
    var accountUser = new Account(parseInt(deposit), withdraw, description);
    accountUsers.add(accountUser);
    accountUsers.renderAccount();
    //accountUsers.getTotal()
    //const userDeposit = document.getElementById("userDeposit");
    //let totalAccount = 0;
    //totalAccount+=(Number(userDeposit.value));
};
