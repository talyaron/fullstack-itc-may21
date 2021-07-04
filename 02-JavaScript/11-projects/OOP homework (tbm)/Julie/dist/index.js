var runningTotal = 0;
var userName = document.querySelector("#userName");
var depositString = document.querySelector("#deposit");
var withdrawalString = document.querySelector("#withdrawal");
var submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", inputChecker);
function inputChecker() {
    if (userName.value === "" && depositString.value === "" && withdrawalString.value === "")
        window.alert("You must fill in a name and either a deposit or a withdrawal");
    else if (userName.value === "" && (depositString.value !== "" || withdrawalString.value !== ""))
        window.alert("You must give a username");
    else if (userName.value !== "" && depositString.value !== "" && withdrawalString.value !== "")
        window.alert("You can only submit either a deposit or a withdrawal");
    else
        handleSubmit();
}
function handleSubmit(ev) {
    var intDeposit = parseInt(depositString);
    var intWithdrawal = parseInt(withdrawalString);
    var newAccount = new Account(userName, intDeposit, intWithdrawal);
    newAccount.depositMoney;
    newAccount.withdrawMoney;
    newAccount.giveAccountDetails;
}
// This is the class for the account. It has three methods: depositmoney, withdrawMoney, and giveAccountdetails. I'm defining all the inputs as integers
var Account = /** @class */ (function () {
    function Account(userName, intDeposit, intWithdrawal) {
        this.userName = userName;
        this.intDeposit = intDeposit;
        this.intWithdrawal = intWithdrawal;
    }
    Account.prototype.depositMoney = function (intDeposit) {
        runningTotal = +this.intDeposit;
    };
    Account.prototype.withdrawMoney = function (intWithdrawal) {
        runningTotal = -this.intWithdrawal;
    };
    Account.prototype.giveAccountDetails = function () {
        console.log("The amount of money in your account is $" + runningTotal);
    };
    return Account;
}());
