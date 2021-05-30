boxesNum();

function boxesNum() {
    try {
        const body = document.querySelector(`body`);
        let bodyHtmlCode = '';
        const howManyBoxes = Math.ceil(Math.random() * 10);
        for (let i = 1; i < howManyBoxes; i++) {
            bodyHtmlCode += `<div style='${boxSize() + boxColor() + boxPosition()}'></div>`;
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
    const boxHeight = `${Math.ceil(Math.random() * 100)}%`;
    const boxWidth = `${Math.ceil(Math.random() * 100)}%`;
    return `background-color:${boxPosition};`
}