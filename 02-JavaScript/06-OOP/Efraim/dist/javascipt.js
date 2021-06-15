var incomeTotal = 0;
var expenseTotal = 0;
var finalTotal = 0;
var Income = /** @class */ (function () {
    function Income(income, descriptionIncome) {
        this.income = income;
        this.descriptionIncome = descriptionIncome;
        try {
            this.account1 = document.querySelector('.account__income-wrapper__income');
            if (!this.account1) {
                throw new Error('no income box found');
            }
        }
        catch (error) {
            console.error(error);
        }
        this.createIncome();
        this.createIncomeDescription();
        this.totalIncome();
    }
    Income.prototype.createIncome = function () {
        try {
            this.box2 = document.createElement('div');
            this.box2.classList.add("account__income-wrapper__income__incomes");
            this.account1.appendChild(this.box2);
            this.box2.innerHTML = this.income;
        }
        catch (e) {
            console.error(e);
        }
    };
    Income.prototype.createIncomeDescription = function () {
        try {
            this.box3 = document.createElement('div');
            this.box3.classList.add("account__income-wrapper__income__description-income");
            this.account1.appendChild(this.box3);
            this.box3.innerHTML = this.descriptionIncome;
        }
        catch (e) {
            console.error(e);
        }
    };
    Income.prototype.totalIncome = function () {
        try {
            incomeTotal += parseInt(this.income);
            document.querySelector(".account__income-wrapper__totalincome").innerHTML = incomeTotal;
            finalTotal += parseInt(this.income);
            document.querySelector(".final-total-wrapper__finaltotal").innerHTML = finalTotal;
            if (finalTotal >= 0) {
                document.querySelector(".final-total-wrapper__finaltotal").classList.remove('final-total-wrapper--red');
                document.querySelector(".final-total-wrapper__finaltotal").classList.add('final-total-wrapper--green');
            }
            else {
                document.querySelector(".final-total-wrapper__finaltotal").classList.remove('final-total-wrapper--green');
                document.querySelector(".final-total-wrapper__finaltotal").classList.add('final-total-wrapper--red');
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    return Income;
}());
var Expense = /** @class */ (function () {
    function Expense(expense, descriptionExpense) {
        this.expense = expense;
        this.descriptionExpense = descriptionExpense;
        try {
            this.account = document.querySelector('.account__expense-wrapper__expense');
            if (!this.account) {
                throw new Error('no expense box found');
            }
        }
        catch (error) {
            console.error(error);
        }
        this.createExpense();
        this.createExpenseDescription();
        this.totalExpense();
    }
    Expense.prototype.createExpense = function () {
        try {
            this.box = document.createElement('div');
            this.box.classList.add("account__expense-wrapper__expense__expenses");
            this.account.appendChild(this.box);
            this.box.innerHTML = this.expense;
        }
        catch (e) {
            console.error(e);
        }
    };
    Expense.prototype.createExpenseDescription = function () {
        try {
            this.box1 = document.createElement('div');
            this.box1.classList.add("account__expense-wrapper__expense__description-expense");
            this.account.appendChild(this.box1);
            this.box1.innerHTML = this.descriptionExpense;
        }
        catch (e) {
            console.error(e);
        }
    };
    Expense.prototype.totalExpense = function () {
        try {
            expenseTotal += parseInt(this.expense);
            document.querySelector(".account__expense-wrapper__totalexpense").innerHTML = expenseTotal;
            finalTotal -= parseInt(this.expense);
            document.querySelector(".final-total-wrapper__finaltotal").innerHTML = finalTotal;
            if (finalTotal >= 0) {
                document.querySelector(".final-total-wrapper__finaltotal").classList.remove('final-total-wrapper--red');
                document.querySelector(".final-total-wrapper__finaltotal").classList.add('final-total-wrapper--green');
            }
            else {
                document.querySelector(".final-total-wrapper__finaltotal").classList.remove('final-total-wrapper--green');
                document.querySelector(".final-total-wrapper__finaltotal").classList.add('final-total-wrapper--red');
            }
        }
        catch (e) {
            console.error(e);
        }
    };
    return Expense;
}());
var handleSubmit1 = function (ev) {
    ev.preventDefault();
    var incomeBefore = ev.target.elements.income.value;
    var incomedescription = ev.target.elements.incomedescription.value;
    var incomeAfter = new Income("" + incomeBefore, "" + incomedescription);
    ev.target.reset();
};
var handleSubmit = function (ev) {
    ev.preventDefault();
    var expenseBefore = ev.target.elements.expense.value;
    var expenseDescription = ev.target.elements.expensedescription.value;
    var expenseAfter = new Expense("" + expenseBefore, "" + expenseDescription);
    ev.target.reset();
};
