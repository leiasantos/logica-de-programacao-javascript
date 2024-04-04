function pulaLinha () {
	document.write("<br>");
	document.write("<br>");

}

function mostra(frase) {
	document.write(frase);
	pulaLinha();
}


let vitorias = parseInt(prompt("Entre com o numero de vitorias."));
let empates = parseInt(prompt("Entre com o numero de empates."));


let pontos = (vitorias * 3) + empates;

mostra("Os pontos do seu time é " + pontos);

if (pontos > 28) {
	mostra("Seu time está melhor do qye o ano passado.");
}

if (pontos < 28) {
	mostra("Seu time está pior do que o ano passado.");

}

if (pontos == 28) {
	mostra("Seu time está igual ao ano passado.");
}