var persons = [
    { name: 'Raziel',
        id: 10 },
    { name: 'Danni',
        id: 11 },
    { name: 'HANA',
        id: 12 },
    { name: 'Raziel',
        id: 13 }
];
console.log(persons.filter(function (person) { return person.name == 'HANA'; }));
var X = persons.filter(function (person) { return person.name !== "Danni"; }).splice(0); //remove person+array
console.log(X);
