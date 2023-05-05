/*
    Objetivo: api para integração entre back e banco de dados (GET, POST, PUT, DELETE) 
    Data: 14/04/2023
    Autor: Alexssandro da Silva Gomes
    Versão: 1.0
*/


/*
    Instalação do prisma no projeto (biblioteca para conexão com DB)

    npm install prisma --save
    npx prisma (verifica se o prisma foi instalado)
    npx prisma init (inicia o prisma)
    npm install @prisma/client --save (instala o cliente do prisma)

    npx prisma migrate dev

*/

//import das bibliotecas para a api
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { response } = require('express')
const controller_aluno = require('./controller/controller_aluno.js')

const message = require('./controller/modulo/config.js')

//cria o objeto app conforme a classe do express
const app = express()

//define os dados que irão chegar no body da requisição será no padrão JSON
const bodyParserJSON = bodyParser.json()

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
app.get('/v1/lion-school/aluno', cors(), async (request, response) => {

    //import do arquivo da controller que irá solicitar a model dos dados do DB
    let controllerAluno = require('./controller/controller_aluno.js')

    //recebe os dados da controller do aluno
    let dadosAluno = await controllerAluno.getAlunos()

    //valida se existe registro de aluno
    if (dadosAluno) {
        response.json(dadosAluno)
        response.status(200)
    } else {
        response.json()
        response.status(404)
    }
})

//endpoint: retorna todos os dados de alunos filtrando pelo id
app.get('/v1/lion-school/aluno/:id', cors(), async (request, response) => {
    let id = request.params.id
    let statusCode
    let dadosAluno = {}

    if (id == '' || id == undefined || id.length < 0 || isNaN(id)) {
        statusCode = 400
        dadosAluno.message = "Não foi possível processar, pois os dados de entrada (id) que foi enviado não corresponde ao exigido. Confira o valor, pois não pode ser vazio, precisam ser caracteres e ter dois dígitos."
    } else {
        let dadosAlunoId = await controller_aluno.getBuscarAlunoId(id)
        if (dadosAlunoId) {
            statusCode = 200
            dadosAluno = dadosAlunoId
        } else {
            statusCode = 404
        }
    }

    response.status(statusCode)
    response.json(dadosAluno)

})

app.get('/v1/lion-school/aluno/nome/:nome', cors(), async (request, response) => {
    let nome = request.params.nome
    let statusCode
    let dadosAluno = {}

        let dadosAlunoNome = await controller_aluno.getAlunoNome(nome)
        if (dadosAlunoNome) {
            statusCode = 200
            dadosAluno = dadosAlunoNome
        } else {
            statusCode = 404
        }
    
    response.status(statusCode)
    response.json(dadosAluno)
    
})

//endpoint: insere um aluno(dado) novo
app.post('/v1/lion-school/aluno', cors(), bodyParserJSON, async (request, response) => {
    //recebe o content type da requisição
    let contentType = request.headers['content-type']

    //validação para receber dados apenas no formato JSON
    if (String(contentType).toLowerCase() == 'application/json') {
        //recebe os dados encaminhados na requisição
        let dadosBody = request.body

        let resultDadosAluno = await controller_aluno.inserirAluno(dadosBody)

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)
    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }

})

//endpoint: atualiza um aluno existente, filtrando pelo id
app.put('/v1/lion-school/aluno/:id', cors(), bodyParserJSON, async (request, response) => {
    //recebe o content type da requisição
    let contentType = request.headers['content-type']

    //validação para receber dados apenas no formato JSON
    if (String(contentType).toLowerCase() == 'application/json') {

        //recebe o id do aluno pelo paramentro
        let idAluno = request.params.id
        //recebe os dadso aluno encaminhado no corpo da requisição
        let dadosBody = request.body

        let resultDadosAluno = await controller_aluno.atualizarAluno(dadosBody, idAluno)

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)

    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }

})

//endpoint: exclui um aluno, filtrando pelo id
app.delete('/v1/lion-school/aluno/:id', cors(), async (request, response) => {

    let id = request.params.id

    let resultDadosAluno = await controller_aluno.deletarAluno(id)

    response.status(resultDadosAluno.status)
    response.json(resultDadosAluno)
})

app.listen(8080, () => {
    console.log('rodo')
})

