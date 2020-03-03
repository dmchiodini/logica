/*
Uma empresa abriu uma linha de crédito para os funcionários.
O valor da prestação não pode ultrapassar 30% do salário. 

Faça um programa que receba o salário, o valor do empréstimo e o número de prestações e informe se o empréstimo pode ser concedido. 
Nenhum dos valores informados pode ser zero ou negativo.
*/

var user = require('readline-sync');
var salario = user.questionFloat("Insira o salário: ");
var emprestimo = user.questionFloat("Insira o valor do empréstimo: ");
var parcela = user.questionInt("Insita o número de parcelas:  ");

if(salario <= 0 || emprestimo <=0 || parcela <= 0){
    console.log("Não digitar 0 ou valores negativos!");
}

var valorParcela = emprestimo / parcela;
var condicao = (30 * salario) / 100;

if(valorParcela > condicao){
    console.log("Não é possível conceder o empréstimo, pois a parcela ultrapassa 30% do seu salário.");
}else{
    console.log("Empréstimo concedido!");
}

