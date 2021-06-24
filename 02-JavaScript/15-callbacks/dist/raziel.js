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
