/*
Escreva um programa para ler o número de lados de um polígono regular e a medida do lado (em cm). Calcular e imprimir o seguinte: 
− Se o número de lados for igual a 3 escrever TRI NGULO e o valor da área 
− Se o número de lados for igual a 4 escrever QUADRADO e o valor da sua área. 
− Se o número de lados for igual a 5 escrever PENTÁGONO. 
*/


var user = require('readline-sync');
var n = user.questionInt("Insira o número de lados de um polígono  (Entre 3 e 5): ");
var l = user.questionFloat("Insira o tamanho do lado: ");

if(n == 3){
    console.log("É um triangulo.");
    //calcular area do triangulo
    console.log("A área é: ");
}else(n == 4){
    console.log("É um quadrado.");
    //calcular area do quadrado
    console.log("A área é: ");
}else if(n == 5){
    console,log("É um pentagono.");
}else{
    console.log("Número inválido.");
}