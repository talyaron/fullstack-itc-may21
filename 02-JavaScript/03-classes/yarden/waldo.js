// Selecting Waldo:
const waldo = document.querySelector('.waldo')
waldo.style.top = '295px'
waldo.style.left = '560px'

//Create class in case more characters will be added in the future:
class Character {

    constructor(characterId, imageUrl, width, height) {
        this.imageUrl = imageUrl
        this.width = width
        this.height = height

        this.whereIsWaldo = document.querySelector('where-is-waldo')
        this.createCaharacter
    }
        createCaharacter() {
            try {
                this.character = document.createElement('img')
                this.character.setAttribute ('src', this.imageUrl)
                
            } catch(e) {
                console.error(e)
            }
        }
}



// Movement:
window.addEventListener('keydown', (event) => {
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
    }
});

// Mouseover:
waldo.addEventListener('mouseover', (event) => {
    waldo.style.display = 'none'
    alert('Did you look for me?')
})
