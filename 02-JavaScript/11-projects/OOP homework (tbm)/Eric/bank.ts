/*1. Create a bank account for a customer (let it be a class "Account"), which will hold all the transactions.
2. Add transaction method ({description, amount (+/-)}) // for advance developers, the transaction should be a class; use a form to add transactions.
3. Have a total method.
4. Write all transactions in the order they occurred, with the last line: total.

Use TypeScript, SCSS, BEM etc.
*/



class Account{
    description:string;
    deposit:number;
    withdraw:number;

    constructor(deposit: number, withdraw: number, description:string) {
        this.description = description;
        this.deposit = deposit;
        this.withdraw= withdraw;
    }
    


}




class AccountList {
    accountUsers: Array<Account> = [];


    add(accountUser: Account) {
        this.accountUsers.push(accountUser);
    
    }
    renderAccount(){
        const accountRoot:HTMLElement = document.querySelector('#accountRoot');



        let html:string='';
        this.accountUsers.forEach(accountUser=>{
            html += `<p>${accountUser.description}  ${accountUser.deposit}</p>`
            
        });
        accountRoot.innerHTML = html;
    }

    getTotal(){
        //let totalAccount = 44;
       // totalAccount += this.accountUsers[0]['deposit']
        //console.log(totalAccount)
        
    }
}


const accountUsers = new AccountList();

const handleSubmit = (ev: any):void => {
    ev.preventDefault();

    const description: string = ev.target.elements.description.value;
    const deposit = ev.target.elements.deposit.value;
    const withdraw:number = ev.target.elements.withdraw.value;

    console.log(deposit)
    const accountUser = new Account(parseInt(deposit),withdraw, description);

   accountUsers.add(accountUser);
   accountUsers.renderAccount();
   //accountUsers.getTotal()
//const userDeposit = document.getElementById("userDeposit");
//let totalAccount = 0;
//totalAccount+=(Number(userDeposit.value));
}

