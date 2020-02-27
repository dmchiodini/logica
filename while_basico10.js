/*
Faça um algoritmo que receba um número e imprima todos seus divisores.
EX : usuário informou 21
O algoritmo imprime :
1
3
7
21

*/

var user = require('readline-sync');

var num = user.questionInt("Insira um número para ver seus divisores: ");
var x = 0;

while(x <= num){
    if(num % x == 0){
        console.log(x);
    }
    x++
}