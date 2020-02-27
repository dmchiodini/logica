/*
Faça um algoritmo que receba uma palavra e imprima ela ao contrário.
EX: usuário informou BANANA
Algoritmo imprime:
ANANAB
*/

var user = require('readline-sync');

var palavra = user.question("Insira um palavra: ");
var result = palavra.length;
var n = result;

while(n <= result && n >= 0){
    console.log(palavra.charAt(n));
    n--;
}