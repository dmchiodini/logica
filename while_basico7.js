var user = require('readline-sync');

while(true) {
    var resp = user.question("Digite A para encerrar ou B para realizar uma soma: ");

    if(resp == "b" || resp == "B"){
        var n1 = user.questionInt("Digite o primeiro número: ");
        var n2 = user.questionInt("Digite o segundo número: ");
        var result = n1 + n2;
        console.log("O resultado é: "+result);
    }else if(resp != "a" && resp != "b"){
        console.log("Comando inválido.");
    }else if(resp == "a" || resp == "A"){
        break;
    }
}

/*

Faça um programa que pergunte ao usuário escolher duas opções A e B. 
A encerra o programa, B é pra fazer uma soma.
Se o usuário inserir A o programa fecha
Se o usuário inserir B o programa vai realizar uma operação de soma, solicitando dois números inteiros (n1 e n2) 
onde após o usuário inserir o segundo número o algoritmo deve apresentar a soma e também pergunta se quer realizar outro cálculo.
Se o usuário inserir qualquer coisa diferente de A ou B o programa deve dizer que não entendeu o comando e solicitar novamente para inserir A ou B

*/