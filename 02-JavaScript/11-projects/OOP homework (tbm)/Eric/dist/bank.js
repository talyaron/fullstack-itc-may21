/*1. Create a bank account for a customer (let it be a class "Account"), which will hold all the transactions.
2. Add transaction method ({description, amount (+/-)}) // for advance developers, the transaction should be a class; use a form to add transactions.
3. Have a total method.
4. Write all transactions in the order they occurred, with the last line: total.

Use TypeScript, SCSS, BEM etc.
*/
var totalAmount = document.querySelector('#balance');
var withdrawRadio = document.getElementById("withdraw");
var depositRadio = document.getElementById("deposit");
var deposit = document.querySelector('#depositContainer');
var Movements = /** @class */ (function () {
    //withdraw:number;
    function Movements(description, deposit, type, account) {
        this.description = description;
        this.deposit = deposit;
        this.type = type;
        this.account = account;
    }
    return Movements;
}());
var AccountList = /** @class */ (function () {
    function AccountList(amount) {
        this.amount = amount;
        this.accountUsers = [];
    }
    AccountList.prototype.add = function (accountUser) {
        this.accountUsers.push(accountUser);
        this.total(accountUser);
    };
    AccountList.prototype.renderMovements = function () {
        var html = '';
        this.accountUsers.forEach(function (accountUser) {
            html = "<p>" + accountUser.description + " " + accountUser.account + " $" + accountUser.deposit + " " + accountUser.type + "</p>"; //YS: Nice
        });
        deposit.insertAdjacentHTML("afterbegin", html);
        //como hacerlo con inner.html
    };
    AccountList.prototype.total = function (accountUser) {
        try {
            //const deposit: HTMLElement = document.querySelector('[name="deposit"]').value; //YS: Try/catch
            if (!deposit)
                throw new Error('The element where to show the balance doesn´t exist!');
            accountUsers.amount += accountUser.deposit;
            var total = "<div>Final balance: $" + accountUsers.amount + "</div>";
            totalAmount.innerHTML = total;
        }
        catch (error) {
            console.error(error);
        }
    };
    return AccountList;
}());
var accountUsers = new AccountList(0);
var handleSubmit = function (ev) {
    ev.preventDefault();
    var description = ev.target.elements.description.value;
    var account = ev.target.elements.accountUser.value;
    var deposit = ev.target.elements.deposit.valueAsNumber;
    var type = "deposit";
    if (withdrawRadio.checked) {
        deposit = -deposit;
        type = "withdraw";
    }
    else if (depositRadio.checked) {
        deposit = deposit;
        type = "deposit";
    }
    var accountUser = new Movements(description, deposit, type, account);
    accountUsers.add(accountUser);
    accountUsers.renderMovements();
};
//YS: Please format your code before turning it in. 
