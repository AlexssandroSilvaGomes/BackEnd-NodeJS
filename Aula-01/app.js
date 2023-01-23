//Comentário em linha
/* 

    Comentário em bloco

*/

//Permite exibir o comentário no terminal
console.log('Testando o Node.js');


//Import da biblioteca que permite entrada de dados
var readline = require('readline');

//Criamos um objeto ou variável que vai ser especialista na entrada de dados
var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

//CallBack - uma função de CallBack permite que na própria linha de progamação
//seja uma variavel, um processamento, a chamada de um metodo possa acontecer
//um retorno de dados automaticamente, sem precisar sair deste processamento

//Cria uma interação com o usuário, para entrada de dados.
//Após o usuário digitar o conteúdo, o objeto entradaDados permite
//retornar o conteúdo digitado para ser utilizado. Isso acontece através
//de uma função de CallBack.
entradaDados.question('FAvor digitar o seu nome: \n', function(nome){

    console.log('Bem vindo, ' + nome + ' ao servidor Node.JS');

});