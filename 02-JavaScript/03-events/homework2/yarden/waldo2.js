const waldo = document.querySelector('.waldo')
waldo.style.display = 'none'

//Create the character class:
class Character {
    constructor(characterId, imageUrl, startingPosition) {
        try {
            if (imageUrl === null) throw new Error ('No image!')
    
        this.imageUrl = imageUrl
        this.characterId = characterId

        this.startingPosition = {}
        this.startingPosition.x = startingPosition.x;
        this.startingPosition.y = startingPosition.y;
        this.whereIsWaldo = document.querySelector('.waldo')
        // this.createCharacter = this.createCharacter.bind(this)

    } catch (e) {
        console.error(e)
    }

    }
        createCharacter() {

                const character = document.createElement('img')
                character.setAttribute ('src', this.imageUrl)
                character.style.left = `${this.startingPosition.x}px`;
                character.style.top = `${this.startingPosition.y}px`;
                    return character
        }
}

// Movement:
window.addEventListener('keyup', (ev) => {
    
    try {
        if (Character === null) throw new Error ('No characters!')

        let positionChange = 5     
        switch (ev.key) {
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

            } catch (error) {
        
            }

    });

//Func for form submission:

const myForm = document.querySelector('.form')
myForm.onsubmit = function(event) {
    try {
        if (myForm === null) throw new Error ('No form!')
    
    event.preventDefault()
    const submittedImage = myForm.elements['image'].value
    const submittedName = myForm.elements['name'].value
    const submittedX = myForm.elements['x'].value
    const submittedY = myForm.elements['y'].value
    // Log user input to console:
    console.log(submittedName);
    console.log(submittedImage);
    console.log(submittedX);
    console.log(submittedY);
    // Create character 2 (Odlaw):
    const board = document.querySelector('.board')
    let odlaw = new Character (submittedName, submittedImage, {x:submittedX, y:submittedY})
    
    odlaw.createCharacter()
    board.appendChild(odlaw.createCharacter()) 
    console.log(odlaw);   

    myForm.style.display = 'none'
    waldo.style.display = 'block'
    waldo.style.top = '295px'
    waldo.style.left = '560px'

} catch (error) {
        
}

}