class Account {
    description: string;
    amount: number;

    constructor(description: string, amount: number) {
        this.description = description;
        this.amount = amount;
    }

}

class TransactionList {
    transaction: Array<Account> = []; //array account     
    /* YS: This should be in your constructor:  
        constructor(description: string, amount: number) {
        this.transaction = []
        }
    */
    balance: number;


    getTransaction(account: Account) {
        //add transaction

        this.transaction.push(account);

    }

    getTotal(count: number): number {

        let sum: number = 0;
        for (let i: number = 0; i < count; i++) {   //YS: Nice.
            sum += this.transaction[i]['amount'];
        }
        return sum;

    }

    getDeleteAll() {     //YS: Why do you leave an empty method? 

    }


    renderTransaction() {


        const descriptionRoot: HTMLElement = document.querySelector('#square__item--description--value');    //YS: These HTML elements should be in the global scope. Also format your code. There shouldn't be so much space between variables.  
        const depositRoot: HTMLElement = document.querySelector('#square__item--deposit--value');
        const withdrawRoot: HTMLElement = document.querySelector('#square__item--withdraw--value');
        const totalRoot: HTMLElement = document.querySelector('#square__item--total--value');

        try {

            if (!descriptionRoot) throw new Error('Description Root Not Founded')   //YS: Nice! 
            if (!depositRoot) throw new Error('Description Root Not Founded')
            if (!withdrawRoot) throw new Error('Description Root Not Founded')
            if (!totalRoot) throw new Error('Description Root Not Founded')


            let description: string = '';
            let deposit: string = '';
            let withdraw: string = '';
            let total: string = '';

            let count: number = 1;

            this.transaction.forEach(account => {


                if (account.amount < 0) {
                    description += `<span>${count}- ${account.description}</span><br>`;
                    withdraw += `<span>₪ ${account.amount.toFixed(2)}</span><br>`;
                    deposit += `<span>₪ 0.00</span><br>`;

                    total += `<span class ="green_text"><img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-error-icon.png" class = "img-no-ok">₪ ${this.getTotal(count).toFixed(2)}</span><br>`;
                    this.balance = this.getTotal(count);


                    count++;
                } else {
                    description += `<span>${count}- ${account.description}</span><br>`
                    deposit += `<span>₪ ${account.amount.toFixed(2)}</span><br>`
                    withdraw += `<span>₪ 0.00</span><br>`;

                    total += `<span class ="green_text"><img src="https://cdn.icon-icons.com/icons2/1506/PNG/512/emblemok_103757.png" class = "img-ok">₪ ${this.getTotal(count).toFixed(2)}</span><br>`;
                    this.balance = this.getTotal(count);


                    count++;
                }

            });

            descriptionRoot.innerHTML = description;
            depositRoot.innerHTML = deposit;
            withdrawRoot.innerHTML = withdraw;
            totalRoot.innerHTML = total;

        } catch (e) {
            console.log(e);
        }

    }
}

const transaction = new TransactionList(); //instance of TransactionList

function handleSumbitDeposit(event: any): void {

    event.preventDefault();

    const description: string = event.target.elements.description_deposit.value;
    const amount: number = parseFloat(event.target.elements.amount_deposit.value);

    if (amount <= 0) {
        alert('Please enter a positive number')          //YS: Why cant you transfer more than you have, in a real bank account you can be in negative. 
    } else {
        const account = new Account(description, amount);

        transaction.getTransaction(account);

        transaction.renderTransaction();
    }



}

function handleSumbitWithdraw(event: any): void {

    event.preventDefault();

    const description: string = event.target.elements.description_withdraw.value;

    let amount: number = -parseFloat(event.target.elements.amount_withdraw.value);

    if (amount >= 0) {
        alert('Is negative the number you want to enter')


    } else {
        const account = new Account(description, amount);

        transaction.getTransaction(account);

        transaction.renderTransaction();

    }

    console.log(transaction.balance)

}

function handleDelete(event: any): void {

    event.preventDefault();

    transaction.getDeleteAll();


}

