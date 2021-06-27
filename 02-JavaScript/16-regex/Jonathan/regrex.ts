const boardRoot:HTMLElement = document.querySelector('#board')


console.log('jokes:')
console.log(jokes)

function searchJokes(jokesArr: Array<any>): any {
    
    const validationReg:RegExp = /^A/gi;

    return  jokesArr.filter(jokes =>  validationReg.test(jokes.value) )

}


console.log('jokes starting with A:',searchJokes(jokes));



function searchJokesInput(text:string, jokesArr:Array<any>): Array<any>{

    const regrExp:string = `^${text}`; //regular expression comience con A

    const searchTermReg: RegExp = new RegExp(regrExp, 'i');

    return jokesArr.filter(jokes =>  searchTermReg.test(jokes.value))

}

function renderJokesInput(jokesInput:Array<any>){

    let html:string = "";
    let count:number = 0;

    jokesInput.forEach(joke => {
       html+= `<p><span>${count}- </span>${joke.value}</p>` 
       count++; 
    });

    boardRoot.innerHTML = html
}

function handlePera(event:any):void{
    
    event.preventDefault();

    const name = event.target.elements.name.value

    const jokesInput:Array<any> = searchJokesInput(name,jokes);

    renderJokesInput(jokesInput);


}