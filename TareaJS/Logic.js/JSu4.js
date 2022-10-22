//Seleccion de botones por ID
let red = document.querySelector("#red");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let body = document.querySelector("#body");
let h3PublicCounter = document.getElementById("#h3PublicCounter");
let textArea = document.querySelector("#textArea4Count");
let textInput = "";


red.addEventListener("click",bodyRed);
green.addEventListener("click",bodyGreen);
blue.addEventListener("click",bodyBlue);
textArea.addEventListener("keyup",storeInput);

//Las funciones color agregan la clase del color correspondientes y eliminan
//el resto en caso de que esten agregadas

function bodyRed(){
    body.classList.toggle("colorRed")
    body.classList.remove("colorGreen")
    body.classList.remove("colorBlue")

}

function bodyGreen(){
    body.classList.toggle("colorGreen")
    body.classList.remove("colorRed")
    body.classList.remove("colorBlue")
}

function bodyBlue(){
    body.classList.toggle("colorBlue")
    body.classList.remove("colorGreen")
    body.classList.remove("colorRed")
}

function storeInput(){
    textInput = textArea.value
    h3PublicCounter = textInput.length
    console.log(` La cantidad de caracteres tipeados es ${h3PublicCounter}`)
}
