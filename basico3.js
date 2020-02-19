var pergunta = require('readline-sync');

var senha = 1234;

var senhaUser = pergunta.question("Insira a senha: ");

if(senhaUser == senha){
    console.log("Senha correta!");
}else {
    console.log("Senha incorreta!");
}