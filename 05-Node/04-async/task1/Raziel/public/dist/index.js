function getInfo() {
    fetch('/getData')
        .then(function (r) { return r.json(); })
        .then(function (drinks) {
        console.log(drinks);
        renderDrinks(drinks);
    });
}
function renderDrinks(data) {
    console.log(data);
    var html = '';
    data.forEach(function (drinks) {
        html += "<p>" + drinks.name + "</p> <img src=\"" + drinks.src + "\">";
    });
    document.getElementById('root').innerHTML = html;
}
getInfo();
function then(arg0) {
    throw new Error("Function not implemented.");
}
