var x = 32;
function goBack() {
    window.history.back();
}
var urlSearchParams = new URLSearchParams(window.location.search);
var params = Object.fromEntries(urlSearchParams.entries());
console.log(params);
