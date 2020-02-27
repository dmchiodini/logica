/*
Fazer um algoritmo que receba 8 idades do usuário e no final ele imprimir qual é a menor idade.
*/

var user = require('readline-sync');

var y = [];
var x = 0;

while(x < 4){
    var num = user.questionInt("Digite uma idade: ");
    y.push(num);
    x++;
}

var num1 = y[0]
var num2 = y[1]
var num3 = y[2]
var num4 = y[3]
var num5 = y[4]
var num6 = y[5]
var num7 = y[6]
var num8 = y[7]


var min = Math.min(num1, num2, num3, num4, num5, num6, num7, num8);

console.log(min);