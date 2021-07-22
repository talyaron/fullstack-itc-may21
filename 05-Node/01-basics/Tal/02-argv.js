const argv = require( 'argv' );
const {options} = argv.option({
    name: 'option',
    short: 'o',
    type: 'string',
    description: 'Defines an option for your script',
    example: "'script --opiton=value' or 'script -o value'"
}).run();

const {option} = options;

if(option === 'w'){
    writeName('Shlomo');
}

if( option === 'i'){
    initilize();
}

console.log(options)

//print my name
function writeName(name){
    console.log(name);
}

//write "I am initlizing"
function initilize(){
    console.log("I am initlizing")
}




