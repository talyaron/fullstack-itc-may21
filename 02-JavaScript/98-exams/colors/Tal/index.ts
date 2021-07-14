class Color {
    color: string;
    id: string;

    constructor(color: string) {
        this.color = color;
        this.id = Math.random().toString(16).slice(2);
    }
}

class Colors {
    array: Array<Color> = [];

    getFromLocalStorage() {
        try {
            const colors = JSON.parse(localStorage.getItem('colorsArray'));
            if (!Array.isArray(colors)) throw new Error('localstorage colorsArray was not an array');

            this.array = colors;

            const rootColor = document.querySelector('#rootColor');
            this.renderColors(rootColor);
        } catch (e) {
            console.error(e)
        }

    }

    addColor(color: string) {
        const newColor = new Color(color)
        this.array.unshift(newColor);

        localStorage.setItem('colorsArray', JSON.stringify(this.array))
    }
    deleteColor(colorId:string){
        this.array = this.array.filter(color=>color.id !== colorId);
        const rootColor = document.querySelector('#rootColor');
        this.renderColors(rootColor);
        localStorage.setItem('colorsArray',JSON.stringify(this.array))
    }

    renderColors(rootColor: any): void {
        const html: string = this.array.map(color => {
            let clearColor = color.color.replace('#', '')
            return `<div class='buttonColors__box'>
            
                <a href='colors.html?color=${clearColor}' style='background: ${color.color}'></a>
                <img src='https://i.gadgets360cdn.com/large/delete_apps_thumb_1532676846539.jpg' onclick='handleDelete("${color.id}")'/>
            </div>`
        }).join('')
      
        rootColor.innerHTML = html;

    }
}

const colors = new Colors();
colors.getFromLocalStorage()

function handleColor(ev: any): void {
    ev.preventDefault();
    console.log('invoked onchange')
    const color: string = ev.target.elements.color.value;

    colors.addColor(color);
    console.log(colors)
    const rootColor = document.querySelector('#rootColor');
    colors.renderColors(rootColor);
}

function handleDelete(colorId:string){
    colors.deleteColor(colorId)
}