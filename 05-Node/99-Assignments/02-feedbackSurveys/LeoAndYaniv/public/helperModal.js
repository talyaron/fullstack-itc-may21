// Get the modal
const modalUpload = document.getElementById("modalQuestion");

// Get the button that opens the modal
const buttonCreate = document.getElementById("buttonCreate");

// Get the <span> element that closes the modal
const closeUpload = document.getElementById("closeModal");

// When the user clicks the button, open the modal
buttonCreate.addEventListener('click', openModal(null));

function openModal(qUuid,qContent) {
    try {
        const instructionElement = document.querySelector('#create-or-edit');
        const submitBtn = document.querySelector('#submit-question');
        
        if (qUuid) {
            const modalContent = document.querySelector('.modal-content');
            modalContent.id = qUuid;
            const questionContent = document.querySelector('#question-content');
            questionContent.value = qContent;

            instructionElement.innerText = 'Edit the question';
            submitBtn.value = 'Edit question';
        } else {
            instructionElement.innerText = 'Create a new question';
            submitBtn.value = 'Add question';
        }

        modalUpload.style.display = "block";
        modalUpload.classList.add("showModal");
    } catch (error) {
        console.error(error);
    };
};

// When the user clicks on <span> (x), close the modal
closeUpload.addEventListener('click', closeModal);

function closeModal() {
    try {
        modalUpload.style.display = "none";
    } catch (error) {
        console.error(error);
    };
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    try {
        if (event.target === modalUpload) {
            modalUpload.style.display = "none";
        }
    } catch (error) {
        console.error(error);
    };
};