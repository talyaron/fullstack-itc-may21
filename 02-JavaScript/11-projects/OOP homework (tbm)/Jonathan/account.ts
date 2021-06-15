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

        let sum: number = 0;
        for (let i: number = 0; i < count; i++) {
            sum += this.transaction[i]['amount'];
        }
        return sum;

    }

    getDeleteAll() {

    }


    renderTransaction() {


        const descriptionRoot: HTMLElement = document.querySelector('#square__item--description--value');

        const depositRoot: HTMLElement = document.querySelector('#square__item--deposit--value');

        const withdrawRoot: HTMLElement = document.querySelector('#square__item--withdraw--value');

        const totalRoot: HTMLElement = document.querySelector('#square__item--total--value');

        try {

            if (!descriptionRoot) throw new Error('Description Root Not Founded')
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

                    if (this.getTotal(count) < 0) {
                        total += `<span class ="red_text">${count}- ₪ ${this.getTotal(count).toFixed(2)}</span><br>`;
                    } else {
                        total += `<span class ="green_text">${count}- ₪ ${this.getTotal(count).toFixed(2)}</span><br>`;
                    }

                    count++;
                } else {
                    description += `<span>${count}- ${account.description}</span><br>`
                    deposit += `<span>₪ ${account.amount.toFixed(2)}</span><br>`
                    withdraw += `<span>₪ 0.00</span><br>`;


                    if (this.getTotal(count) < 0) {
                        total += `<span class ="red_text">${count}- ₪ ${this.getTotal(count).toFixed(2)}</span><br>`;
                    } else {
                        total += `<span class ="green_text">${count}- ₪ ${this.getTotal(count).toFixed(2)}</span><br>`;
                    }
                    
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
        alert('Please enter a positive number')
    } else {
        const account = new Account(description, amount);

        transaction.getTransaction(account);

        transaction.renderTransaction();
    }

    event.reset();

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

    event.reset();
}

function handleDelete(event: any): void {

    event.preventDefault();

    transaction.getDeleteAll();

    event.reset();

}

