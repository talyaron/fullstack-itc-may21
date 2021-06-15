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

      const newTrans: HTMLElement = document.createElement(`div`);
      newTrans.classList.add(
        "transactions__item",
        "transactions__item--action"
      );
      transContainer.appendChild(newTrans);
      const newTransSign: HTMLElement = document.createElement(`i`);
      newTransSign.id = "sign";
      newTransSign.classList.add("fas", "fa-2x");
      if (transaction.transAmount > 0) {
        newTransSign.classList.add("fa-plus-circle");
        newTransSign.style.color = "green";
        newTransSign.title = "Income";
      } else {
        newTransSign.classList.add("fa-minus-circle");
        newTransSign.style.color = "red";
        newTransSign.title = "Expense";
      }
      newTrans.appendChild(newTransSign);
      const newTransAmount: HTMLElement = document.createElement(`div`);
      newTransAmount.id = "trans_amount";
      newTransAmount.innerText = `₪${Math.abs(transaction.transAmount)}`;
      if (transaction.transAmount >= 0) {
        newTransAmount.style.color = "green";
      } else {
        newTransAmount.style.color = "red";
      }
      newTrans.appendChild(newTransAmount);
      const newTransDate: HTMLElement = document.createElement(`div`);
      newTransDate.id = "trans_date";
      newTransDate.innerText = `${transaction.transDate.getDate()}-${
        transaction.transDate.getMonth() + 1
      }-${transaction.transDate.getFullYear()}`;
      newTrans.appendChild(newTransDate);
      const totalDate: HTMLElement = document.querySelector("#total_date");
      totalDate.innerText = `For Date: ${newTransDate.innerText}`;
      const newTransBiz: HTMLElement = document.createElement(`div`);
      newTransBiz.id = "trans_business";
      newTransBiz.innerText = `${transaction.transBiz}`;
      newTrans.appendChild(newTransBiz);
      const newTransId: HTMLElement = document.createElement(`div`);
      newTransId.id = "trans_id";
      newTransId.innerText = `${transaction.transId}`;
      newTrans.appendChild(newTransId);
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
