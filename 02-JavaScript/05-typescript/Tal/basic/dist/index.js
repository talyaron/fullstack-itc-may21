var x = 'a';
x = 'by';
var arr = [1, 2, 3, 'a', 4];
console.log(x);
var add = function (a, b) { return a + b; };
var z = {
    a: 1,
    b: 2
};
var w = {
    a: 45,
    b: 100
};
console.log(add(z.a, z.b));
var root = document.querySelector('#root');
console.dir(root);
var addToDOM = function (htmlElement, adds) {
    htmlElement.innerText = "add " + adds.a + " + " + adds.b + " = " + add(adds.a, adds.b);
};
addToDOM(root, w);
var getDayInYear = function (date) {
    var now = date;
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    return +day;
};
