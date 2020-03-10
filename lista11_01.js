/*
Utilize o módulo https://www.npmjs.com/package/notas-universitarias-util
Para fazer um programa que calcule a média universataria. 
Peça entradas para o usuário de notas e no final calcule a média 
usando o módulo acima. 
Caso ele seja aprovado imprimir aprovado se não reprovado.
*/

var criterio = require('notas-universitarias-util');
var user = require('readline-sync');

var g1 = user.questionFloat("Insita a nota1: ");
var g2 = user.questionFloat("Insita a nota2: ");
var g3 = user.questionFloat("Insita a nota3: ");

const notas = {
    g1: g1, 
    g2: g2,
    g3: g3
}

var media = criterio.default(4).media(notas);

if(media >= 5){
    console.log(`Sua média é: ${media} - APROVADO!`);
} else if(media == -1) {
    console.log('REPROVADO!');
}