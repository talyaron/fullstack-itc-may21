function welcomeResidnet() {
    var count = 0;
    var residents = [];
    function _welcomeResidnet(name) {
        count++;
        if (name === 'l') {
            return residents;
        }
        residents.push(name);
        return "Welcome " + name + ", you are resident number " + count;
    }
    return _welcomeResidnet;
}
var welcomeA = welcomeResidnet();
console.log(welcomeA('Moshe'));
console.log(welcomeA('Yonatan'));
console.log(welcomeA('Mor'));
console.log(welcomeA('l'));
var welcomeB = welcomeResidnet();
console.log(welcomeB('Joni'));
console.log(welcomeB('Yoni'));
console.log(welcomeB('Joathan'));
console.log(welcomeB('l'));
