// 1. Create a bank account for a customer (let it be a class "Account"), which will hold all the transactions.
// 2. Add transaction method ({description, amount (+/-)}) // for advance developers, the transaction should be a class; use a form to add transactions.
// 3. Have a total method.
// 4. Write all transactions in the order they occurred, with the last line: total.
// Use TypeScript, SCSS, BEM etc.
var depositSubmit = function (ev) {
    ev.preventDefault();
    var deposit = ev.target.elements.deposit.value;
    var deposit__description = ev.target.elements.deposit__description.value;
    var newDeposit = new Deposit(deposit, deposit__description);
    newDep.addDep(newDeposit);
    newDep.renderDeposit();
};
var withdrawSubmit = function (ev) {
    ev.preventDefault();
    var withdraw = ev.target.elements.withdraw.value;
    var withdraw__description = ev.target.elements.withdraw__description.value;
    var newWithdraw = new Withdraw(withdraw, withdraw__description);
    newWith.addWith(newWithdraw);
    newWith.renderWithdraw();
};
var Deposit = /** @class */ (function () {
    function Deposit(deposit, deposit__description) {
        this.deposit = deposit;
        this.deposit__description = deposit__description;
    }
    return Deposit;
}());
var AddDeposit = /** @class */ (function () {
    function AddDeposit() {
        this.deposits = [];
    }
    AddDeposit.prototype.addDep = function (dep) {
        this.deposits.push(dep);
    };
    AddDeposit.prototype.renderDeposit = function () {
        var depositRoot = document.querySelector('#deposit');
        //loop over deposit
        var htmlDeposit = '';
        this.deposits.forEach(function (dep) {
            htmlDeposit += "<div class=\"dep\"><p>Amount: $" + dep.deposit + "</p><p>Description: " + dep.deposit__description + "</p></div>";
        });
        console.log(htmlDeposit);
        depositRoot.innerHTML = htmlDeposit;
    };
    return AddDeposit;
}());
var Withdraw = /** @class */ (function () {
    function Withdraw(withdraw, withdraw__description) {
        this.withdraw = withdraw;
        this.withdraw__description = withdraw__description;
    }
    return Withdraw;
}());
var AddWithdraw = /** @class */ (function () {
    function AddWithdraw() {
        this.withdraws = [];
    }
    AddWithdraw.prototype.addWith = function (withd) {
        this.withdraws.push(withd);
    };
    AddWithdraw.prototype.renderWithdraw = function () {
        var withdrawRoot = document.querySelector('#withdraw');
        //loop over withdraw
        var htmlWithdraw = '';
        this.withdraws.forEach(function (withd) {
            htmlWithdraw += "<div class=\"with\"><p>Amount: $" + withd.withdraw + "</p><p>Description: " + withd.withdraw__description + "</p></div>";
        });
        console.log(htmlWithdraw);
        withdrawRoot.innerHTML = htmlWithdraw;
    };
    return AddWithdraw;
}());
var newWith = new AddWithdraw();
var newDep = new AddDeposit();
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
var SumaTotal = /** @class */ (function () {
    function SumaTotal() {
        this.deposits = [];
        this.withdraws = [];
    }
    SumaTotal.prototype.SumaTot = function () {
        var resultadoWith = 0;
        this.withdraws.forEach(function (withd) {
            resultadoWith += withd[0];
        });
        var resultadoDep = 0;
        this.deposits.forEach(function (deps) {
            resultadoDep += deps[0];
        });
        var resultado = 0;
        resultado += resultadoDep + resultadoWith;
        console.log("El resultado es " + resultado);
    };
    return SumaTotal;
}());
var sumaTot = new SumaTotal();
