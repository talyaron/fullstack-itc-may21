var handleSubmit = (ev:any):void => {
    ev.preventDefault()

    const amount: number = ev.target.elements.amount.value;
    const description: string = ev.target.elements.description.value;
console.log(amount)
console.log(description)
    const transaction = new Transaction(amount, description);
    transactions.add(transaction);
    transactions.renderTransactions();
    transactions.runningTotal();
ev.target.reset()
}

class Transaction {
    amount: number;
    description: string;

    constructor(amount: number, description:string){
        this.amount = amount;
        this.description = description;
    }
}

class AllTransactions {
    transactions: Transaction[] = [];

    add(transaction: Transaction){
        this.transactions.push(transaction);
    }

    renderTransactions(){
        const transactionsDiv :HTMLElement = document.querySelector(".transactions-div");

        let html: string ="";
        this.transactions.forEach((transaction)=>{
            html +=
            `<p>Amount: ${transaction.amount} Description: ${transaction.description} </p>`
    
        });
        transactionsDiv.innerHTML = html;
    }
    runningTotal(amount, totalAmount){
       total =  totalAmount+=amount;
      

        const totalDiv: HTMLElement = document.querySelector(".total")

        totalDiv.innerHTML = `<p>Running Total:${total} </p>`
    }
}

const transactions = new AllTransactions();