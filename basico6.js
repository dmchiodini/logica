var user = require('readline-sync');
var sexoMasc = "M";
var pesoIdeal;

var resp = user.question('Digite M para masculine e F para feminino: ');
var altura = user.question('Digite sua altura: ');

if(resp == sexoMasc){
    pesoIdeal = (72.7 * parseFloat(altura)) - 58;
    console.log("Seu peso ideal é: "+parseInt(pesoIdeal));
}else {
    pesoIdeal = (62.1 * parseFloat(altura)) - 44.7;
    console.log("Seu peso ideal é: "+parseInt(pesoIdeal));
}