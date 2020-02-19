/*
Faça um algoritmo que receba uma palavra e imprima cada caractere da palavra em uma linha.
EX: usuário informou MAÇÃ
O algoritmo imprime: 
M
A
Ç
Ã

*/

var user = require('readline-sync');

var palavra = user.question("Insira uma palavra: ");
var result = palavra.length;
var n = 0;

while(n < result){
    console.log(palavra.charAt(n));
    n++
}