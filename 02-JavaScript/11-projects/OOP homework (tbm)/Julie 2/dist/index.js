// 1. Create a bank account for a customer (let it be a class "Account"), which will hold all the transactions.
// 2. Add transaction method ({description, amount (+/-)}) // for advance developers, the transaction should be a class; use a form to add transactions.
// 3. Have a total method.
// 4. Write all transactions in the order they occurred, with the last line: total.
// Use TypeScript, SCSS, BEM etc.
// First, get elements from HTML
var userName = document.querySelector("#userName");
var amountDeposited = document.querySelector("#deposit");
var amountWithdrawn = document.querySelector("#withdrawal");
var submitButton = document.querySelector("#submit");
// One class for an individual account, one class for all the accounts. The class has 2 methods of "transaction,"" as stated in the instructions, withdraw money and deposit money.
var Account = /** @class */ (function () {
    function Account(userName, amountWithdrawn, amountDeposited, runningTotal) {
        this.userName = userName;
        this.amountWithdrawn = amountWithdrawn;
        this.amountDeposited = amountDeposited;
        this.accountId = "id" + Math.random().toString(16).slice(2);
    }
    Account.prototype.depositMoney = function (intDeposit) {
        this.runningTotal = 0;
        return (this.runningTotal = +this.amountDeposited);
    };
    Account.prototype.withdrawMoney = function (intWithdrawal) {
        return (this.runningTotal = -this.amountWithdrawn);
    };
    return Account;
}());
// This gives each new account its own id. Create a random number, convert it to string and slice it in two. I assume the slice is to make it shorter? What's with the 16?
var AccountsList = /** @class */ (function () {
    function AccountsList() {
        this.accounts = [];
    }
    // This imakes an array of accounts. ADD is a method for this AccountsList class. We will add an account that is an instance of the class "Account.". Push adds it to the array.
    AccountsList.prototype.add = function (account) {
        this.accounts.push(account);
    };
    AccountsList.prototype.renderAccounts = function () {
        var accountsRoot = document.querySelector("#accountsRoot");
        // This renders the account to the DOM. Similar to how we put the character onto the game in the last assignment.
        var html = "";
        // here we assign the variable called html to an empty string. We create this string then we add it to the DOM.
        // The forEach method executes a provided function once for each Array element, thereby "looping through" each item in the array. We use a string literal to put it all in a div. Gives the name and the running total.
        this.accounts.forEach(function (account) {
            html =
                html +
                    ("<p>" + account.userName + ", you have deposited $" + amountDeposited + " and you have withdrawn $" + amountWithdrawn + ". The total Amount of money in your account is " + account.runningTotal + "</p>");
        });
        accountsWrapper.innerHTML = html;
        // This assigns the html variable to the Dom element accountsWrapper.
    };
    return AccountsList;
}());
var account = new AccountsList();
// This makes a new instance of an account
var handleSubmit = function (ev) {
    ev.preventDefault();
    // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.
    var userName = ev.target.elements.userName.value;
    //   Here we get the image and the description. Is elements necessary? Yes. But I think it can also be children?
    var amountDeposited = ev.target.elements.amountDeposited.value;
    var amountWithdrawn = ev.target.elements.amountWithdrawn.value;
    // Create a new account on submit:
    var account = new Account(userName, amountDeposited, amountWithdrawn, runningTotal);
    accounts.add(account);
    accounts.renderAccounts();
    //   Call the render account function.
};
