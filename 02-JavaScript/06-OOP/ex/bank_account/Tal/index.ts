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

    addNewTransaction(amount: number, date: Date, place: string, description: string){
        this.account.push(new Transaction(amount, date, place, description))
    }
}





