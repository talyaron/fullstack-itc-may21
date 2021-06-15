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

    getTransaction(account: Account) {
        //add transaction

        this.transaction.push(account);

    }

    getTotal(count: number) {

        let acumular: number = 0;
        for (let i: number = 0; i < count; i++) {
            acumular += this.transaction[i]['amount'];
        }
        return acumular

    }

    getDeleteAll() {

    }


    renderTransaction() {

        const transactionRoot: HTMLElement = document.querySelector('#transactionRoot');

        const descriptionRoot: HTMLElement = document.querySelector('#square__item--description--value');

        const depositRoot: HTMLElement = document.querySelector('#square__item--deposit--value');

        const withdrawRoot: HTMLElement = document.querySelector('#square__item--withdraw--value');

        const totalRoot: HTMLElement = document.querySelector('#square__item--total--value');

        let description: string = '';
        let deposit: string = '';
        let withdraw: string = '';
        let total: string = '';

        let count: number = 1;

        this.transaction.forEach(account => {


            if (account.amount < 0) {
                description += `<span>${account.description}</span><br>`;
                withdraw += `<span>₪ ${Number(account.amount).toFixed(2)}</span><br>`;
                deposit += `<span>₪ 0.00</span><br>`;

                if (this.getTotal(count) < 0) {
                    total += `<span class ="red_text">₪ ${Number(this.getTotal(count)).toFixed(2)}</span><br>`;
                } else {
                    total += `<span class ="green_text">₪ ${Number(this.getTotal(count)).toFixed(2)}</span><br>`;
                }

                count++;
            } else {
                description += `<span>${account.description}</span><br>`
                deposit += `<span>₪ ${Number(account.amount).toFixed(2)}</span><br>`
                withdraw += `<span>₪ 0.00</span><br>`;


                if (this.getTotal(count) < 0) {
                    total += `<span class ="red_text">₪ ${Number(this.getTotal(count)).toFixed(2)}</span><br>`;
                } else {
                    total += `<span class ="green_text">₪ ${Number(this.getTotal(count)).toFixed(2)}</span><br>`;
                }

                count++;
            }


        });


        descriptionRoot.innerHTML = description;
        depositRoot.innerHTML = deposit;
        withdrawRoot.innerHTML = withdraw;
        totalRoot.innerHTML = total;

    }
}

const transaction = new TransactionList(); //instance of TransactionList

function handleSumbitDeposit(event: any): void {

    event.preventDefault();

    const description: string = event.target.elements.description_deposit.value;
    const amount: number = parseFloat(event.target.elements.amount_deposit.value);

    if(amount <=0){
        alert('Please enter a positive number')
    }else{
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
    }
    else {
        const account = new Account(description, amount);

        transaction.getTransaction(account);

        transaction.renderTransaction();
    }


}

function handleDelete(event: any): void {

    event.preventDefault();

    transaction.getDeleteAll();

}

