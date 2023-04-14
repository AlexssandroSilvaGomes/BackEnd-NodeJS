/*
    Objetivo: api para integração entre back e banco de dados (GET, POST, PUT, DELETE) 
    Data: 14/04/2023
    Autor: Alexssandro da Silva Gomes
    Versão: 1.0
*/

//import das bibliotecas para a api
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { response } = require('express')

//cria o objeto app conforme a classe do express
const app = express()

//define as permissões do cors
app.use((request, response, next) => {
    //define quem podera acessar a api
    response.header('Access-Control-Allow-Origin', '*')
    //define quais métodos serão utilizados na api
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    
    //atribui as permissões ao cors
    app.use(cors())

    next()
})

//CURD (create, update, read, delete)

/*
    Objetivo: api de controle de alunos
    Data: 14/04/2023
    Autor: Alexssandro da Silva Gomes
    Versão: 1.0
*/

//endpoint: retorna todos os dados de alunos
app.get('v1/lion-school/aluno', cors(), async, (request, response) => {

})

//endpoint: retorna todos os dados de alunos filtrando pelo id
app.get('v1/lion-school/aluno/:id', cors(), async, (request, response) => {

})

//endpoint: insere um aluno(dado) novo
app.post('v1/lion-school/aluno', cors(), async, (request, response) => {

})

//endpoint: atualiza um aluno existente, filtrando pelo id
app.put('v1/lion-school/aluno/:id', cors(), async, (request, response) => {

})

//endpoint: exclui um aluno, filtrando pelo id
app.delete('v1/lion-school/aluno/:id', cors(), async, (request, response) => {

})

app.listen(8080, () => {
    console.log('rodo')
})
