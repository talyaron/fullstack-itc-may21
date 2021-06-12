// var yearsalary:number = 10000;  

// function monthSalary(a:number){
//     var resultado = a / 12;
//     console.log(`The monthly salary is ${resultado}`)
// }
// monthSalary(yearsalary);


interface Bdays{
    name:string,
    date: number
}
var tomas:Bdays = {
    name: 'tomas',
    date: 1980
}
var matias:Bdays = {
    name:'matias',
    date: 1984 
}
var eric:Bdays = {
    name: 'eric',
    date: 1989
}
var currentYear= new Date().getFullYear();

function old(persons:Bdays){
    console.log(`${persons.name} is ${currentYear - persons.date} years old`)
}
old(tomas);
old(matias);
old(eric);
