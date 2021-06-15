// 1. Create a bank account for a customer (let it be a class "Account"), which will hold all the transactions.
// 2. Add transaction method ({description, amount (+/-)}) // for advance developers, the transaction should be a class; use a form to add transactions.
// 3. Have a total method.
// 4. Write all transactions in the order they occurred, with the last line: total.

// Use TypeScript, SCSS, BEM etc.

const button1= <HTMLInputElement> document.getElementById('deposit_check');
const button2= <HTMLInputElement> document.getElementById('withdraw_check');
const amount_total =  document.getElementById('amount');

// Funcion para tomar info de formulario
const handleSubmit = (ev: any):void => {
    ev.preventDefault();
    
    const trans: string= ev.target.elements.trans.value;
    let amount: number = ev.target.elements.transaction_amount.valueAsNumber;
    const description:string = ev.target.elements.transaction_description.value;
    

     if(button2.checked){
       amount = -amount; 
    }
    // Esto debe ir debajo del if para que tome los Withdraws negativos (-)
    const newTrasaction = new Transaction(trans, amount, description);

    newTrans.addTrans(newTrasaction);
    newTrans.renderTrans();
    alert('YOU HAD MADE A NEW TRANSACTION!')
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
        //loop over transactions

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



