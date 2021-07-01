//destructors
var person = {
    name2: "Dan",
    street: 'Herzel'
};
var cities = ['Tel-Aviv', 'Jerusalem', 'Beer-Sheva'];
// const personName = person.name;
// const personStreet = person.street;
var name2 = person.name2, street = person.street;
console.log(name2, street);
var firstCity = cities[0], secondCity = cities[1];
console.log(firstCity, secondCity);
var residents = [{ name: 'aa', street: 'Hanevel' }, { name: 'bb', street: 'blo' }, { name: 'cc', street: 'Bla' }];
var rs1 = residents[0], rs2 = residents[1], rs3 = residents[2];
function addToResidents(_a) {
    var name = _a.name, street = _a.street;
    residents.push({ name: name, street: street });
}
//create a function which get height, width, deepth (all of type number). the function returns the qubick volume
//which equals to height * width * deepth
//do it with destucotr
addToResidents({ name: "Yossi", street: "Borchov" });
console.log(residents);
