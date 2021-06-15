// 1. Create a bank account for a customer (let it be a class "Account"), which will hold all the transactions.
// 2. Add transaction method ({description, amount (+/-)}) // for advance developers, the transaction should be a class; use a form to add transactions.
// 3. Have a total method.
// 4. Write all transactions in the order they occurred, with the last line: total.

// Use TypeScript, SCSS, BEM etc.

const handleSubmit = (ev: any):void => {
    ev.preventDefault();

    const trans: string= ev.target.elements.trans.value;
    const amount: number = ev.target.elements.transaction_amount.valueAsNumber;
    const description:string = ev.target.elements.transaction_description.value;
    const newTrasaction = new Transaction(trans, amount, description);
    
    newTrans.addTrans(newTrasaction);
    newTrans.renderTrans();
   
    console.log(trans, amount, description)

}

class Transaction{
    trans: string;
    amount: number;
    description: string;
    constructor(trans: string, amount: number, description: string){
        this.trans = trans;
        this.amount = amount;
        this.description = description;
    } 
}
 
class TransactionList{
    transaction: Array<Transaction> = [];
    addTrans(trans: Transaction) {
        this.transaction.push(trans);
    }
    renderTrans(){
        
        const transRoot:HTMLElement = document.querySelector('#acount_transactions__print');
        const TotalRoot:HTMLElement = document.querySelector('#acount_total__print');
        //loop over deposit

        let htmlTrans:string='';
        let htmlTotal: number = 0;
        this.transaction.forEach(trans=>{
            htmlTrans += `<div class="trans"><li>${trans.trans}: $${trans.amount} - Description: ${trans.description}</li></div>`
            htmlTotal += trans.amount; 
        });
        console.log(htmlTrans);
        transRoot.innerHTML = htmlTrans;
        TotalRoot.innerHTML = `$` + htmlTotal;
        
    }
}

const newTrans = new TransactionList();

let button1= document.getElementById('deposit_check');
let button2= document.getElementById('withdraw_check');
let amount =  document.getElementById('amount');

if (button1.checked = true){
    amount.removeAttribute("max");
    amount.setAttribute("min","0");
}else if (button1.checked = false){
    amount.removeAttribute("min");
    amount.setAttribute("max","-1000");
}

console.dir(amount);