setInterval(function(){boxesNum();}, 5000);

function boxesNum() {
    try {
        const body = document.querySelector(`body`);
        if (body === undefinded) {
            throw new Error(`What kind of a HTML document doe'st have a body?!`);
        }
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

// I don't really see which errors can occure here..