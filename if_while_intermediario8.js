/*
Escreva um programa que simule uma partida de pedra papel e tesoura. 
Deve ser solicitado o nome do jogador A e do jogador B.
Após isso o programa deve pedir a jogada do jogador A e a jogada do jogador B.
No final o programa deve imprimir quem ganhou.
Dicas: 
Papel ganha de pedra
Tesoura ganha de papel
Pedra ganha de tesoura

Para não exibir a jogada do jogador utilize o comando de “password” no readline-sync 
*/

console.log('Bem vindo ao jogo de pedra (A) papel - (B) tesoura (C).');

var user = require("readline-sync");
var querContinuar = true;

while(querContinuar){
    while(jogadaA != 'A' && jogadaA != 'B' && jogadaA != 'C'){
        var jogadaA = user.question("Jogador A, isira sua jogada: (A, B ou C)", {hideEchoBack: true}).toUpperCase();
    }
    while(jogadaB != 'A' && jogadaB != 'B' && jogadaB != 'C'){
        var jogadaB = user.question("Jogador B, insira sua jogada: (A - PEDRA, B - PAPEL ou C - TESOURA)", {hideEchoBack: true}).toUpperCase();
    }

    if(jogadaA == jogadaB){
        console.log("Deu Empate!");
    }

    if(jogadaA == 'A'){
        if(jogadaB == 'B'){
            console.log("Jogador B ganhou!");
        }else if(jogadaB == 'C'){
            console.log("Jogador A ganhou!")
        }
    } 
    else if(jogadaA == 'B'){
        if(jogadaB == 'A'){
            console.log("Jogador A ganhou!");
        }else if(jogadaB == 'C'){
            console.log("Jogador B ganhou!");
        }
    }
    else if(jogadaA == 'C'){
        if(jogadaB == 'A'){
            console.log("jogador B ganhou!");
        }else if(jogadaB == 'B'){
            console.log("Jogador A ganhou!");
        }
    }

    querContinuar = user.keyInYN("Deseja continuar jogando? ");
    jogadaA = '';
    jogadaB = '';
}
