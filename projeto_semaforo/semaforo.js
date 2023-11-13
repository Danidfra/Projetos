const semaforo = document.querySelector("img")
const buttons = document.getElementById('buttons');

let colorIndex = 0;
let intervalId = null;


const change = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();
}
const nextIndex = () => {

    colorIndex = colorIndex < 2 ? ++colorIndex : 0;

    // if (colorIndex < 2) {
    //     colorIndex++;
    // }
    // else { colorIndex = 0 }
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnOn = {
    'red': () => { semaforo.setAttribute("src", "assets/vermelho.png") },
    'yellow': () => { semaforo.setAttribute("src", "assets/amarelo.png") },
    'green': () => { semaforo.setAttribute("src", "assets/verde.png") },
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}

function switchColor() {
    if (semaforo.getAttribute("src") == "assets/vermelho.png") {
        turnYellow();
    }
    else {
        turnRed();
    }
}

function turnAuto() {
    setInterval(switchColor, 1000)

}

buttons.addEventListener("click", change);
