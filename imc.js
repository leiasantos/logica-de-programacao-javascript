
/*
function pulaLinha () {
	document.write("<br>");
	document.write("<br>");

}

function mostra(frase) {
	document.write(frase);
	pulaLinha();
}

function calculaImc(altura, peso) {
	//let imc = peso / (altura * altura);
	return peso / (altura * altura);
}

let imcLeia = calculaImc(1.59,84);
let imcNatalia = calculaImc(1.69,63);

mostra(imcLeia);
mostra(imcNatalia);

*/


function pulaLinha () {
	document.write("<br>");
	document.write("<br>");

}

function mostra(frase) {
	document.write(frase);
	pulaLinha();
}

function calculaImc(altura, peso) {
	//let imc = peso / (altura * altura);
	return peso / (altura * altura);
}

let nome = prompt("Informe o seu nome");
let alturaInformada = prompt(nome + ", informe sua altura");
let pesoInformado = prompt(nome + ", informe seu peso");

let imc = calculaImc(alturaInformada, pesoInformado);

document.write(nome + ", o seu IMC é " + imc)


if (imc < 18.5) {
   mostra("Você está abaixo do recomendado.");
}

if (imc >= 18.5) {
	if (imc <= 35) {
		mostra("Seu Imc está de acordo com o recomendado");
	}
}

if (imc > 35) {
   mostra("Você está acima do recomendado.");   
}

