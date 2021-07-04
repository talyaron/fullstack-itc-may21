
//MEthod for adding transactions:

class Transaction {
    name: string;
    banknum: number;
    branch: number;
    acc: number;
    amount: number;
    date: Date;
    transactionId: string = "id" + Math.random().toString(16).slice(2);

    constructor(name: string, banknum: number, branch: number, acc: number, amount: number, date: Date) {

        this.name = name;
        this.banknum = banknum;
        this.branch = branch;
        this.acc = acc;
        this.amount = amount;
        this.date = date;
    }
}

//Method for displaying the information in an array:
class Account {
    account: Array<Transaction> = [];
    name: string = "";
    constructor (name: string) {
        this.name = name;
    }
//method for adding new transactions:
    addNewTransaction(
        name: string,
        banknum: number,
        branch: number,
        acc: number,
        amount: number,
        date: Date 
    ): string {
        let newTransaction: Transaction = new Transaction(
            name,
            banknum,
            branch,
            acc,
            amount,
            date
        );
        this.account.push(newTransaction);
        return newTransaction.transactionId;
    }


var account = new Account("Golan");
const transactionId1 = account.addNewTransaction(
    100,
    new Date()

);
account.addNewTransaction(-15, new Date();

console.log(account)
//method for injecting the info from the form to the DOM
//couldn't figure out how to do this function in TS
function handleSubmit(event) {
    event.preventDefault();
    console.dir(event.target);
    let name = event.target.elements.name.value;
    let banknum = event.target.elements.banknum.value;
    let branch = event.target.elements.branch.value;
    let acc = Number(event.target.elements.acc.value);
    // let amount = event.target.elements.amount.value;
    // let date = event.target.elements.date.value;
    //for some reason I couldn't make the amount and date work when printing to console.log or injecting to the DOM
    console.log(name, banknum,branch, acc);
    document.getElementById("data").innerHTML = `${name} transferred a secret amount of funds from bank number ${banknum}, branch number ${branch}, account number ${acc}.`;
}

//method for calculating sum - couldn't connect it to the rest of my code or make it work
// calculateSum(): number {
//     const sum = this.acc.reduce(()sum,transaction) => {
//         return sum + transaction.amount;
//     }, 0);
//     return sum;
// }

//method for creating new instances - Something with createElement and appendChild methods. - planned to do it but didn't have enough time before new deadline