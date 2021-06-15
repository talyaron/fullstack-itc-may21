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

  add(transact: Account2): void {
    this.transacts.push(transact);
  }

  totalAmount(transact): void {
    const allTotal: HTMLElement = document.querySelector(".total");

    if (transact.movement === "deposit") {
      Movements.total += transact.money;
    } else if (transact.movement === "transfer") {
      Movements.total -= transact.money;
    }
    let total = `<div> Balance $ ${Movements.total}</div>`

    allTotal.innerHTML = total;
  }

 
}

const Movements = new Transact(0);


const nowSubmit = (ev:any):void => {
ev.preventDefault();

    const amount:number = ev.target.elements.amount.valueAsNumber;
    const movement:string = ev.target.elements.movement.value;

    const pepe = new Account2(amount,movement);



    Movements.add(pepe)
}