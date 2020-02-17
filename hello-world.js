var pergunta = require('readline-sync');

var num1 = pergunta.question("Insira o primeiro número: ");
var num2 = pergunta.question("Insira o segundo número: ");

if(num1 > num2) {
    console.log("O número " + num1 + " é maior.");
}else if(num1 < num2){
    console.log("O número " +num2+ " é maior.");
}else {
    console.log("Os números são iguais.");
}
