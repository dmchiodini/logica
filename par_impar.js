var pergunta = require('readline-sync');

var num = pergunta.question("Insira um número: ");

if(num % 2 == 0){
    console.log("O número " +num+ " é par.");
} else {
    console.log("O número " +num+ " é ímpar");
}

