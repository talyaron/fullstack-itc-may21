
//method to see the transactions in a specific date

class Transaction {
    amount: number;
    date: Date;
    place: string;
    description: string;
    transactionId: string = "id" + Math.random().toString(16).slice(2);

    constructor(amount: number, date: Date, place: string, description: string) {
        this.amount = amount;
        this.date = date;
        this.place = place;
        this.description = description;


    }
}


class Account {
    account: Array<Transaction> = [];
    name: string = '';
    constructor(name) {
        this.name = name
    }

    addNewTransaction(amount: number, date: Date, place: string, description: string): string {
        let newTransaction: Transaction = new Transaction(amount, date, place, description)
        this.account.push(newTransaction);
        return newTransaction.transactionId;
    }

    calculateSum(): number {
        const sum = this.account.reduce((sum, transaction) => { return sum + transaction.amount }, 0)
        return sum;
    }

    editTransaction(transactionIdToEdit: string, updatedDescription: string) {
        try {
            //find the transactiond
            const transactionIndex: number = this.account.findIndex(transaction => transaction.transactionId === transactionIdToEdit);
            console.log(transactionIndex)
            //want to edit
            this.account[transactionIndex].description = updatedDescription;
        } catch (e) {
            console.error(e);
        }
    }

    findTransactionsByDate(fromDate: Date, toDate: Date) {
        try {
            this.account.forEach(element => {
                if (fromDate < element.date && toDate > element.date) {
                    console.log(element.description);
                }
            })
        } catch (error) {
            console.error(error);
        }
    }
}

let account = new Account('Yaniv');
const transactionId1 = account.addNewTransaction(100, new Date(), 'Tel-Aviv', 'Bank deposit');
account.addNewTransaction(-300, new Date(), 'Ramat-Gan', 'ATM redrwal');
account.addNewTransaction(-300, new Date('20-Jun-2020'), 'Ramat-Gan', 'ATM redrwal');


/* console.log(account.calculateSum());
console.log(JSON.stringify(account))
 */
account.editTransaction(transactionId1, 'Walllllaaaaa!!!');
/* console.log(account) */

const doSubmit = (ev: any): void => {
    ev.preventDefault();
    const fromDate: Date = new Date(ev.target.elements.fromDate.value);
    const toDate: Date = new Date(ev.target.elements.toDate.value);

    account.findTransactionsByDate(fromDate, toDate);
}






