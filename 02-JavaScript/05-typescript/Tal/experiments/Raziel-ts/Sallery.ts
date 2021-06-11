

var month:number=12;

function Avrg(x:number):string{
var avrgMonth=x/month;
var avrgString= avrgMonth.toString();
return `Your avrage for month is:${avrgString} `
}

console.log(Avrg(156000));
let root:HTMLElement=document.querySelector('#root');
console.dir(root);

var addToDom=(htmlElement:HTMLElement):void=>{
   let a=1 ,b=4;
    htmlElement.innerText=`add ${a}+${b}=5`
}
addToDom(root);