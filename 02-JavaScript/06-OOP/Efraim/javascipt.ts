let incomeTotal: number = 0;
let expenseTotal: number = 0;
let finalTotal: number = 0;



class Income {
    income: number;
    descriptionIncome: string;
    constructor(income: number, descriptionIncome: string) {
        this.income = income;
        this.descriptionIncome = descriptionIncome;
        try {
        this.account1 = document.querySelector('.account__income-wrapper__income');
        if (!this.account1) {throw new Error('no income box found')}    //YS: Good
        } catch (error) {
            console.error(error);   
        }
        this.createIncome();
        this.createIncomeDescription();
        this.totalIncome();
    }
    createIncome() {
        try {
            this.box2 = document.createElement('div');  //YS: Give your elements more descriptive names: incomeValue
            this.box2.classList.add("account__income-wrapper__income__incomes");
            this.account1.appendChild(this.box2);
            this.box2.innerHTML = this.income;
        } catch (e) {
            console.error(e)
        }
    }

    createIncomeDescription() {
        try {
            this.box3 = document.createElement('div');
            this.box3.classList.add("account__income-wrapper__income__description-income");
            this.account1.appendChild(this.box3);
            this.box3.innerHTML = this.descriptionIncome;
        } catch (e) {
            console.error(e)
        }
    }
    
    totalIncome() {
        try {
            incomeTotal += parseInt(this.income);
            document.querySelector(".account__income-wrapper__totalincome").innerHTML = incomeTotal;
            finalTotal += parseInt(this.income);
            document.querySelector(".final-total-wrapper__finaltotal").innerHTML = finalTotal;
            if(finalTotal >= 0) {
                document.querySelector(".final-total-wrapper__finaltotal").classList.remove('final-total-wrapper--red');
                document.querySelector(".final-total-wrapper__finaltotal").classList.add('final-total-wrapper--green');
            }else {
                document.querySelector(".final-total-wrapper__finaltotal").classList.remove('final-total-wrapper--green');
                document.querySelector(".final-total-wrapper__finaltotal").classList.add('final-total-wrapper--red');
            }
        } catch (e) {
            console.error(e)
        }
    }


class Expense {
    expense: number;
    descriptionExpense: string;

    constructor(expense: number, descriptionExpense: string) {
        this.expense = expense;
        this.descriptionExpense = descriptionExpense;
        try{
        this.account = document.querySelector('.account__expense-wrapper__expense');
        if (!this.account) {throw new Error('no expense box found')}
        } catch (error) {
            console.error(error);   
        }
        this.createExpense();
        this.createExpenseDescription();
        this.totalExpense()
    }
    createExpense() {
        try {
            this.box = document.createElement('div');
            this.box.classList.add("account__expense-wrapper__expense__expenses");
            this.account.appendChild(this.box);
            this.box.innerHTML = this.expense;
        } catch (e) {
            console.error(e)
        }
    }

    createExpenseDescription() {
        try {
            this.box1 = document.createElement('div');
            this.box1.classList.add("account__expense-wrapper__expense__description-expense");
            this.account.appendChild(this.box1);
            this.box1.innerHTML = this.descriptionExpense;
        } catch (e) {
            console.error(e)
        }
    }
    totalExpense() {            /* YS: I know that you told me that you made a class for income and a class for expense but I would have liked to see more concise code. It would
                                    have been better to use only one class. Remember DRY(dont repeat yourself). These two classes are practically the same (Income and Expense), only
                                    that your operators are different (+ -) */

        try {
            expenseTotal += parseInt(this.expense);
            document.querySelector(".account__expense-wrapper__totalexpense").innerHTML = expenseTotal;   
            finalTotal -= parseInt(this.expense);
            document.querySelector(".final-total-wrapper__finaltotal").innerHTML = finalTotal;
            if(finalTotal >= 0) {
                document.querySelector(".final-total-wrapper__finaltotal").classList.remove('final-total-wrapper--red');
                document.querySelector(".final-total-wrapper__finaltotal").classList.add('final-total-wrapper--green');
            }else {
                document.querySelector(".final-total-wrapper__finaltotal").classList.remove('final-total-wrapper--green');
                document.querySelector(".final-total-wrapper__finaltotal").classList.add('final-total-wrapper--red');
            }
        } catch (e) {
            console.error(e)
        }
    }




}


const handleSubmit1 = (ev: any): void => {
    ev.preventDefault();

    const incomeBefore: number = ev.target.elements.income.value;
    const incomedescription: string = ev.target.elements.incomedescription.value;

    const incomeAfter:any = new Income(`${incomeBefore}`, `${incomedescription}`);   //YS: why not: new Income(incomeBefore, incomedescription)? You dont need the ``


    ev.target.reset();

}
const handleSubmit = (ev: any): void => {
    ev.preventDefault();

    const expenseBefore: number = ev.target.elements.expense.value;
    const expenseDescription: string = ev.target.elements.expensedescription.value;

    const expenseAfter:any = new Expense(`${expenseBefore}`, `${expenseDescription}`); //YS: why not: new Expense(expenseBefore, expenseDescription)? You dont need the ``

    ev.target.reset();
}


