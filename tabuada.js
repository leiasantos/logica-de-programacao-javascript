function pulaLinha () {
	document.write("<br>");
	document.write("<br>");

}

function mostra(frase) {
	document.write(frase);
	pulaLinha();
}


let multiplicador = 1;

while(multiplicador <= 10){
	mostra(7 * multiplicador);
	multiplicador = multiplicador + 1;
}

mostra("FIM");