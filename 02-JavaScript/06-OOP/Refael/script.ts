class acount {
  desc: string;
  amount: number;
  trans_time: any;
  acountID: any;

  constructor(desc: string, amount: number) {
    this.desc = desc;
    this.amount = amount;
    this.trans_time = new Date();
    this.acountID = "id" + Math.random().toString(16).slice(2);
  }
}

class acountTrans {
  transactions: Array<acount> = [];

  add(trans: acount) {
    this.transactions.push(trans);
  }
  addAcountToDOM() {
    const trans__container: HTMLElement =
      document.querySelector(".trans__container");
    let html: string = "";
    this.transactions.forEach((acount) => {
      html += `<div class="div__dom">Transaction was for <h1>${acount.desc}</h1> with the amount of <h1>${acount.amount}$</h1> at ${acount.trans_time} </div>`;
    });
    trans__container.innerHTML = html;
  }
  showTotal() {
    const show__total = document.querySelector(".show__total");
    let html: any = "";
    this.transactions.forEach((acount) => {
      html += `<div class="div__total">${acount.amount}</div>`;
      console.dir(html);
      let show__total = html;
    });
    show__total.innerHTML = html;
  }
}
const transactions = new acountTrans();

const handleSubmit = (ev: any): void => {
  ev.preventDefault();

  const desc: string = ev.target.elements.desc.value;
  const amount: number = ev.target.elements.amount.value;
  const newAcount = new acount(desc, amount);
  transactions.add(newAcount);
  transactions.addAcountToDOM();
  transactions.showTotal();
  ev.target.reset();
};
