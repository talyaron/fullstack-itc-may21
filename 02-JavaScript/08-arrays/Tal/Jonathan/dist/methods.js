var x = [11, 33, '44', 43, 12];
var c = x.sort(function (a, b) { return a - b; });
var board = document.querySelector("#board");
var html = '';
var count = 0;
c.forEach(function (elem) {
    count++;
    html += "<p>" + count + " element = " + elem + "</p>";
});
board.innerHTML = html;
var Countries = [
    {
        name: 'Portugal',
        flag: 'red',
        yearOfIndep: 1990
    },
    {
        name: 'Brazil',
        flag: 'yellow',
        yearOfIndep: 1989
    },
    {
        name: 'Spain',
        flag: 'red',
        yearOfIndep: 2000
    },
    {
        name: 'Argentina',
        flag: 'blue',
        yearOfIndep: 1810
    },
    {
        name: 'China',
        flag: 'red',
        yearOfIndep: 2000
    }
];
console.log(Countries.filter(function (country) { return country.flag == "red"; }));
