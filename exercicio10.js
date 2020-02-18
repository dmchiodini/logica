var user = require('readline-sync');

var num = user.question("Insira um número: ");

if(num >= 100 && num <= 200) {
    console.log("Você digitou um número entre 100 e 200");
}else {
    console.log("Você digitou um número fora da faixa entre 100 e 200");
}