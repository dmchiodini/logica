/*
Faça um algoritmo em que o usuário possa cadastrar preços de produtos e no final exiba o preço de cada produto junto com o valor total. 
após inserir todos os produtos o programa deve pedir o valor a ser pago, caso o valor passe do da compra exibir o troco, 
se o valor for menor informar que a compra vai ser cancelada. 

EX entradas :
0.75
0.25
2.50 
Valor total pago: 5.00

O programa imprime : 
Produto 1 - 0.75
Produto 2 - 0.25
Produtos 3 - 2.50
Total da compra : 3.50 $
Troco : 1.50 $
*/

var user = require('readline-sync');
var result = [];
var prod = result.push(user.questionFloat('Insira o valor do produto ou F para finalizar: '));
x= 0;
contagem = result.length -1;

while(x <= 1){
    if(x == 1){
        x = 0;
    }

    prod;

    if(contagem == "F"){
        break;
    }
}

