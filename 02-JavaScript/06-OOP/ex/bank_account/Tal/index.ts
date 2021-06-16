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

const bankAccount:Array<Transaction> = [];

bankAccount.push(new Transaction(13,new Date(),'tel-aviv','ATM transaction'));
bankAccount.push(new Transaction(-200,new Date(),'tel-aviv','ATM transaction'));
console.log(bankAccount);

