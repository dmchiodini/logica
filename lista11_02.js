/*
Faça um algoritmo que receba peso e altura do usuário e calcule o IMC.
Para fazer o calculo do IMC utilize : 
https://www.npmjs.com/package/fasam-imc-calc
*/

const FasamImc = require('fasam-imc-calc');
const user = require('readline-sync');

const imc = new FasamImc(peso, altura); // peso, altura

var peso = user.questionFloat("Qual o seu peso: ");
var altura = user.questionFloat("Qual sua altura: ");

console.log(`seu imc é: ${imc.calc(peso, altura)}`);