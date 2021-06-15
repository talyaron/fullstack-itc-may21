

class BankAccount{
    amount:number;
    description:string;
    constructor(description:string,amount:number){
        this.amount=amount;
    this.description=description;
    }
}


class Transaction{
    transaction:Array<BankAccount>=[];
    balance:number;

    getTransaction(acc:BankAccount){
        this.transaction.push(acc);
    }

    getTotalAmount(count:number):number{
        let x:number=0;
        for(let i=0;i<count;i++){
            x+=this.transaction[i]['amount'];

        }
        return x;
    }


renderTransaction(){

const descriptionValue:HTMLElement=document.querySelector('#descriptionValue');
const depositVale:HTMLElement=document.querySelector('#depositValue');
const totalValue:HTMLElement=document.querySelector('#totalValue');

            let description: string = '';
            let deposit: string = '';
            let withdraw: string = '';
            let total: string = '';

            let count: number = 1;

this.transaction.forEach(acc=>{

    description += `<span>${count}- ${acc.description}</span><br>`
    deposit += `<span> ${acc.amount.toFixed(2)} ₪</span><br>`
    total += `<span > ${this.getTotalAmount(count).toFixed(2)} ₪</span><br>`;
    this.balance = this.getTotalAmount(count);
    count++;

});
 descriptionValue.innerHTML=description;
 depositVale.innerHTML=deposit;
 totalValue.innerHTML=total;

}
}


const transactionOne=new Transaction();
function handleSubmit(ev:any):void{
    ev.preventDefault();
    const description:string=ev.target.elements.description.value;
    const deposit:number=parseFloat(ev.target.elements.deposit.value);
    const newAccount=new BankAccount(description,deposit);
    transactionOne.getTransaction(newAccount);
    transactionOne.renderTransaction();
    console.log(transactionOne.balance);
}
