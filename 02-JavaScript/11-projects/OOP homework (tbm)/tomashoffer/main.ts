// 1. Create a bank account for a customer (let it be a class "Account"), which will hold all the transactions.
// 2. Add transaction method ({description, amount (+/-)}) // for advance developers, the transaction should be a class; use a form to add transactions.
// 3. Have a total method.
// 4. Write all transactions in the order they occurred, with the last line: total.

// Use TypeScript, SCSS, BEM etc.
const depositSubmit = (ev: any):void => {
    ev.preventDefault();

    const deposit: number = ev.target.elements.deposit.value;
    const deposit__description: string = ev.target.elements.deposit__description.value;


    const newDeposit = new Deposit(deposit, deposit__description);

    newDep.addDep(newDeposit);
    newDep.renderDeposit();
    

}

const withdrawSubmit = (ev: any):void => {
    ev.preventDefault();

    const withdraw: number = ev.target.elements.withdraw.value;
    const withdraw__description: string = ev.target.elements.withdraw__description.value;


    const newWithdraw = new Withdraw(withdraw, withdraw__description);

    newWith.addWith(newWithdraw);
    newWith.renderWithdraw();


}

class Deposit{
    deposit: number;
    deposit__description: string;
    constructor(deposit: number, deposit__description: string){
        this.deposit = deposit;
        this.deposit__description = deposit__description;
    } 
}

class AddDeposit{
    deposits: Array<Deposit> = [];
    addDep(dep: Deposit) {
        this.deposits.push(dep);
    }
    renderDeposit(){
        const depositRoot:HTMLElement = document.querySelector('#deposit');

        //loop over deposit

        let htmlDeposit:string='';
        this.deposits.forEach(dep=>{
            htmlDeposit += `<div class="dep"><p>Amount: $${dep.deposit}</p><p>Description: ${dep.deposit__description}</p></div>`
        });
        console.log(htmlDeposit);
        depositRoot.innerHTML = htmlDeposit;
        

    }
}

class Withdraw{
    withdraw: number;
    withdraw__description: string;
    constructor(withdraw: number, withdraw__description: string){
        this.withdraw = withdraw;
        this.withdraw__description = withdraw__description;
    }
} 

class AddWithdraw{
    withdraws: Array<Withdraw> = [];
    addWith(withd: Withdraw) {
        this.withdraws.push(withd);
    }
    renderWithdraw(){
        const withdrawRoot:HTMLElement = document.querySelector('#withdraw');

        //loop over withdraw

        let htmlWithdraw:string='';
        this.withdraws.forEach(withd=>{
            htmlWithdraw += `<div class="with"><p>Amount: $${withd.withdraw}</p><p>Description: ${withd.withdraw__description}</p></div>`
        });
        console.log(htmlWithdraw);
        withdrawRoot.innerHTML = htmlWithdraw;

    }
}


const newWith = new AddWithdraw();
const newDep = new AddDeposit();

// class Transaction{
//     withdraw: number;
//     resultado:number = 0;
//     constructor(deposit:number, withdraw:number, resultado:number = 0){
//         this.deposit = deposit;
//         this.withdraw = withdraw;
//         this.resultado = resultado;
//     }
//     suma(deposit:number, withdraw:number, resultado:number){
//         resultado = 0;
//         resultado += deposit + withdraw;
//         console.log(resultado);
//     }
//     renderResultado(){
//         const sumaTotal:HTMLElement = document.querySelector('#total');
//         let htmlTotal:string='';
//         htmlTotal = `$${this.resultado}`;
//         sumaTotal.innerHTML = htmlTotal;
//     }
  
// }
// const sumaDep = new Transaction(Deposit[0], Withdraw[0]);


class SumaTotal{
    deposits: Array<Deposit> = [];
    withdraws: Array<Withdraw> = [];

    SumaTot(){
        let resultadoWith = 0;
        this.withdraws.forEach(withd=>{
            resultadoWith += withd[0];
        });
        let resultadoDep = 0;
        this.deposits.forEach(deps=>{
            resultadoDep += deps[0];
        });
        let resultado = 0;
        resultado += resultadoDep+resultadoWith;
        console.log(`El resultado es ${resultado}`);
    }

}
const sumaTot= new SumaTotal();