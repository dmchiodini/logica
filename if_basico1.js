var pergunta = require('readline-sync');

var ano = pergunta.question("Insira seu ano de nascimento: ");
var anoAtual = 2020;
var idade = parseInt(anoAtual) - parseInt(ano);

if(idade > 16) {
    console.log("Você poderá votar este ano");
}else{
    console.log("Você não poderá votar este ano.");
}