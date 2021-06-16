class Transaction {
    amount: number;
    date: Date;
    place: string;
    description: string;

    constructor(amount: number, date: Date, place: string, description: string) {
        this.amount = amount;
        this.date = date;
        this.place = place;
        this.description = description
    }
}


class Account{
    account:Array<Transaction>;

    addNewTransaction(amount: number, date: Date, place: string, description: string):void{
        this.account.push(new Transaction(amount, date, place, description))
    }

    calculateSum():number{
        const sum = this.account.reduce((sum,transaction)=>{return sum + transaction.amount},0)
        return sum;
    }
}

let account = new Account();
account.addNewTransaction(100,new Date(),'Tel-Aviv','Bank deposit');
account.addNewTransaction(-300, new Date(),'Ramat-Gan', 'ATM redrwal');

console.log(account.calculateSum());







