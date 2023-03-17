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

//import das funções
const estadosCidades = require('./modulo/estados_cidades.js')
const funcs = require('./modulo/estadosBrasil.js')
const { request } = require('express')

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

    let estados = funcs.getListaDeEstados(estadosCidades.estadosCidades, 'SP')

    //Tratamento para validar o sucesso da requisição
    if (estados) {
        response.json(estados)
        response.status(200)
        response.json('{message: "testando a API"}')
    } else {
        response.status(500)
        response.json()
    }

})

//EndPoint para listar os dados do estado filtrando pela sigla do mesmo
app.get('/estado/:uf', cors(), async (request, response, next) => {

    //Recebe a sigla do estado que será enviado pela URL da requisição
    let siglaEstado = request.params.uf
    let statusCode;
    let dadosEstado = {}

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        
        statusCode = 400
        dadosEstado.message = "Não foi possível processar, pois os dados de entrada (uf) que foi enviadoo não corresponde ao exigido. Confira o valor, pois não pode ser vazio, precisam ser caracteres e ter dois dígitos."

    } else {
        let estado = funcs.getDadosEstado(estadosCidades.estadosCidades, siglaEstado)
        if (estado) {
            statusCode = 200
            dadosEstado = estado
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosEstado)


})

//EndPoint para listar os dados da capital filtrando pela sigla do mesmo
app.get('/capital/:uf', cors(), async (request, response, next) => {

    //Recebe a sigla do estado que será enviado pela URL da requisição
    let siglaEstado = request.params.uf
    let statusCode;
    let dadosEstado = {}

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        
        statusCode = 400
        dadosEstado.message = "Não foi possível processar, pois os dados de entrada (uf) que foi enviadoo não corresponde ao exigido. Confira o valor, pois não pode ser vazio, precisam ser caracteres e ter dois dígitos."

    } else {
        let estado = funcs.getCapitalEstado(estadosCidades.estadosCidades, siglaEstado)
        if (estado) {
            statusCode = 200
            dadosEstado = estado
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosEstado)

})

//Endpoint para listar os estados de uma região usando a região como parametro de busca
app.get('/regiao/:regiao', cors(), async (request, response, next) => {

    let regiaoEstado = request.params.regiao
    let statusCode
    let dadosEstado = {}

    if (regiaoEstado == '' || regiaoEstado == undefined || !isNaN(regiaoEstado)) {

        statusCode = 400
        dadosEstado.message = "Não foi possível processar, pois os dados de entrada (uf) que foi enviadoo não corresponde ao exigido. Confira o valor, pois não pode ser vazio, precisam ser caracteres e ter dois dígitos."

    } else {
        let estado = funcs.getEstadosRegiao(estadosCidades.estadosCidades, regiaoEstado)
        if (estado) {
            statusCode = 200
            dadosEstado = estado
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosEstado)

})

//EndPoint que lista informações dos estados que já foram (ou é) a capital do Brasil
app.get('/capital', cors(), async (request, response, next) => {

    let capital = funcs.getCapitalPais(estadosCidades.estadosCidades)
    let statusCode
    let dadosEstado = {}

    if (capital) {
        statusCode = 200
        dadosEstado = capital
    } else {
        statusCode = 500
    }

    response.status(statusCode)
    response.json(dadosEstado)

})

//Endpoint que lista todas as cidades de um estado filtrando pela sigla
app.get('/V1/cidades/estado/sigla/:uf', cors(), async (request, response, next) => {

    let siglaEstado = request.params.uf
    let statusCode
    let dadosEstado = {}

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {

        statusCode = 400
        dadosEstado.message = "Não foi possível processar, pois os dados de entrada (uf) que foi enviadoo não corresponde ao exigido. Confira o valor, pois não pode ser vazio, precisam ser caracteres e ter dois dígitos."

    } else {
        let cidade = funcs.getCidades(estadosCidades.estadosCidades, siglaEstado)
        if (cidade) {
            statusCode = 200
            dadosEstado = cidade
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosEstado)


})

app.get('/v2/senai/cidades', cors(), async (request, response, next) => {

    /*
        OBS: existem duas opções para receber variáveis para filtro.
            1 - params: permite receber a variável na estrutura da URL criada no EndPoint (utilizado para id (PK));
            2 - QueryString (ou Query, apenas): permite receber uma ou mais variáveis para realizar filtros avançados.
    */
    //Recebe uma variável encaminhada via QueryString

    let siglaEstado = request.query.uf
    let statusCode
    let dadosCidades = {}

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {

        statusCode = 400
        dadosEstado.message = "Não foi possível processar, pois os dados de entrada (uf) que foi enviadoo não corresponde ao exigido. Confira o valor, pois não pode ser vazio, precisam ser caracteres e ter dois dígitos."

    } else {
        let cidade = funcs.getCidades(estadosCidades.estadosCidades, siglaEstado)
        if (cidade) {
            statusCode = 200
            dadosCidades = cidade
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosCidades)

})

//roda o serviço da API par aficar aguardando requisições
app.listen(8080, () => {
    console.log('servidor aguardando requisões na porta 8080')
})
