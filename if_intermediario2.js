//Faça um programa onde o usuário irá escolhe se que Converte graus Celsius para Fahrenheit ou Fahrenheit para Celsius. 

var user = require('readline-sync');

var resp = user.question("Para converter Celsiu para Fahrenheit digite 1 ou para converter Fahrenheit para Celsius digite 2: ");
var temp = user.questionFloat("Digite a temperatura que quer converter: ");

var cel;

if(resp == 1){
    cel = ((temp / 5) * 9 ) + 32;
    console.log("A temperatura convertida para Fahrenheit é: " +cel+" °F");
}else{
    fah = (temp * 1.8) + 32;
    console.log("A temperatura convertida para Celsius é: " +fah+" °C");
}
