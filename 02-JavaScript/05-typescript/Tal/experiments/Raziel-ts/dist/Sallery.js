var month = 12;
function Avrg(x) {
    var avrgMonth = x / month;
    var avrgString = avrgMonth.toString();
    return "Your avrage for month is:" + avrgString + " ";
}
console.log(Avrg(156000));
