/*1. Create a bank account for a customer (let it be a class "Account"), which will hold all the transactions.
2. Add transaction method ({description, amount (+/-)}) // for advance developers, the transaction should be a class; use a form to add transactions.
3. Have a total method.
4. Write all transactions in the order they occurred, with the last line: total.

Use TypeScript, SCSS, BEM etc.
*/


class Movements{
    description:string;
    deposit:number;
    //withdraw:number;

    constructor(description:string, deposit: number /*, withdraw: number*/ ) {
        this.description = description;
        this.deposit = deposit;
        //this.withdraw= withdraw;
    }
}



class AccountList {
    amount: number;
    accountUsers: Array<Movements> = [];
  
    constructor (amount:number)  {  
this.amount=amount;
}
    add(accountUser: Movements) {
        this.accountUsers.push(accountUser);
        this.total(accountUser);
        
      
    
    }
    renderMovements(){
        const balance:HTMLElement = document.querySelector('#balance');

        let html:string='';
            this.accountUsers.forEach(accountUser=>{
            html += `<p>${accountUser.description}  ${accountUser.deposit} ${accountUsers.amount} </p>`
            
        });
        balance.innerHTML = html;
    }
   total(accountUser){
     accountUsers.amount += accountUser.deposit;
  
    console.log(accountUsers.amount)
    }
  
}


const accountUsers = new AccountList(0);

const handleSubmit = (ev: any):void => {
    ev.preventDefault();

    const description: string = ev.target.elements.description.value;
    const deposit = ev.target.elements.deposit.valueAsNumber;
    //const withdraw:number = ev.target.elements.withdraw.value;

    const accountUser = new Movements(description , deposit /*,withdraw*/);

   accountUsers.add(accountUser);
   accountUsers.renderMovements();
}
