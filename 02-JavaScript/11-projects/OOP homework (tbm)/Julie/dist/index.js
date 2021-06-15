// create a bank account for a customer (let it be a class "account"), which will hold all the transactions.
var obj = {
    name: 'Julie',
    age: 25
};
function handleTransation(ev) {
    ev.preventDefault();
    var name = document.querySelector("#name");
    var deposit = Number(document.querySelector("#deposit"));
    // Do thi for the other one
    var withdrawal = document.querySelector("#withdrawal");
    console.log(typeof name.value);
    name = name.value;
    deposit = deposit.value;
    withdrawal = withdrawal.value;
    newAccount = new Account(name, deposit, withdrawal);
}
;
// Apply typescript to this, above, but focus on types of strings and numbers, and object (below). Look into interfaces for objects. 
var Account = /** @class */ (function () {
    function Account(name, deposit, withdrawal) {
        this.name = name;
        this.dep =
            this.totalAmount = 0;
    }
    //   Dont forget to to give type to the thises and to the parameters
    Account.prototype.depositMoney = function (deposit) {
        return (this.totalAmount += deposit);
    };
    Account.prototype.withdrawMoney = function (withdrawal) {
        return (this.totalAmount -= withdrawal);
    };
    Account.prototype.giveAccountDetails = function () {
        console.log("The amount of money in your account is " + this.totalAmount);
    };
    return Account;
}());
var newAccount = new Account("Julie", 1000);
console.log(newAccount);
console.log(newAccount.depositMoney(500));
console.log(newAccount.withdrawMoney(400));
newAccount.giveAccountDetails();
