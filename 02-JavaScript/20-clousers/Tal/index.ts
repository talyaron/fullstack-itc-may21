

function welcomeResidnet() {
    let count = 0;
    const residents:Array<string> = [];
    function _welcomeResidnet(name: string) {
       
       
        count++;
        
        if(name === 'l'){
            return residents
        }
        residents.push(name);
        return `Welcome ${name}, you are resident number ${count}`;
    }
    return _welcomeResidnet
}


const welcomeA = welcomeResidnet();
console.log(welcomeA('Moshe'));
console.log(welcomeA('Yonatan'));
console.log(welcomeA('Mor'));
console.log(welcomeA('l'))

const welcomeB = welcomeResidnet();
console.log(welcomeB('Joni'));
console.log(welcomeB('Yoni'));
console.log(welcomeB('Joathan'));
console.log(welcomeB('l'))

