boxesNum();

function boxesNum() {
    try {
        const body = document.querySelector(`body`);
        let bodyHtmlCode = '';
        const howManyBoxes = Math.ceil(Math.random() * 10);
        for (let i = 1; i < howManyBoxes; i++) {
            bodyHtmlCode += `<div style='${boxSize() + boxColor()}'></div>`;
        }
        body.innerHTML = bodyHtmlCode;
    } catch (e) {
        return e;
    }
}

function boxSize() {
    const boxHeight = Math.ceil(Math.random() * 160) + 40;
    const boxWidth = Math.ceil(Math.random() * 160) + 40;
    return `height:${boxHeight}px; width:${boxWidth}px;`
}

function boxColor() {
    const boxColor = `rgb(${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)},${Math.ceil(Math.random()*255)})`;
    return `background-color:${boxColor};`
}