



function Avrg(x:number):string{
var avrgMonth=x/12;
var avrgString= avrgMonth.toString();
return `Your avrage for month is:${avrgString} `
}

console.log(Avrg(156000));