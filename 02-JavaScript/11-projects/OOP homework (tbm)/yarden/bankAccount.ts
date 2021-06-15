let totalAmount:number = 0


class Transaction {
        
    description: string
    amount: number
    
    constructor(description:string, amount:number) {
        this.description = description
        this.amount = amount
    }
    
    addWithdrawal = () => { 
        let withdraw = document.querySelector('#withdraw')
        withdraw.addEventListener('click', () => {
        return totalAmount -= withdraw:Number
        })
}

    addDeposit = () => { 
        let deposit = document.querySelector('#deposit')
        deposit.addEventListener('click', () => {
        return totalAmount += deposit:Number
        })
    }

}

class Account {

    totalAmount: number;
    transactionList:Array<Transaction> = []

    addTransaction = (transaction:Transaction) => {
        this.transactionList.push(transaction)
        this.totalAmount += transaction.amount
    }

    total = () => { return this.totalAmount }

    getTransactionsString = () => { return this.transactionList.reduce } 
}