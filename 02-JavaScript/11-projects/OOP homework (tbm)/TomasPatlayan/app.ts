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
    const putTransactions: HTMLElement =
      document.querySelector(".transactions");

    let transaction: string = "";

    this.transacts.forEach((transact) => {
      if (transact.movement === "deposit") {
        transaction += ` You have deposited $USD${transact.money}`;
      } else if (transact.movement === "withdraw") {
        transaction += ` You have withdraw  -$USD${transact.money}`;
      }
      // transaction += ` You have deposited ${transact.money}`;
    });

    putTransactions.innerHTML = transaction;
  }

  totalAmount(transact): void {
    const allTotal: HTMLElement = document.querySelector(".total");

    if (transact.movement === "deposit") {
      Balance.total += transact.money;
    } else if (transact.movement === "withdraw") {
      Balance.total -= transact.money;
    }
    let total = `<div> Balance $USD ${Balance.total}</div>`;

    allTotal.innerHTML = total;
  }
}

const Balance = new Transact(0);

const handleSubmit = (ev: any): void => {
  ev.preventDefault();

  const amount: number = ev.target.elements.amount.valueAsNumber;
  const movement: string = ev.target.elements.movement.value;

  const pepe = new Account2(amount, movement);

  Balance.add(pepe);
  console.log(amount, movement);
};
