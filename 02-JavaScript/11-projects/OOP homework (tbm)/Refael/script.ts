class acount {  //YS: Classes use a capital letter 
  desc: string;
  amount: number;
  trans_time: any; //YS: Use camelCase for javascript
  acountID: any;

  constructor(desc: string, amount: number) {
    this.desc = desc;
    this.amount = amount;
    this.trans_time = new Date(); //YS: Use camelCase for javascript
    this.acountID = "id" + Math.random().toString(16).slice(2);
  }
}

class acountTrans {  //YS: Class with capital 
  transactions: Array<acount> = [];

  add(trans: acount) {
    this.transactions.push(trans);
  }


  addAcountToDOM() {
    const trans__container: HTMLElement = //YS: Use camelCase for javascript
      document.querySelector(".trans__container");
    let html: string = "";
    this.transactions.forEach((acount) => {
      html += `<div class="div__dom">Transaction was for <h1>${acount.desc}</h1> with the amount of <h1>${acount.amount}$</h1> at ${acount.trans_time} </div>`;
    });
    trans__container.innerHTML = html; 
  }
  showTotal() {   //YS: You are not adding the totals together.  You need to have an array of all the transactions. 
    const show__total = document.querySelector(".show__total"); //YS: Use camelCase for javascript
    let html: any = "";
    this.transactions.forEach((acount) => {
      html += `<div class="div__total">${acount.amount}</div>`;
      console.dir(html);       //YS: Please don't leave console.logs
      let show__total = html;  //YS: You already declared show__total as const in line 31. You cant re-decalare it here. This line is not being used
    });
    show__total.innerHTML = html;  //YS: 
  }
}
const transactions = new acountTrans();

const handleSubmit = (ev: any): void => {
  ev.preventDefault();

  const desc: string = ev.target.elements.desc.value;
  const amount: number = ev.target.elements.amount.value;   
  const newAcount = new acount(desc, amount);
  transactions.add(newAcount);    //YS: Here you are adding the whole class instead of just the transactions (amount). 
  transactions.addAcountToDOM();
  transactions.showTotal();
  ev.target.reset();
};