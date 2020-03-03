/*
Faça um algoritmo que receba um texto de entrada e diga se a primeira letra é maiúscula ou não
*/


var user = require('readline-sync');
var texto = user.question("Insita um texto: ");

var unicode = texto.charCodeAt(0);


if(unicode >= 65 && unicode <= 90){
    console.log("A primeira letra é maiúscula");
}else if(unicode >= 97 && unicode <= 122){
    console.log("A primeira letra é minúscula");
}else {
    console.log("Digitação incorreta!");
}

