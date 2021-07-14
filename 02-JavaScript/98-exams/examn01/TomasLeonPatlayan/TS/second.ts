const allColors = JSON.parse(localStorage.getItem("localSave"));
const IdColors=localStorage.getItem("saveColors");
const btnBack = document.querySelector('.btn')
const showColors:HTMLElement =document.querySelector('.show2');
btnBack.addEventListener('click',redirectMainPage);



const colorsFilter =allColors.filter((elements)=> elements.id === IdColors);

const rendeColors = ()=> {
    let html:string = '';

    colorsFilter.forEach((elements)=> {
        html+= `<div class=" container group-colors" style="background-color: ${elements.color}">
        
        </div>
        <div class=" container group-colors" style="background-color: ${elements.color}">
        
        </div>
        <div class=" container group-colors" style="background-color: ${elements.color}">
        
        </div>
        <div class=" container group-colors" style="background-color: ${elements.color}">
        
        </div>

        <div class=" container group-colors" style="background-color: ${elements.color}">
        
        </div>
        <div class=" container group-colors" style="background-color: ${elements.color}">
        
        </div>
        <div class=" container group-colors" style="background-color: ${elements.color}">
        
        </div>
        <div class=" container group-colors" style="background-color: ${elements.color}">
        
        </div>
        <div class=" container group-colors" style="background-color: ${elements.color}">
        
        </div>
        <div class=" container group-colors" style="background-color: ${elements.color}">
        
        </div>
        <div class=" container group-colors" style="background-color: ${elements.color}">
        
        </div>
        <div class=" container group-colors" style="background-color: ${elements.color}">
        
        </div>
        <div class=" container group-colors" style="background-color: ${elements.color}">
        
        </div>
        <div class=" container group-colors" style="background-color: ${elements.color}">
        
        </div>
        <div class=" container group-colors" style="background-color: ${elements.color}">
        
        </div>
        <div class=" container group-colors" style="background-color: ${elements.color}">
        
        </div>
        
        
        `
        
    });

showColors.innerHTML = html;
}





function redirectMainPage (){
window.location.href = 'index.html'
}

rendeColors();