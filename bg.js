const body = document.querySelector("body");

const IMG_NUMBER = 5;

function paintImg(imgNumber) {
    const image = new Image();
    image.src = `/img/${imgNumber + 1}.jpg`;
    image.classList.add("bgimg");
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImg(randomNumber);
}

init();