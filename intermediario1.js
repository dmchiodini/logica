/*
Faça um programa que leia o valor de um produto X e leia a quantidade de reais de um cofrinho que contenha:  
N moedas de 1 real; 
N moedas de 50 centavos; 
N moedas de 25 centavos; 
N moedas de 10 centavos; 
N moedas de 5 centavos; 
N moedas de 1 centavos. 


O programa deverá verificar se o total de reais que contém no cofrinho é o bastante para compra o produto X e imprimir se possui ou não valor suficiente
*/

var user = require('readline-sync');

var produto = user.questionFloat("Insira o valor do produto: ");
var qtd1r = user.questionInt("Quantas moedas de 1 real há no cofrinho? ");
var qtd50c = user.questionInt("Quantas moedas de 50 centavos há no cofrinho? ");
var qtd25c = user.questionInt("Quantas moedas de 25 centavos há no cofrinho? ");
var qtd10c = user.questionInt("Quantas moedas de 10 centavos há no cofrinho? ");
var qtd5c = user.questionInt("Quantas moedas de 5 centavos há no cofrinho? ");
var qtd1c = user.questionInt("Quantas medas de 1 centavo há no cofrinho? ");

var cent50 = parseFloat((qtd50c * 50) / 100);
var cent25 = parseFloat((qtd25c * 50) / 100);
var cent10 = parseFloat((qtd10c * 50) / 100);
var cent5 = parseFloat((qtd5c * 50) / 100);
var cent1 = parseFloat((qtd1c * 50) / 100);

var cofrinho = qtd1r + cent50 + cent25 + cent10 + cent5 + cent1;

if(cofrinho < produto){
    console.log("Você possui R$ "+cofrinho+" valor insuficiente para comprar o produto") ;
}else{
    console.log("Você possui R$ "+cofrinho+" valor suficiente para comprar o produto");
}
