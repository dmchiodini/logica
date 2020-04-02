var rs = require('readline-sync');
var admin = require('firebase-admin');

var serviceAccount = require("./credenciais.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://lista19-8c991.firebaseio.com"
});


var nomeTabela = 'carros';
var db = admin.database().ref(nomeTabela);

var user;

function inicio(){
  console.clear()
  console.log("Digite 1 para cadastrar um carro")
  console.log("Digite 2 para mostrar carros cadastrados")
  console.log("Digite 3 para carros de maior valor")
  console.log("Digite 4 para carros de menor valor")
  console.log("Digite 5 para pesquisar o carro com um valor exato")
  console.log("Digite 6 para sair")
  user = rs.questionInt()

if(user == 1){
  cadastrarCarro();
} else if (user == 2){
  mostrarCarros();
} else if (user == 3){
  maiorValor();
} else if (user == 4){
  menorValor();
} else if (user == 5){
  valorExato();
} else {
  process.exit(console.log('\nAdeus amigão =.(\n\n'))
}

}

function cadastrarCarro() {
    var nome = rs.question("Insira o nome do carro: ")
    var valor = rs.questionFloat("Insira o valor: ")
    db.push({
        nome: nome,
        valor: valor,
      })

    console.log('\nCarregando...')
    setTimeout(function() {console.log('\nCarro cadastrado com sucesso! \n\n')}, 2000)
    setTimeout(function() {inicio()}, 3500)

  }

function mostrarCarros(){
      db.orderByChild('nome')
        .on('child_added', snapshot => {
            console.log(snapshot.val())
        })

        setTimeout(function() {inicio()}, 3500)

}

function maiorValor(){
  user = rs.questionFloat("Insira o valor: ")
  db.orderByChild('valor').startAt(user)
        .on('child_added', snapshot => {
            console.log(snapshot.val())
        })
        
        setTimeout(function() {inicio()}, 3500) 

}

function menorValor(){
  user = rs.questionFloat("Insira o valor: ")
  db.orderByChild('valor').endAt(user)
        .on('child_added', snapshot => {
            console.log(snapshot.val())
        })

        setTimeout(function() {inicio()}, 3500)

}

function valorExato(){
  user = rs.questionFloat("Insira o valor: ")
  db.orderByChild('valor').equalTo(user)
        .on('child_added', snapshot => {
            console.log(snapshot.val())
        })

        setTimeout(function() {inicio()}, 3500)

}

inicio()