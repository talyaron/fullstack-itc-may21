// var yearsalary:number = 10000;  
var tomas = {
    name: 'tomas',
    date: 1980
};
var matias = {
    name: 'matias',
    date: 1984
};
var eric = {
    name: 'eric',
    date: 1989
};
var currentYear = new Date().getFullYear();
function old(persons) {
    console.log(persons.name + " is " + (currentYear - persons.date) + " years old");
}
old(tomas);
old(matias);
old(eric);
