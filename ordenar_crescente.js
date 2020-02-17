var pergunta = require('readline-sync');

var num1 = pergunta.question("Digite o primeiro número: ");
var num2 = pergunta.question("Digite o segundo número: ");
var num3 = pergunta.question("Digite o terceiro número: ");

var numeros = [num1, num2, num3];
var ordenar = numeros.sort();

console.log("a ordem crescente dos números são: " +ordenar[0], ordenar[1], ordenar[2]);