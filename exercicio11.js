var user = require('readline-sync');

var nota1 = parseInt(user.question("Insira a nota 1: "));
var nota2 = parseInt(user.question("Insira a nota 2: "));
var nota3 = parseInt(user.question("Insira a nota 3: "));

var total = nota1 + nota2 + nota3;

var media = parseInt(total) / 3;

if(media >= 7){
    console.log("Aluno aprovado!");
}else{
    console.log("Aluno reprovado!");
}