const generatePosition = () => {
    const divPosition = `transform: translate(${Math.ceil(Math.random() * 1000)}px, ${Math.ceil(Math.random() * 80)}px);`
    return divPosition
}


const moveBox = document.querySelector('.moveBox')

moveBox.addEventListener('click', function() {
    console.log(moveBox)
})
