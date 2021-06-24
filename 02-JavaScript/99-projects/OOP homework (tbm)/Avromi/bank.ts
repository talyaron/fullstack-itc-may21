var handleSubmit = (ev: any): void => {
    ev.preventDefault()

    const amount: number = ev.target.elements.amount.value;
    const description: string = ev.target.elements.description.value;

    const transaction = new Transaction(amount, description);
    transactions.add(transaction);
    transactions.renderTransactions();
    transactions.runningTotal();
    ev.target.reset()
}

class Transaction {
    amount: number;
    description: string;

    constructor(amount: number, description: string) {
        this.amount = amount;
        this.description = description;
    }
}

class AllTransactions {
    transactions: Transaction = [];

    add(transaction: Transaction) {
        this.transactions.push(transaction);
    }

    renderTransactions() {
        const transactionsDiv: HTMLElement = document.querySelector(".transactions-div");

        let html: string = "";
        this.transactions.forEach((transaction) => {
            html +=
                `<p>Amount: ${transaction.amount} Description: ${transaction.description} </p>`

        });
        transactionsDiv.innerHTML = html;
    }
    runningTotal() {

        const allTransactions = [];
        this.transactions.forEach(transaction => {
            allTransactions.push(Number(transaction.amount))
        })
        console.log(allTransactions)

        // var total = 0;
        // for (var i in arr) { total += arr[i]; }

        //     let result[] = this.transactions.map(a => a.amount);
        //     console.log(result)


        const arr = [1,2,3,4,5]
        const total = allTransactions.reduce((acc, cur) => acc + cur)
            // console.log(accumulator)
            // console.log(current)
          
      


        console.log(total);

        const totalDiv: HTMLElement = document.querySelector(".total")

        totalDiv.innerHTML = `<p>Running Total:${total} </p>`
    }
}

const transactions = new AllTransactions();

