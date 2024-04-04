

let segredo = Math.round(Math.random() * 10;
let input = document.querySelector("input");

function verifica() {


   if(input.value == segredo){
	alert("Você ACERTOU!!!");
}else {
	alert("Você ERROU!!");
    }

    input.value = "";
    input.focus();
}

let button = document.querySelector("button");
button.onclick = verifica;