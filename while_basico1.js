/*
Faça um programa que recebe um número de entrada e repita a mensagem “BIP BIP” de acordo com o número inserido.
EX: usuário inseriu 3
O programa imprime:
 BIP BIP
 BIP BIP
 BIP BIP
 */

var user = require('readline-sync');

var x = 0;

var num = user.questionInt("Insira um número: ");

while(x < num){
    console.log("BIP BIP");
    x++;
}