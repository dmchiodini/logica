/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, solicitando o preço da etiqueta do produto e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado. Código Condição de pagamento 
	- 1 À vista em dinheiro ou cheque, recebe 10% de desconto 
	- 2 À vista no cartão de crédito, recebe 15% de desconto 
	- 3 Em duas vezes, preço normal de etiqueta sem juros 
    - 4 Em duas vezes, preço normal de etiqueta mais juros de 10% 
    */

   var user = require('readline-sync');
   var desconto;
   var valorFinal;
   var juros;

   var precoEtiqueta = user.questionFloat("Insira o preço da etiqueta do produto: ");
   console.log("Escolha a condição de pagamento: ");
   console.log("Digite 1 para pagamento à vista em dinheiro ou cheque (10% de desconto).");
   console.log("Digite 2 para pagamento à vista no cartão de crédito (15% de desconto).");
   console.log("Digite 3 para pagamento em duas vezes sem juros.");
   console.log("Digite 4 para pagamento em duas vezes com juros de 10%.");
   var condicao = user.questionInt("Insira o número correspondente a condição de pagamento desejada: ");

   if(condicao == 1){
       desconto = (10 * precoEtiqueta) / 100;
       valorFinal = precoEtiqueta - desconto;
       console.log("O valor a ser pago é: "+valorFinal);
   }else if(condicao == 2){
       desconto = (15 * precoEtiqueta) / 100;
       valorFinal = precoEtiqueta - desconto;
       console.log("O valor a ser pago é: "+valorFinal);
   }else if(condicao == 3){
       valorFinal = precoEtiqueta / 2;
       console.log("O valora ser pago é: 2x "+valorFinal);
   }else if(condicao == 4){
        juros = (10 * precoEtiqueta) / 100;
        valorFinal = precoEtiqueta + juros;
        console.log("O valor a ser pago é: "+valorFinal);
   }else {
        console.log("Valor digitado não corresponde a uma opção de condição de pagamento.");
   }
