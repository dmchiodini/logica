/*
Escreva um programa que leia as medidas dos lados de um triângulo e escreva se ele é Equilátero, Isósceles ou Escaleno. 
	Sendo que: 
− Triângulo Equilátero: possui os 3 lados iguais. 
− Triângulo Isóscele: possui 2 lados iguais. 
− Triângulo Escaleno: possui 3 lados diferentes. 
*/

var user = require('readline-sync');
var l1 = user.questionFloat("Insira o tamanho do lado: ");
var l2 = user.questionFloat("Insira o tamanho do lado: ");
var l3 = user.questionFloat("Insira o tamanho do lado: ");

if(l1 == l2 == l3){
    console.log("É um triangulo");
}else if(){

}else{
console.log("Triangulo escaleno");
}