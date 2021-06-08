const waldo = document.querySelector('.waldo')
waldo.style.top = '295px'
waldo.style.left = '560px'

const myForm = document.querySelector('.form')
myForm.onsubmit = function(event) {
    event.preventDefault()
    
    const submittedImage = myForm.elements['image'].value
    const submittedName = myForm.elements['name'].value
    const submittedX = myForm.elements['x'].value
    const submittedY = myForm.elements['y'].value

    console.log(submittedName);
    console.log(submittedImage);
    console.log(submittedX);
    console.log(submittedY);

    let odlaw = new Character (submittedName, submittedImage, {x:submittedX, y:submittedY})
    odlaw.createCaharacter()
    document.body.appendChild.character
    
    myForm.style.display = 'none'
    waldo.style.display='block'
}

//Create the character class:
class Character {
    constructor(characterId, imageUrl, startingPosition) {
        
        this.imageUrl = imageUrl
        this.characterId = characterId

        this.startingPosition = {}
        this.startingPosition.x = startingPosition.x;
        this.startingPosition.y = startingPosition.y;
        
        this.whereIsWaldo = document.querySelector('.waldo')
        this.createCaharacter = this.createCaharacter.bind(this)
    }
        createCaharacter() {

                this.character = document.createElement('img')
                this.character.setAttribute ('src', this.imageUrl)
                this.character.style.left = `${this.startingPosition.x}%`;
                this.character.style.top = `${this.startingPosition.y}%`;

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

