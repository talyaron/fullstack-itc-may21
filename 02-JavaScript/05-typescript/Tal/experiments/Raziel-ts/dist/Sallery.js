var month = 12;
function Avrg(x) {
    var avrgMonth = x / month;
    var avrgString = avrgMonth.toString();
    return "Your avrage for month is:" + avrgString + " ";
}
console.log(Avrg(156000));
var root = document.querySelector('#root');
console.dir(root);
var addToDom = function (htmlElement) {
    var a = 1, b = 4;
    htmlElement.innerText = "add " + a + "+" + b + "=5";
};
addToDom(root);
