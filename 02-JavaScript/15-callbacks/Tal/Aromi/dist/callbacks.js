var q = 3;
var customers = [
    { name: "abe", phone: 123 },
    { name: "abe", phone: 456 },
    { name: "same", phone: 789 },
    { name: "mike", phone: 124 },
    { name: "jim", phone: 321 },
];
var filtered = customers.filter(function (value) {
    return value.name !== "abe";
});
var mikeOrJim = customers.filter(function (value) {
    return value.name !== "mike" && value.name !== "jim";
});
var samsPhone = customers.find(function (_a) {
    var name = _a.name;
    return name == 'sam';
});
console.log(filtered);
console.log(mikeOrJim);
console.log(samsPhone);
//  customers.forEach()
