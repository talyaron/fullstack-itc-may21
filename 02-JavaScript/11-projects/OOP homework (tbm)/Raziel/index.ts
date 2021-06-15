

class DepoSit{
    deposit:number;
    transaction:string;
    constructor( deposit:number, transaction:string){
        this.deposit=deposit;
        this.transaction=transaction;

    }
}
class AddDep{

     addMoney:Array<DepoSit>=[];

     addDep(dep:DepoSit){
         this.addMoney.push(dep);
     }
     renderDeposit(){
         const depositScreen:HTMLElement=document.querySelector('#depositScreen');

         let addToDiv:string="";
         this.addMoney.forEach(add=>{
             addToDiv+=`<div><p>Amount:${add.deposit}</p><br><p>Details:${add.transaction}</p>`
         })
         depositScreen.innerHTML=addToDiv;
     }

     totalAmount(){
        const totalScreen:HTMLElement=document.querySelector('#totalScreen');
       let sumHtml:string='';
        let sum=this.addMoney.reduce((a,b)=>a+b.deposit,0);
       sumHtml=`<p>Total:${sum}</p>`;
       totalScreen.innerHTML=sumHtml;
       console.log(sum);
     }

}



const addDeposit= new AddDep();
 const handleDeposit=(ev:any):void=>{
    ev.preventDefault();
    const deposit:number=ev.target.elements.deposit.value;
    const transaction:string=ev.target.elements.transaction.value;
     const newAction=new DepoSit(deposit,`${transaction}`);
     console.log(newAction);
    addDeposit.addDep(newAction);
    addDeposit.renderDeposit();
    addDeposit.totalAmount();

 }
 