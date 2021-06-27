//EXAMPLE
//CRUD -> Create, Read, Update, delete
//CREATE
var people = [
    { name: "adam" },
    { name: 'Eve' },
    { name: 'Kein' },
    { name: "Abel" }
];
//add
people.push({ name: 'Seth' });
console.log(people);
people.unshift({ name: 'none' });
console.log(people);
//Read
//put on the DOM
renderPeople(people);
function renderPeople(people) {
    var html = people.map(function (person) { return "<p>" + person.name + "</p>"; }).join('');
    var html1 = '';
    people.forEach(function (person) {
        html1 += "<p>" + person.name + "</p>";
    });
    document.querySelector("#rootPeople").innerHTML = html;
}
