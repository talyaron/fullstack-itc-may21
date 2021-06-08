// Selecting Waldo:
const waldo = document.querySelector('.waldo')
waldo.style.top = '295px'
waldo.style.left = '560px'

//Make form disappear, Waldo appear on clicking submit:
const form = document.querySelector('.form')
const submitButton = document.querySelector('.form__input--submit')
myForm.addEventListener('click', event => {
    form.style.display = 'none'
    waldo.style.hidden = 'false'
})

//Create the character class:
class Character {

    constructor(characterId, imageUrl, startingPosition) {
        
        this.imageUrl = imageUrl
        this.characterId = characterId

        this.startingPosition = {}
        this.startingPosition.x = startingPosition.x;
        this.startingPosition.y = startingPosition.y;
        
        this.whereIsWaldo = document.querySelector('.waldo')
        this.createCaharacter
    }
        createCaharacter() {
            try {
                if(!character) throw new Error("No Character")

                this.character = document.createElement('img')
                this.character.setAttribute ('src', this.imageUrl)
                
            } catch(e) {
                console.error(e)
            }
        }
}


// Movement:
window.addEventListener('keydown', (event) => {
    try {
        
        const allowedKeys = ['ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft', 'w', 's', 'd', 'a']
        
        if (!event.key in allowedKeys) throw new Error('Not a valid key!')
        
        let positionChange = 5     
        switch (event.key) {
            case 'ArrowUp': waldo.style.top = `${parseInt(waldo.style.top) - positionChange}px`
                break
            case 'ArrowDown': waldo.style.top = `${parseInt(waldo.style.top) + positionChange}px`
                break
            case 'ArrowRight': waldo.style.left = `${parseInt(waldo.style.left) + positionChange}px`
                break
            case 'ArrowLeft': waldo.style.left = `${parseInt(waldo.style.left) - positionChange}px`
                break
            case 'w': waldo.style.top = `${parseInt(waldo.style.top) - positionChange}px`
            break
            case 's': waldo.style.top = `${parseInt(waldo.style.top) + positionChange}px`
                break
            case 'd': waldo.style.left = `${parseInt(waldo.style.left) + positionChange}px`
                break
            case 'a': waldo.style.left = `${parseInt(waldo.style.left) - positionChange}px`
                break }
    } catch(e) {
        console.error(e)
    }
    });

// Mouseover:
//  When clicked, user gets control of the character ?

function handleSubmit(event) {
    event.preventDefault()

}