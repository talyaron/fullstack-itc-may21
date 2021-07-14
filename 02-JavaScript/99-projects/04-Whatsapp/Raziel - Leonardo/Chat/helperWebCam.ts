//Function to open the modal

// Get the modal
const modal: HTMLElement = document.getElementById("modal");

// Get the button that opens the modal
const button: HTMLElement = document.getElementById("buttonCam");

// Get the <span> element that closes the modal
const closeModal: HTMLElement = document.getElementById("close");

// When the user clicks the button, open the modal 
button.onclick = function () {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
closeModal.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

//Functions to open the camera

const pictureLogo = document.querySelector('#buttonCam');

pictureLogo.addEventListener('click', startup);  //YS: Good, why didnt you make all eventlisteners like that instead of object notation? 

const width = 320; // We will scale the photo width to this
let height = 0; // This will be computed based on the input stream

let streaming = false;

let video = null;
let canvas = null;
let photo = null;
let startbutton = null;

function startup() {  //YS: EXCELLENT WORK! 
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');

    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    })
        .then(function (stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function (err) {
            console.log("An error occurred: " + err);
        });

    video.addEventListener('canplay', function () {
        if (!streaming) {
            height = video.videoHeight / (video.videoWidth / width);

            if (isNaN(height)) {
                height = width / (4 / 3);
            }

            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true;
        }
    }, false);

    startbutton.addEventListener('click', function (ev) {
        takepicture();
        ev.preventDefault();
    }, false);

    clearphoto();
}


function clearphoto() {
    const context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
}

function takepicture() {
    const context = canvas.getContext('2d');
    if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);

        const data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
        sendPictureInsideRender(data);
        modal.style.display = "none";
    } else {
        clearphoto();
    }
}

function sendPictureInsideRender(data): void {
    try {
        let chatArea = document.querySelector('.chat-box');
        let temp = `
                
        <div class="chat-r">
            <div class="sp"></div>
            <div class="mess mess-r">
                <p>
                    <img id="photo" src="${data}" alt="">
                </p>
            </div>
        </div>
    </div>`
        chatArea.insertAdjacentHTML("beforeend", temp);
    } catch (error) {
        console.error(error);
    };
};