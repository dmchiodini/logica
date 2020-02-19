var user = require('readline-sync');

var num1 = user.question("Digite o primeiro número: ");
var num2 = user.question("Digite o segundo número (não repetir número): ");
var num3 = user.question("Digite o terceiro número (não repetir número): ");

var numeros = [num1, num2, num3];
var ordenar = numeros.sort();

console.log("a ordem crescente dos números são: " +ordenar[0], ordenar[1], ordenar[2]);