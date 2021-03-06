const arrayToGrid: Array<string> = JSON.parse(localStorage.getItem("arrayColor"))
const gridRoot = <HTMLElement>document.querySelector('.container__box')
const btnBack = <HTMLElement>document.querySelector('.container__button--sumbit')


    
function renderSquareColor(color: String) {

        try {

            let html: string = ''

            let count = 36;

            let size = 150;

            if(!gridRoot) throw new Error('Cant get the grid')

            for (let i = 0; i < count; i++) {
                html += `<div style="background-color:${color}; width:${size}px; height:${size}px" 
                class="container__box--item">
            </div>`
            }

            gridRoot.innerHTML = html
        } catch (e) {
            alert(e)
        }
    }


const [id, color] = arrayToGrid

renderSquareColor(color)


btnBack.addEventListener('click', backPage)

function backPage() {
    try {
        window.location.href = "first.html";
        if (!window.location.href) throw new Error("The page does not exist");
    } catch (e) {
        alert(e)
    }
}

