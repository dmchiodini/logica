/*
Crie um programa que receba uma palavra e exiba quantas consoantes e vogais essa palavra tem. 
EX : saúde
2 consoantes
3 vogais
*/

var vogais = 'aeiou'//['a', 'e', 'i', 'o','u'];
var numVogal = 0;
var numCons = 0;
var isVogal = false;

var user = require("readline-sync");
var palavra = user.question("Insira uma palavra: ").toLocaleLowerCase();

for(var i=0;i<palavra.length;i++){
    isVogal = false;
    for(var j=0;j<vogais.length;j++){
        if(palavra[i] == vogais[j]){
          isVogal = true;
          break;
        }
    }

        if(isVogal){
            numVogal++;
        }else{
            numCons++;
        }

    }


console.log(`${numCons} consoantes\n
${numVogal} vogais`);