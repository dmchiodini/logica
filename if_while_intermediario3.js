/*
Escreva um programa javascript para escrever o seguinte padrão na tela, com N linhas:

*  
* *  
* * *  
* * * *  
* * * * *

Onde N é um número determinado pelo usuário (no exemplo, N=5).
*/

var user = require('readline-sync');

var num = user.questionInt('Insira um número:');
var str = '';
var j = 1;


/*
var result = ['*']
var x = 0;
while(x < num){
    console.log(result.join(' '));
    result.push("*");
    x++;
}
*/

while(j <= num){
    str += '* ';
    console.log(str);
    j++;
}