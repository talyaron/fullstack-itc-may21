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
        //this.withdraw= withdraw;       //YS: Please dont leave commented code
    }
}



class AccountList {
    amount: number;
    accountUsers: Array<Movements> = [];   //YS: This should be in your constructor: <this.accountUsers = []>
  
    constructor (amount:number)  {  
this.amount=amount;
}
    add(accountUser: Movements) {
        this.accountUsers.push(accountUser);
        this.total(accountUser);
        
      
    
    }
    renderMovements(){
        const deposit:HTMLElement = document.querySelector('#deposit');

        let html:string='';   
            this.accountUsers.forEach(accountUser=>{
            html += `<p>${accountUser.description}  $${accountUser.deposit}  </p>`   //YS: Nice
            
        });
        deposit.innerHTML = html;
    }
   total(accountUser){
    const totalAmount: HTMLElement = document.querySelector('#balance');  //YS: Try/catch
     accountUsers.amount += accountUser.deposit;
     let total = `<div>Final balance: $${accountUsers.amount}</div>`;
            totalAmount.innerHTML = total
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

//YS: Please format your code before turning it in. 