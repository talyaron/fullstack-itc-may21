let x:Array<any> = [11,33,'44',43,12]

let c:Array<any> = x.sort((a,b)=> a-b)

const board:HTMLElement = document.querySelector("#board")

let html:string = ''
let count:number = 0;
c.forEach(elem=> {
    count++;
    html+= `<p>${count} element = ${elem}</p>`});

board.innerHTML = html;


interface Country{
    name:string,
    flag:string,
    yearOfIndep:number
}

let Countries:Array<Country> = [
    {
        name:'Portugal',
        flag:'red',
        yearOfIndep: 1990
    },
    {
        name:'Brazil',
        flag:'yellow',
        yearOfIndep: 1989
    }
    ,
    {
        name:'Spain',
        flag:'red',
        yearOfIndep: 2000
    },
    {
        name:'Argentina',
        flag:'blue',
        yearOfIndep: 1810
    },
    {
        name:'China',
        flag:'red',
        yearOfIndep: 2000
    }

 ]

console.log(Countries.filter(country=>country.flag == "red"));

