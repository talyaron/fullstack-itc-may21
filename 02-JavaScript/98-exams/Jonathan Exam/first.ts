const boardRoot = <HTMLElement>document.querySelector('#container__board')
const form = <HTMLElement>document.getElementById('form')

class Color {
    color: string;
    colorID: string;

    constructor(color: string) {
        this.color = color
        this.colorID = "id" + Math.random().toString(16).slice(2);
    }
}

class ColorList {
    colorlist: Array<Color> = []

    addColor(colorItem: Color) {

        try {

            let isFound = this.colorlist.some(color => color.color == colorItem.color)

            if (isFound) throw new Error("You choice that color")

            this.colorlist.push(colorItem)
            this.setStorage()
            this.renderColorOnDom(this.colorlist)

        } catch (e) {
            alert(e)
        }
    }

    addBoxesList(currentBox: Array<Color>) {

        try {
            currentBox.forEach(person => {
                const { color } = person
                const personprev = new Color(color)
                this.colorlist.push(personprev)
            });
            this.renderColorOnDom(this.colorlist)
        } catch (e) {
            alert(e)
        }
    }


    deleteColor(colorId: string) {

        try {

            const index = this.colorlist.findIndex(color => color.colorID === colorId)
            this.colorlist.splice(index, 1)
            this.setStorage()
            this.renderColorOnDom(this.colorlist)
        } catch (e) {
            alert(e)
        }

    }

    setStorage() {
        localStorage.setItem("currentBoxes", JSON.stringify(this.colorlist))
    }

    renderColorOnDom(arrayToRender: Array<Color>) {

        try {


            let html: string = '';

            const size = 200;

            if (!boardRoot) throw new Error("It couldnt possible to show the boxes")

            arrayToRender.forEach(colorElem => {

                const { color, colorID } = colorElem

                html += `<div class="container__board__color-item">
                        <div style="background-color:${color}; width:${size}px; height:${size}px" class="container__board__color-item--square"
                        onclick='nextPage("${colorID}","${color}")'>
                        </div> 
                        <i class="fa fa-trash container__board__color-item--trash" onclick='handleDelete("${colorID}")' title="Delete Item"></i> 
                             
                    </div>`

            });


            boardRoot.innerHTML = html;
        } catch (e) {
            alert(e)
        }
    }
}

const colorlist = new ColorList()

const currentBox = JSON.parse(localStorage.getItem("currentBoxes"))

if (currentBox !== null) {
    colorlist.addBoxesList(currentBox)
}


form.addEventListener('submit', handleSubmit)

function handleSubmit(ev: any): void {

    ev.preventDefault();
    try {

        const color = ev.target.elements.color.value;

        if (color === null) throw new Error('Is not possible to grab the color')

        const inputColor = new Color(color)

        colorlist.addColor(inputColor)
        
    } catch (e) {
        alert(e)
    }

    ev.target.reset()
}


function handleDelete(id: string) {
    colorlist.deleteColor(id)
}


function nextPage(id: string, color: string) {
    try {

        const gridColor = [id, color]
        localStorage.setItem("arrayColor", JSON.stringify(gridColor))
        window.location.href = `second.html?id=${id}`
        if (!window.location.href) throw new Error("The page does not exist");
    } catch (e) {
        alert(e)
    }
}



