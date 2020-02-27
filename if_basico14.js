//Faça um programa para ler dois números inteiros A e B e informar se A é divisível por B.

var user = require('readline-sync');
var numA = parseInt(user.question("Insira um número inteiro: "));
var numB = parseInt(user.question("Insira outro número inteiro: "));

if(numA % numB == 0){
    console.log("O número " +numA+ " é divisivel por " +numB);
}else{
    console.log("O número " +numA+ " não é divisivel por " +numB);
}