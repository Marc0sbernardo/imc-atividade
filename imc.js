
function calcularIMC(){

//Entrada

let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;

if (peso === "" || altura ==="") {
    document.getElementById("resultado").innerText = "Preencha todos os campos!";
    return;
}

//Processamento

let imc = peso / (altura * altura);

let classificacao = "";

//Saída

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc < 24.9) {
    classificacao = "Peso normal";
} else if (imc < 29.9) {
    classificacao = "Sobrepeso";
} else if ( imc < 34.9) {
    classificacao = "Obesidade grau 1";
} else if (imc < 39.9) {
    classificacao = "Obesidade grau 2";
}

document.getElementById("resultado").innerText = "IMC:" + imc.toFixed(2) + " _ " + classificacao;
}