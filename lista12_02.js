/*
Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, 
se mais de um possuir maior idade apresentar o nome de todos os que possuem maior idade.
Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade e inicialize essas variáveis nas propriedades do objeto.
Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade. 
Crie o objeto do aluno e adicione em um array.
Repita esse passo para os outros alunos. 
Ao final o algoritmo deve iterar pelo array de alunos  e descobrir quais são os alunos com maior idade e imprimir seus nomes.
*/

class Aluno {

    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
        
    }
}

var user = require('readline-sync');
var x = 0;
var alunos = [];

while(x < 3){
    var nomeAluno = user.question("Insira seu nome: ");
    var idadeAluno = user.questionInt("Insira sua idade: ");

    var aluno = new Aluno(nomeAluno, idadeAluno);

    x++;

    alunos.push(aluno);
}

var aluno1 = alunos[0];
var aluno2 = alunos[1];
var aluno3 = alunos[2];

if(aluno1.idade >= 18){
    console.log(aluno1);
}
if(aluno2.idade >= 18){
    console.log(aluno2);
}
if(aluno3.idade >= 18){
    console.log(aluno3);
}