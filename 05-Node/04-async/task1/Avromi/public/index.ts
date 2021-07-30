
async function getData(){

 const r = await fetch('/');
 console.log('waited');
 const cocktails = await r.json();
 console.log(cocktails);
render(cocktails)

}


    getData();


function render(data){

    let html = '';
    data.forEach(data=>{
        html += `<h4>${data.strDrink}</h4>
        <img src="${data.strDrinkThumb}">`
    })
    document.querySelector(`.coctails`).innerHTML = html
   
}