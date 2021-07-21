const argv = require('argv')

function writeName(name){
    console.log(name)
}

function initialize(){
    console.log('I am good')
}

console.log(process.argv)

writeName('Shlomo')
initialize()