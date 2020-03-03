/*
Elabore um programa para testar se uma senha digitada é igual a “batatafrita”. Se a senha estiver correta escreva 
	“Acesso permitido”, 
do contrário emita a mensagem 
    “Você não tem acesso ao sistema”.
    */

var user = require('readline-sync');

var senha = "batatafrita";

var senhaUsuario = user.question("Insira a senha: ");

if(senhaUsuario == senha){
    console.log("Acesso permitido");
}else {
    console.log("Você não tem acesso ao sistema");
}