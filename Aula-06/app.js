/*
    Objetivo: criar uma API para disponibilizar dados de Estados e Cidades
    Autor: Alexssandro
    Data: 10/03/23
    Versão: 1.0
*/

/*
    Express - dependência para realizar requisições de API pelo protocolo HTTP
        npm install express --save
    Cors - dependência para gerenciar permissões de requisição da API
        npm install cors --save
    Body-Parser - dependência que gerencia o corpo das requisições
        npm install body-parser --save
*/

//Import das dependências do projeto

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//cria um objeto com as características do express
const app = express()

app.use((request, response, next) => {
    //API pública - fica disponível para utilização de qualquer utilização (ex. viacep)
    //API privada - somente o ip informado poderá consumir dados da API (ex. whatsapp api)

    //Define se a API será pública ou privada, neste caso pública devido o símbolo '*'
    response.header('Access-Control-Allow-Origin', '*')

    //Permite quais métodos poderão ser utilizados nas requisições da API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Envia para o cors() as regras de permissões
    app.use(cors())

    //Não encerrar o código depois de processar o callback
    next()
})

//EndPoints - cada requisição retorna um endPoint
    //async - cria um estado de espera que faz com que o front não corte a comunicação com a API devido a demora no processamento do back

//EndPoint para listar todos os estados
app.get('/estados', cors(), async (request, response, next) => {

    const estadosCidades = require('./modulo/estados_cidades.js')
    const funcs = require('./modulo/estadosBrasil.js')
    let estados = funcs.getListaDeEstados(estadosCidades.estadosCidades)
    response.json(estados)
    response.status(200)
    response.json('{message: "testando a API"}')

})

app.listen(8080, () => {
    console.log('servidor aguardando requisões na porta 8080')
})
