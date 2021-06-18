/*1. Create a bank account for a customer (let it be a class "Account"), which will hold all the transactions.
2. Add transaction method ({description, amount (+/-)}) // for advance developers, the transaction should be a class; use a form to add transactions.
3. Have a total method.
4. Write all transactions in the order they occurred, with the last line: total.

Use TypeScript, SCSS, BEM etc.
*/

const totalAmount: HTMLElement = document.querySelector('#balance');
const withdrawRadio = document.getElementById("withdraw");
const depositRadio = document.getElementById("deposit");
const deposit: HTMLElement = document.querySelector('#depositContainer');

class Movements {
    description: string;
    deposit: number;
    type: string;
    account:string

    //withdraw:number;
    constructor(description: string, deposit: number, type: string, account:string ) {
        this.description = description;
        this.deposit = deposit;
        this.type = type;
        this.account=account

    }
}



class AccountList {
    amount: number;
    accountUsers: Array<Movements>;   //YS: This should be in your constructor: <this.accountUsers = []>

    constructor(amount: number) {
        this.amount = amount;
        this.accountUsers = []
    }
    add(accountUser: Movements) {
        this.accountUsers.push(accountUser);
        this.total(accountUser);
    }

    renderMovements() {

        let html: string = '';
        this.accountUsers.forEach(accountUser => {
            html = `<p>${accountUser.description} ${accountUser.account} $${accountUser.deposit} ${accountUser.type}</p>`   //YS: Nice

        });
            deposit.insertAdjacentHTML("afterbegin", html);
            //como hacerlo con inner.html
    }

    total(accountUser) {
        try {
            //const deposit: HTMLElement = document.querySelector('[name="deposit"]').value; //YS: Try/catch
            if(!deposit) throw new Error('The element where to show the balance doesn´t exist!')
            accountUsers.amount += accountUser.deposit;
            let total = `<div>Final balance: $${accountUsers.amount}</div>`;
            totalAmount.innerHTML = total
        }
        catch (error) {
            console.error(error);
        }
    }
}


const accountUsers = new AccountList(0);

const handleSubmit = (ev: any): void => {
    ev.preventDefault();

    const description: string = ev.target.elements.description.value;
    const account: string = ev.target.elements.accountUser.value;

    let deposit = ev.target.elements.deposit.valueAsNumber;

    let type = "deposit";
    if (withdrawRadio.checked) {
        deposit = -deposit;
        type = "withdraw"
    } else if (depositRadio.checked) {
        deposit = deposit;
        type = "deposit";
    }
    
    const accountUser = new Movements(description, deposit, type, account);
    

    accountUsers.add(accountUser);
    accountUsers.renderMovements();
}

//YS: Please format your code before turning it in. 