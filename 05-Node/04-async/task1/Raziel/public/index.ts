 interface drinks{
     name: string;
     scr: string;
 }
 
 
 
 function getInfo(){
    fetch('/getData')
    .then(r=>r.json())
    .then(drinks=>{
        console.log(drinks);
       
        renderDrinks(drinks);
})
}



function renderDrinks(data){
    console.log(data)
    let html = '';
    data.forEach(drinks=>{
        html += `<p>${drinks.name}</p> <img src="${drinks.src}">`
    })

    document.getElementById('root').innerHTML = html;
}

getInfo();

function then(arg0: (drinks: any) => void) {
    throw new Error("Function not implemented.");
}

