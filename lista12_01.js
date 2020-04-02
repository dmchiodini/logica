/*
Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
Para isso : 
Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e inicialize as propriedades com estes valores. 
Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e cor. 
Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo e cor. 
Ao final o algoritmo deve comparar se os carro são iguais.
Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor. 
*/

class Carro {
    constructor(nome, modelo, cor){
        this.nome = nome,
        this.modelo = modelo,
        this.cor = cor
    }
}

var user = require('readline-sync');

var nome = user.question("Qual o nome do carro: ");
var modelo = user.question("QUal o modelo do carro: ");
var cor = user.question("Qual a cor do carro: ");

var carro = new Carro(nome, modelo, cor);

var nome = user.question("Qual o nome do carro: ");
var modelo = user.question("QUal o modelo do carro: ");
var cor = user.question("Qual a cor do carro: ");

var carro1 = new Carro(nome, modelo, cor);

if(carro.nome == carro1.nome && carro.modelo == carro1.modelo){
    console.log("Os carro são iguais!");
} else {
    console.log("Os carros não são iguais!");
}


