/*
Fazer um algoritmo que receba 5 números e mostra o produto dos ímpares e a soma dos pares
EX: valores fornecidos 1,2,3,4,5
Impares -> 1 * 3  * 5 = 15
Pares -> 2 = 4 = 6
O programa imprime : 
Produtos dos impares : 15
Soma dos pares : 6
*/

var user = require('readline-sync');
var y = [];
var z = [];
x=0;


while(x < 5){
    var num = user.questionInt("Digite um número: ");
    if(num % 2 == 0){
       y.push(num);
    }else{
        z.push(num)
    }
    x++;
}

var total = 0;
for ( var i = 0; i < y.length; i++ ){
   total += y[i];
}
console.log(y);
console.log("Soma dos pares: "+total);

var result = 1;
for ( var n = 0; n < z.length; n++ ){
   result *= z[n];
}

console.log(z);
console.log("Produto dos ímpares: "+result);