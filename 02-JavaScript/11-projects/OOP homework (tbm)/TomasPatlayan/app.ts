class Account2 {
  money: number;
  movement: string;

  constructor(money: number, movement: string) {
    this.money = money;
    this.movement = movement;
  }
}

class Transact {
  transacts: Array<Account2> = [];
  total: number;

  constructor(total: number) {
    this.total = total;
  }

  add(trans: Account2): void {
    this.transacts.push(trans);
    this.totalAmount(trans);
    this.showTransactions();
  }

  showTransactions() {
    const putTransactions: HTMLElement = document.querySelector(
      ".show-movements__transactions"
    );

    let transaction: string = "";

    this.transacts.forEach((transact) => {
      if (transact.movement === "deposit") {
        transaction += `<h3> You have deposited $USD${transact.money}</h3>`;
      } else if (transact.movement === "withdraw") {
        transaction += `<h3> You have withdraw  -$USD${transact.money} </h3>`;
      }
    });

    putTransactions.innerHTML = transaction;
  }

  totalAmount(transact): void {
    const allTotal: HTMLElement = document.querySelector(
      ".show-movements__total"
    );

    if (transact.movement === "deposit") {
      Balance.total += transact.money;
    } else if (transact.movement === "withdraw") {
      Balance.total -= transact.money;
    }
    let total = `<h2> Balance $USD ${Balance.total}</h2>`;

    allTotal.innerHTML = total;
  }
}

const Balance = new Transact(0);

const handleSubmit = (ev: any): void => {
  ev.preventDefault();

  try {
    const amount: number = ev.target.elements.amount.valueAsNumber;

    if (amount <= 0) throw new Error("You must put an amount greater than 0, try again");

    const movement: string = ev.target.elements.movement.value;

    const pepe = new Account2(amount, movement);

    Balance.add(pepe);
    console.log(amount, movement);
  } catch (error) {
    alert(error);
  }
};
