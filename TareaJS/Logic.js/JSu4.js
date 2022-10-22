let red = document.querySelector("#red");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let body = document.querySelector("#body");
let h3Counter = document.querySelector("h3Counter");


red.addEventListener("click",bodyRed);
green.addEventListener("click",bodyGreen);
blue.addEventListener("click",bodyBlue);

function bodyRed(){
    body.classList.toggle("colorRed")
}

function bodyGreen(){
    body.classList.toggle("colorGreen")
}

function bodyBlue(){
    body.classList.toggle("colorBlue")
}