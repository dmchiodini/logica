/*
Faça um algoritmo que receba uma equação do usuário e retorna o resultado simplificado
Utilize a api : https://newton.now.sh/simplify/{equacao}
Exemplo das entradas 
2*2 = 2 vezes 2
2+2 = 2 mais 2
2-2 = 2 menos 2
2(over)2 = 2 dividido por 2
2^2 = 2 elevado a 2

Leia a documentação para entender as operações mais avançadas
https://github.com/aunyks/newton-api

Suponha que a equação seja : 2 + 5 . 2 . 6 = 62
Exemplo de chamada : https://newton.now.sh/simplify/2+5*2*6
*/

var axios = require('axios');
var user = require('readline-sync');

var equacao = user.question("Insira a equação: ").trim();

function calc() {
    axios.get(`https://newton.now.sh/simplify/${equacao}`)
    .then(function (resposta){
        console.log(`${equacao} = ${resposta.data.result}`);
    })
}

calc();