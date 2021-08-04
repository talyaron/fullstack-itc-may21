// Brightness modal:
const settingsButton = document.querySelector('.fa-cog')
const settingsModal = document.querySelector('.settings-modal')
const changeModeButton = document.querySelector('.fa-adjust')
const bodyElement = document.querySelector('body')

settingsButton.addEventListener('click', () => {
    settingsModal.classList.remove('hide')
})

changeModeButton.addEventListener('click', () => {
    if (bodyElement.style.backgroundColor !== "white") {
        bodyElement.style.backgroundColor = "white"
        settingsModal.classList.add('hide')
    } else {
        bodyElement.style.backgroundColor = "rgba(17, 17, 18, 0.92)"
        settingsModal.classList.add('hide')
    }
})

// Add-task modal:
const plusButton = document.querySelector('.button-wrapper')
const addTaskModal = document.querySelector('.add-task-modal')

plusButton.addEventListener('click', () => {
    addTaskModal.classList.remove('hide')
})