/* create a bank account for a customer (let it be a class "account"), which will hold all the transactions.
add transaction method ({description, amount (+/-)}) // for advance developers, the transaction should be a class;
use a form to add transactions.
have a total method.

write all transactions in the order they occurred, with the last line: total.
 */

class Transaction {
    description: string;
    amount: number;
    movement: string;
    date: Date;
    //I create an ID just in case, I dont use it in this code but probably for the future
    id: string;

    constructor(description: string, amount: number, movement: string) {
        this.description = description;
        this.amount = amount;
        this.movement = movement;
        this.id = Math.random().toString(16).slice(2);
        this.date = new Date();
    }
}

//The class account it will contain all the transactions that I declare before (class Transaction) and the balance:
class Account {
    transactions: Array<Transaction> = [];
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    //Every time that I add a transaction I will use this method, this add a new transaction to the array   
    addTransaction(transaction: Transaction): void {
        try {
            if (!transaction) throw new Error('The transaction it doesn´t exist!')
            this.transactions.push(transaction);
            this.renderTransaction();
            this.total(transaction);
        } catch (error) {
            console.error(error);
        }
    }

    //To Show the transaction in the page
    renderTransaction(): void {
        try {
            const showTransaction: HTMLElement = document.querySelector('#transactions');
            if (!showTransaction) throw new Error('The element where to show the transactions doesn´t exist!')
            //Doing a loop to show the transaction
            let html: string = '';
            this.transactions.forEach(element => {
                if (element.movement === 'deposit') {
                    html += `<div class="deposit">Description: "${element.description}"; Amount: $${element.amount}; Type: ${element.movement}; Date: ${element.date.toLocaleDateString()}</div>`
                }
                else if (element.movement === 'transfer') {
                    html += `<div class="transfer">Description: "${element.description}"; Amount: $${element.amount}; Type: ${element.movement}; Date: ${element.date.toLocaleDateString()}</div>`
                }
            });
            showTransaction.innerHTML = html;
        } catch (error) {
            console.error(error);
        }
    }

    total(transaction): void {
        try {
            const totalAmount: HTMLElement = document.querySelector('#transactions--total');
            if (!totalAmount) throw new Error('The element where to show the balance doesn´t exist!')
            if (transaction.movement === 'deposit') {
                allTransactions.balance += transaction.amount;
            } else if (transaction.movement === 'transfer') {
                allTransactions.balance -= transaction.amount;
            }
            let total = `<div>Final balance: $${allTransactions.balance}</div>`;
            totalAmount.innerHTML = total
        } catch (error) {
            console.error(error);
        }
    }
}

//I initialice a new array that will contains all the transactions:
const allTransactions = new Account(0);

//With this function I handle the form:
const doingSubmit = (ev: any): void => {
    ev.preventDefault();
    try {
        const description: string = ev.target.elements.description.value;
        const amount: number = ev.target.elements.amount.valueAsNumber;
        const movement: string = ev.target.elements.movement.value;

        const transaction = new Transaction(description, amount, movement);
        if (!transaction) throw new Error('The transaction doesn´t exist!')
        if (transaction.movement === 'transfer' && transaction.amount > allTransactions.balance) {
            alert("It is imposible to do the transaction, you don´t have enough money!")
        } else {
            allTransactions.addTransaction(transaction);
        }
    } catch (error) {
        console.error(error);
    }
}