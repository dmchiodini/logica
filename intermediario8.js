/*
Faça um algoritmo que receba um texto de entrada e diga se a primeira letra é maiúscula ou não
*/


var user = require('readline-sync');
var texto = user.question("Insita um texto: ");
var div = texto.split(""); //coloca o texto em um array divido por letras


//expresoes regulares para verificar se a primeira letra do array é maiúscula
if(/[A-Z]/.test(div[0])){
    console.log("A primeira letra é maiúscula");
}else{
    console.log("A primeira letra é minúscula");
}
