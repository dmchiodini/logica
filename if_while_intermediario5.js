/*
Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada entre
estas notas (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este
procedimento para uma turma composta por cinco alunos, usando o comando For.
Exemplo de tela de saída:

Entre com o nome do aluno: João da Silva
Entre com o grau A: 5.0
Entre com o grau B: 6.0
O aluno João da Silva tem uma média:5.7
*/

var user = require("readline-sync");
var alunos = [];
var notasA = [];
var notasB = [];
var tamanho_classe = 5;
var pesos = [0.3, 0.7];

for(var i = 0; i < tamanho_classe; i++){
    
    var nomeAluno = user.question("Insira o nome do aluno: ");
    var notaA = user.questionFloat("Insira a nota da prova A: ");
    var notaB = user.questionFloat("Insira a nota da prova B: ");
    alunos.push(nomeAluno);
    notasA.push(notaA);
    notasB.push(notaB);

}

console.log("Coletamos todos os alunos. Imprimindo as medias: ");

for(var j = 0; j < tamanho_classe; j++){
    console.log(`Nome do aluno: ${alunos[j]}\n
    nota da prova A: ${notaA[j]}\n
    nora da prova B: ${notaB[j]}\n
    Média ponderada do aluno: ${pesos[0]*notasA[j] + pesos[1] *notasB[j]}\n\n`);
}
