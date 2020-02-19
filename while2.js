/*
Criar um algoritmo que realize a multiplicação de dois números maiores que zero SEM usar o operador de multiplicação (*)
*/

var user = require('readline-sync');

var num1 = user.questionInt("Insira o primeiro número: ");
var num2 = user.questionInt("Insira o segundo número: ");
var x = 1;

while(x < num2){
    num1 = num1 + num1
    x++
}

console.log(num1);