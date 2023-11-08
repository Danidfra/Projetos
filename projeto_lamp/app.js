const lamp = document.querySelector("img");
const btn_on = document.getElementById("on");
const btn_off = document.getElementById("off");

var lampCrashed = false

function lightCrashed() {
    lamp.setAttribute("src", "./assets/quebrada.jpg");
    lampCrashed = true;
}

function lightOn() {
    if (lampCrashed !== true) {
        lamp.setAttribute("src", "./assets/ligada.jpg");
    }
}

function lightOff() {
    if (lampCrashed !== true) {
        lamp.setAttribute("src", "./assets/desligada.jpg");
    }
}

lamp.addEventListener("dblclick", lightCrashed);

btn_on.addEventListener("click", lightOn);

btn_off.addEventListener("click", lightOff);

lamp.addEventListener("mouseover", lightOn);
lamp.addEventListener("mouseleave", lightOff);

// var click = false;


function change() {
    if (lampCrashed !== true) {

        if (lamp.getAttribute("src") == "./assets/ligada.jpg") {
            lightOff();
        }
        else { lightOn() }
    }
}


lamp.addEventListener("click", change)

