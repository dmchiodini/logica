/*
(RIGHT JOIN) Faça um algoritmo que receba o nome de dois jogadores e após isso peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o jogador B. 
Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números que apenas o jogador B colocou diferente do A.
EX: Jogador A : 1, 2, 3, 4, 5
Jogador B : 1,2,3,8,7
Algoritmo imprime :
8,7
*/

var user = require("readline-sync");


var nums1 = [];
var nums2 = [];
var intersec = [];


var nome1 = user.question("Insira o nome do jogador1: ");
for(var i=0;i<5;i++){
    nums1.push(user.questionInt("Insira um número de 1 a 10: "));
}

var nome2 = user.question("Insira o nome do jogador2: ");
for(var i=0;i<5;i++){
    nums2.push(user.questionInt("Insira um número de 1 a 10: "));
}

for(var j=0;j<nums1.length;j++){
    for(var i=0;i<nums2.length;i++){
        if(nums1[j] == nums2[i]){
            nums2.splice(i, 1));
        }
    }
}

console.log(nums2);