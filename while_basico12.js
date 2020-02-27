/*
Fazer um algoritmo que recebe 15 números de entrada e calcule a média dos números fornecidos.
*/


var user = require('readline-sync');
var num = user.questionInt("Digite um número: ");
var y = num;
x=0;

while(x < 14){
    num = user.questionInt("Digite um número: ");
    y = y + num;
    x++;   
}

var result = y / 15;

console.log("A média é: "+result);