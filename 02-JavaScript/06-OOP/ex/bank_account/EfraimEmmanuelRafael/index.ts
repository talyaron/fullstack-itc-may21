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
    name: string;
    constructor(name:string) {
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
            const transactionIndex: number = this.account.findIndex(transaction => transaction.transactionId === transactionIdToEdit );
            console.log(transactionIndex)
            //want to edit
            this.account[transactionIndex].description = updatedDescription;
        } catch (e) {
            console.error(e);
        }
    }
    findDate(fromDate: Date, toDate: Date){
        
        let transactionDates: Array<Transaction> = [];
        let arr = [];
        
        transactionDates= this.account.filter(transaction => transaction.date > fromDate && transaction.date < toDate);
        let dates1: Array<any> = [this.account.filter(transaction => transaction.date)]
        console.log(dates1);
       return transactionDates;
      
    }
       
   
}




let account = new Account('Yaniv');
const transactionId1 = account.addNewTransaction(100, new Date(), 'Tel-Aviv', 'Bank deposit');
account.addNewTransaction(-300, new Date(), 'Ramat-Gan', 'ATM redrwal');
const bla = new Transaction (-300, new Date(), 'Ramat-Gan', 'ATM redrwal');

console.log(JSON.stringify(account))

account.editTransaction(transactionId1, 'Walllllaaaaa!!!');
console.log(account)

console.log(account.findDate(new Date('1-1-2050'), new Date('1-1-3000')));








