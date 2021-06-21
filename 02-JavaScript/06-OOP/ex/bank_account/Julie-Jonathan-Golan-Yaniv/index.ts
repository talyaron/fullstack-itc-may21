// export{};

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
  name: string = "";
  constructor(name: string) {
    this.name = name;
  }

  addNewTransaction(
    amount: number,
    date: Date,
    place: string,
    description: string
  ): string {
    let newTransaction: Transaction = new Transaction(
      amount,
      date,
      place,
      description
    );
    this.account.push(newTransaction);
    return newTransaction.transactionId;
  }

  calculateSum(): number {
    const sum = this.account.reduce((sum, transaction) => {
      return sum + transaction.amount;
    }, 0);
    return sum;
  }

  editTransaction(transactionIdToEdit: string, updatedDescription: string) {
    try {
      //find the transactiond
      const transactionIndex: number = this.account.findIndex(
        (transaction) => transaction.transactionId === transactionIdToEdit
      );
      console.log(transactionIndex);
      //want to edit
      this.account[transactionIndex].description = updatedDescription;
    } catch (e) {
      console.error(e);
    }
  }

  filterByDate(fromDate: Date, toDate: Date) {
    try {
      // create the array to be returned eventually + find all transactions between those dates
      // [trans1, trans2, trans3, trans4]
      const filteredbyDates: Array<Transaction> = this.account.filter(
        (transaction) =>
          transaction.date >= fromDate && transaction.date <= toDate
      );

      // return a new array with only those transactions
      return filteredbyDates;
    } catch (er) {
      console.error(er);
    }
  }
}

let account = new Account("Yaniv");
const transactionId1 = account.addNewTransaction(
  100,
  new Date(),
  "Tel-Aviv",
  "Bank deposit"
);
account.addNewTransaction(-300, new Date(), "Ramat-Gan", "ATM redrwal");

console.log(account.calculateSum());
console.log(JSON.stringify(account));

account.editTransaction(transactionId1, "Walllllaaaaa!!!");
console.log(account);

const filteredAccount = account.filterByDate(new Date('15-jun-2021'), new Date('17-jun-2021'));
console.log(`The filtered array is: ${JSON.stringify(filteredAccount)}`);



const filteredAccount = account.filterByDate(
  new Date("15-jun-2021"),
  new Date("17-jun-2021")
);
console.log(`The filtered array is:`);
filteredAccount.forEach((transaction) =>
  console.log(transaction.transactionId)
);
