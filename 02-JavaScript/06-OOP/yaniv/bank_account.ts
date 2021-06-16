class Transaction {
  transAmount: number;
  transDate: Date = new Date();
  transBiz: string;
  transId: string = "id" + Math.random().toString(16).slice(2);

  constructor(transAmount: number, transBiz: string) {
    this.transBiz = transBiz;
    this.transAmount = transAmount;
  }
}

document.querySelector("#total_amount").innerHTML = "₪0";

class Account {
  customerName: string; // YA: out of scope for this task
  profImageUrl: string; // YA: out of scope for this task
  allTransactions: Array<Transaction> = [];
  totalAmount: number = Number(
    document.querySelector("#total_amount").innerHTML.replace("₪", "")
  );

  // constructor (profImageUrl : string) { // YA: out of scope for this task
  //     this.profImageUrl = profImageUrl;
  // }

  addTrans(transaction: Transaction): void {
    this.allTransactions.push(transaction);
    this.addTransToDOM(transaction);
    this.refreshTotal(transaction.transAmount);
  }

  addTransToDOM(transaction: Transaction) {
    try {
      const transContainer: HTMLElement =
        document.querySelector(".transactions");
      const signFAClass = transaction.transAmount >= 0 ? "plus" : "minus";
      const signTitle = transaction.transAmount >= 0 ? "Income" : "Expense";
      const transColor = transaction.transAmount >= 0 ? "green" : "red";
      const transFormatedDate = `${transaction.transDate.getDate()}-${
        transaction.transDate.getMonth() + 1
      }-${transaction.transDate.getFullYear()}`;
      const totalBeforeContainer: HTMLElement = document.querySelector("#total_amount");

      const transHTML = `<div class="transactions__item transactions__item--action">
      <i id="sign" class="fas fa-2x fa-${signFAClass}-circle" title="${signTitle}" style="color: ${transColor};"></i>
      <div id="trans_amount" style="color: ${transColor};">
        ₪${Math.abs(transaction.transAmount)}
      </div>
      <div id="temp_total">Balace: ₪${Number(totalBeforeContainer.innerHTML.replace('₪','')) + transaction.transAmount}</div>
      <div id="trans_date">${transFormatedDate}</div>
      <div id="trans_business">${transaction.transBiz}</div>
      <div id="trans_id">${transaction.transId}</div>
    </div>`;

      transContainer.insertAdjacentHTML('beforeend',transHTML);

      const totalDateContainer: HTMLElement = document.querySelector("#total_date");
      totalDateContainer.innerText = `For Date: ${transFormatedDate}`;
    } catch (er) {
      console.error(er);
    }
  }

  refreshTotal(transAmount: number): void {
    this.totalAmount += transAmount;
    this.updateDOMTotal(this.totalAmount);
  }

  updateDOMTotal(totalAmount: number) {
    try {
      const domTotal: HTMLElement = document.querySelector("#total_amount");
      domTotal.innerText = `₪${totalAmount}`;
      if (totalAmount >= 0) {
        domTotal.style.color = "green";
      } else {
        domTotal.style.color = "red";
      }
    } catch (er) {
      console.error(er);
    }
  }
}

let isModalOpen: boolean = false;

const openModal = (): void => {
  try {
    const addTransBtn: HTMLElement = document.querySelector(
      `.transactions__item--add`
    );
    const modal: HTMLElement = document.querySelector(`.modalWrapper`);
    const modalBox: HTMLElement = document.querySelector(`.modalBox`);
    addTransBtn.addEventListener(`click`, (ev) => {
      isModalOpen = true;
      modal.style.display = `flex`;
      modalBox.style.display = `unset`;
    });
  } catch (er) {
    console.error(er);
  }
};

const closeModal = (): void => {
  try {
    const close: HTMLElement = document.querySelector(`.close`);
    const modal: HTMLElement = document.querySelector(`.modalWrapper`);
    const modalBox: HTMLElement = document.querySelector(`.modalBox`);

    close.addEventListener(`click`, (ev) => {
      isModalOpen = false;
      console.log('hi');
      modal.style.display = `none`;
      modalBox.style.display = `none`;
    });
  } catch (er) {
    console.error(er);
  }
};

const transactions = new Account();

const handleSubmit = (ev: any) => {
  try {
    ev.preventDefault();

    const transAmount: number = Number(ev.target.elements.transAmount.value);
    const transBiz: string = ev.target.elements.transBiz.value;

    const transaction = new Transaction(transAmount, transBiz);

    transactions.addTrans(transaction);

    const modal: HTMLElement = document.querySelector(`.modalWrapper`);
    const modalBox: HTMLElement = document.querySelector(`.modalBox`);

    isModalOpen = false;
    modal.style.display = `none`;
    modalBox.style.display = `none`;

    ev.target.reset();

  } catch (er) {
    console.error(er);
  }
};

openModal();
closeModal();
