//Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.

var user = require('readline-sync');
var dobro;
var triplo;

var num = parseInt(user.question("Insira um número positivo ou negativo: "));

if(num > 0) {
    dobro = num * 2;
    console.log("o dobro de " +num+ " é: "+dobro);
} else {
    triplo = num * 3;
    console.log("O tiplo de " +num+ " é: " +triplo);
}