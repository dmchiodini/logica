/*
Faça um algoritmo que receba um CEP e diga qual é o endereço completo (Cidade, rua, estado) deste CEP.
Utilize a API : https://api.postmon.com.br/v1/cep/{CEP}
Exemplo CEP :https://api.postmon.com.br/v1/cep/89010020
*/

var axios = require('axios');
var user = require('readline-sync');

var cep = user.question('Insira o cep:');

function consultarCep() {

    axios.get(`https://api.postmon.com.br/v1/cep/${cep}`)
    .then(function (resposta){
        console.log(`Estado: ${resposta.data.estado}`);
        console.log(`Cidade: ${resposta.data.cidade}`);
        console.log(`Logradouro: ${resposta.data.logradouro}`);
    })
}

consultarCep();