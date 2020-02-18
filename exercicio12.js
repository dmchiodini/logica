//Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e estado civil seja “CASADA”, 
//solicitar o tempo de casada (anos).

var user = require('readline-sync');
var feminino = "F";
var casada = "C";
var anosCasada;

var nome = user.question("Qual o seu nome? ");
var sexo = user.question("Qual o seu sexo? (M ou F) "); //Digitar letra maiuscula
var estadoCivil = user.question("Qual o seu estado civil? (C para casado(a) e S para solteiro(a) "); //Digitar letra minuscula


if(sexo == feminino && estadoCivil == casada) {
    anosCasada = user.question("Quantos anos de casada? ");
}