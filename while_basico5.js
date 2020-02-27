/*
Faça um programa que calcule a potência (potenciação) de um número. 
Para isso ele deve receber dois números de entrada: o primeiro número é a base da potência, o segundo número será a potência.

EX: usuário inseriu 2 para base e 4 para potência.
O programa imprime : 
16
Lembrando: 24 = 2*2*2*2
*/

var user = require('readline-sync');
var num1 = user.questionInt("Insira um número para base: ");
var num2 = user.questionInt("Insira um número para potência: ");
var res = num1;
var x = 1;

while(x < num2){
    num1 = num1 * res;
    x++
}

console.log(num1);

