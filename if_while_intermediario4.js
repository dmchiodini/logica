/*
Escreva um programa que calcule a soma de todos os múltiplos de 3 e de 5 entre 1 e 1000. 
*/

var x = 0;
var y = x;
var z = x;

while(x <= 1000){
    y = 3 * x + y;
    z = 5 * x + z;
    x++;
}

console.log("A soma de todos os multiplos de 3 entre 1 e 1000 é: " +y);
console.log("A soma de todos os multiplos de 5 entre 1 e 1000 é: " +z);