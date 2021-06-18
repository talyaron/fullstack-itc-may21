var x = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thuersday', 'Friday', 'Saturday'];
var b = x.sort();
console.log(b);
var c = x.sort(function (a, b) { return a - b; });
console.log(c);
var fruitcity = [
    {
        city: 'Haifa',
        NumberOffruits: 5
    },
    {
        city: 'Beer Sheva',
        NumberOffruits: 3
    },
    {
        city: 'Afula',
        NumberOffruits: 1
    }
];
console.log(fruitcity.sort(function (a, b) { return b.NumberOffruits - a.NumberOffruits; }));
console.log(fruitcity.filter(function (fruitcity) { return fruitcity.city >= 'H  '; }));
