// setInterval(function(){boxesNum1();}, 5000);
setInterval(function(){boxesNum2();}, 5000);


// approach 1
function boxesNum1() {
    try {
        const body = document.querySelector(`body`);
        // debugger;
        // if (body === undefinded) { // not really possible - if not in HTML - the <body> tag is added automatically by the browser
        //     throw new Error(`What kind of a HTML document doe'st have a body?!`);
        // }
        const howManyBoxes = Math.ceil(Math.random() * 10);
        let bodyHtmlCode = `<div class='container'><h1>Number of boxes: ${howManyBoxes}</h1></div>`;
        for (let i = 1; i <= howManyBoxes; i++) {
            bodyHtmlCode += `<div style='${boxSize() + boxColor() + boxPosition()}'><p>${i}</p></div>`;
        }
        body.innerHTML = bodyHtmlCode;
    } catch (e) {
        return e;
    }
}

function boxSize() {
    const boxHeight = `${Math.ceil(Math.random() * 160) + 40}px`;
    const boxWidth = `${Math.ceil(Math.random() * 160) + 40}px`;
    return `height:${boxHeight}; width:${boxWidth};`
}

function boxColor() {
    const boxBg = `rgb(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`;
    return `background-color:${boxBg};`
}

function boxPosition() {
    const boxTop = `${Math.ceil(Math.random() * 90)}vh`;
    const boxLeft = `${Math.ceil(Math.random() * 90)}vw`;
    return `top:${boxTop};left:${boxLeft};`
}

// approach 2
function boxesNum2() {
    try {
        const body = document.querySelector(`body`);
        const howManyBoxes = Math.ceil(Math.random() * 10);
        body.innerHTML = `<div class='container'><h1>Number of boxes: ${howManyBoxes}</h1></div>`;
        let newBox;
        for (let i = 1; i <= howManyBoxes; i++) {
            newBox = document.createElement(`div`);
            newBox.setAttribute(`id`,`box${i}`);
            newBox.style.height = boxHeigt2();
            newBox.style.width = boxWidth2();
            newBox.style.backgroundColor = boxColor2();
            newBox.style.top = boxTop2();
            newBox.style.left = boxLeft2();
            newBox.innerHTML = `<p>${i}</p>`;
            body.appendChild(newBox);
        }
    } catch (e) {
        return e;
    }
}

function boxHeigt2() {
    const boxHeight = `${Math.ceil(Math.random() * 160) + 40}px`;
    return boxHeight;
}

function boxWidth2() {
    const boxWidth = `${Math.ceil(Math.random() * 160) + 40}px`;
    return boxWidth;
}

function boxColor2() {
    const boxBg = `rgb(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`;
    return boxBg;
}

function boxTop2() {
    const boxTop = `${Math.ceil(Math.random() * 90)}vh`;
    return boxTop;
}

function boxLeft2() {
    const boxLeft = `${Math.ceil(Math.random() * 90)}vw`;
    return boxLeft;
}

// I don't really see which errors can occure here..