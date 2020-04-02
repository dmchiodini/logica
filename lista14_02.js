/*
Faça um algoritmo que imprima uma frase aleatória de Breaking Bad e também seu autor
Utilize a API : https://breaking-bad-quotes.herokuapp.com/v1/quotes
*/

var axios = require('axios');
var user = require('readline-sync');

function breakingBad() {
    axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(function (resposta){
        console.log(resposta);
        console.log(`Frase: ${resposta.data[0].quote}`);
        console.log(`Autor: ${resposta.data[0].author}`);
    })
}

breakingBad();