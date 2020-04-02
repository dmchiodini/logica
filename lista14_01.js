/*
Solicite ao usuário para inserir yes ou no
Após isso utilize a API https://yesno.wtf/api
Esta api traz um dado aleatório yes ou no 
No final imprima se o usuário acertou ou não
*/

var axios = require('axios');
var user = require('readline-sync');
var simOuNao = user.keyInYN();

if(simOuNao == true){
    simOuNao = 'yes'
} else {
    simOuNao = 'no'
}


function consultar(){
    axios.get('https://yesno.wtf/api')
    .then(function (resposta) {
        if(simOuNao == resposta.data.answer) {
            console.log('ACERTOOU!')
        } else {
            console.log('ERROOOUU!')
        }
    });
}

consultar();