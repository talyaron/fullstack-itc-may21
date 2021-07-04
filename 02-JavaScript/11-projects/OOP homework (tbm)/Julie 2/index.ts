// 1. Create a bank account for a customer (let it be a class "Account"), which will hold all the transactions.
// 2. Add transaction method ({description, amount (+/-)}) // for advance developers, the transaction should be a class; use a form to add transactions.
// 3. Have a total method.
// 4. Write all transactions in the order they occurred, with the last line: total.

// Use TypeScript, SCSS, BEM etc.

// First, get elements from HTML

const userName = <HTMLInputElement>document.querySelector("#userName");
const amountDeposited = <HTMLInputElement>document.querySelector("#deposit");
const amountWithdrawn = <HTMLInputElement>document.querySelector("#withdrawal");
const submitButton = document.querySelector("#submit");

// One class for an individual account, one class for all the accounts. The class has 2 methods of "transaction,"" as stated in the instructions, withdraw money and deposit money.

class Account {
  userName: string;
  amountWithdrawn: number;
  amountDeposited: number;
  runningTotal: number;

  constructor(
    userName: string,
    amountWithdrawn: number,
    amountDeposited: number,
    runningTotal: number
  ) {
    this.userName = userName;
    this.amountWithdrawn = amountWithdrawn;
    this.amountDeposited = amountDeposited;
    this.accountId = "id" + Math.random().toString(16).slice(2);
  }
  depositMoney(intDeposit: number) {
    this.runningTotal = 0;
    return (this.runningTotal = +this.amountDeposited);
  }
  withdrawMoney(intWithdrawal: number) {
    return (this.runningTotal = -this.amountWithdrawn);
  }
}

// This gives each new account its own id. Create a random number, convert it to string and slice it in two. I assume the slice is to make it shorter? What's with the 16?

class AccountsList {
  accounts: Array<Account> = [];
  // This imakes an array of accounts. ADD is a method for this AccountsList class. We will add an account that is an instance of the class "Account.". Push adds it to the array.

  add(account: Account) {
    this.accounts.push(account);
  }

  renderAccounts() {
    const accountsRoot: HTMLElement = document.querySelector("#accountsRoot");
    // This renders the account to the DOM. Similar to how we put the character onto the game in the last assignment.

    let html: string = "";
    // here we assign the variable called html to an empty string. We create this string then we add it to the DOM.

    // The forEach method executes a provided function once for each Array element, thereby "looping through" each item in the array. We use a string literal to put it all in a div. Gives the name and the running total.

    this.accounts.forEach((account) => {
      html =
        html +
        `<p>${account.userName}, you have deposited $${amountDeposited} and you have withdrawn $${amountWithdrawn}. The total Amount of money in your account is ${account.runningTotal}</p>`;
    });

    accountsWrapper.innerHTML = html;

    // This assigns the html variable to the Dom element accountsWrapper.
  }
}
const account = new AccountsList();

// This makes a new instance of an account

const handleSubmit = (ev: any): void => {
  ev.preventDefault();

  // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. Clicking on a link, prevent the link from following the URL.

  const userName: string = ev.target.elements.userName.value;

  //   Here we get the image and the description. Is elements necessary? Yes. But I think it can also be children?

  const amountDeposited: string = ev.target.elements.amountDeposited.value;

  const amountWithdrawn: string = ev.target.elements.amountWithdrawn.value;

  // Create a new account on submit:

  const account = new Account(
    userName,
    amountDeposited,
    amountWithdrawn,
    runningTotal
  );

  accounts.add(account);

  accounts.renderAccounts();
  //   Call the render account function.
};
