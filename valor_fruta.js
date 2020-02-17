var pergunta = require('readline-sync');

var preco;
var total;

var quantidade = pergunta.question("Insira a quantidade de maçãs compradas: ");

if(quantidade > 12) {
    preco = 0.25;
    total = parseFloat(quantidade * preco);
    console.log("O valor da compra é: R$" + total);
}else {
    preco = 0.30;
    total = parseFloat(quantidade * preco);
    console.log("O valor da compra é: R$ " + total);
}