class Account {
    
    totalAmount: number;
    transactionList:Array<Transaction> = []

    constructor(totalAmount:number = 0, transactionList:Array<Transaction>) {
        this.totalAmount = totalAmount
        this.transactionList = transactionList
    }

    addTransaction = (transaction:Transaction) => {
        this.transactionList.push(transaction)
        this.totalAmount += transaction.amount
    }

    total = () => {
        return this.totalAmount 
    }
}

class Transaction {
        
    description: string
    amount: number
    
    constructor(description:string, amount:number) {
        this.description = description
        this.amount = amount
    }

    addDeposit = () => { 
        const depositButton = document.querySelector('#depositButton')
        let depositSum = document.querySelector('#deposit')
        depositSum.addEventListener('click', () => {
            return Account.total += depositSum
        })
    }

    addWithdrawal = () => { 
        const withdrawButton = document.querySelector('#withdrawButton')
        let withdrawSum = document.querySelector('#withdrawSum')        
        withdrawButton.addEventListener('click', () => {
            return Account.total += withdrawSum
            
        })
    }
    generateTranListItem = (this.description, this.amount) {
        const tranList = document.querySelector('.overview-wrapper__transactions-list')
        tranList.appendChild
        

    }
}

