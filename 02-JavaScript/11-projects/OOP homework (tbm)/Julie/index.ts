// create a bank account for a customer (let it be a class "account"), which will hold all the transactions.

// add transaction method ({description, amount (+/-)})

// for advance developers, the transaction should be a class; use a form to add transactions. have a total method. write all transactions in the order they occurred, with the last line: total. Typescript. scss;


interface person {
    name: string,
    age: number
}

const obj: person = {
    name: 'Julie',
    age: 25
}

function handleTransation(ev) {
    ev.preventDefault();
    let name = document.querySelector("#name");
    let deposit = Number(document.querySelector("#deposit"));
    // Do thi for the other one
    let withdrawal = document.querySelector("#withdrawal");
    console.log(typeof name.value)
    name = name.value;
    deposit = deposit.value;
    withdrawal = withdrawal.value;
    newAccount = new Account (name, deposit, withdrawal);
  } 
};

// Apply typescript to this, above, but focus on types of strings and numbers, and object (below). Look into interfaces for objects. 

class Account {
  constructor(name, deposit, withdrawal) {
    this.name = name;
    this.dep = 
    this.totalAmount = 0;
  }

//   Dont forget to to give type to the thises and to the parameters

  depositMoney(deposit) {
    return (this.totalAmount += deposit);
  }
  withdrawMoney(withdrawal) {
    return (this.totalAmount -= withdrawal);
  }
  giveAccountDetails() {
    console.log(`The amount of money in your account is ${this.totalAmount}`);
  }
}

let newAccount = new Account("Julie", 1000);
console.log(newAccount);

console.log(newAccount.depositMoney(500));
console.log(newAccount.withdrawMoney(400));

newAccount.giveAccountDetails();




