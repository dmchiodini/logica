/*
Escreva um programa que pedirá para o usuário dois números entre 1 e 100. 
O programa deve, então, iterar de um em um do menor pro maior, sempre imprimindo o número na tela do usuário. 
Entretanto, caso o número seja divisível por 7, o programa deve ao invés disso imprimir a palavra “Ping”. 
Caso o número seja divisível por 5, o programa deve imprimir “Pong”. 
Caso o número seja divisível por 7 e 5, o programa deveria imprimir a mensagem “Ping Pong”. 
Dica: Neste exercício vocês talvez precisem fazer uso do recurso “user.questionInt()” 
que transforma o conteúdo de um input do usuário de string para inteiro.
*/

var user = require('readline-sync');

var menor;
var maior;

var num1 = user.questionInt("Insira um número de 0 a 100: ");
var num2 = user.questionInt("Insira outro número de 0 a 100: ");

if(num1 < num2){
    menor = num1;
    maior = num2;
}else{
    menor = num2;
    maior = num1;
}

while(menor <= maior){

    if(menor % 7 == 0 && menor % 5 == 0){
        console.log("Ping Pong");
    }else if(menor % 5 == 0){
        console.log("Pong");
    }else if(menor % 7 == 0){
        console.log("Ping");
    }else{
        console.log(menor);
    }

    menor++
}
