/*
    Objetivo: responsável pela regra de negócio referente ao CRUD de ALUNOS
    Data: 14/04/2023
    Autor: Alexssandro da Silva Gomes
    Versão: 1.0
*/

//import do arquivo de configuração das variáveis constanstes e funções
const message = require('./modulo/config.js')

//import do arquivo DAO para acessar dados do aluno no banco de dados
const alunoDAO = require('../model/DAO/alunoDAO.js')

//inserir um novo aluno
const inserirAluno = async (dadosAluno) => {
    //validação para tratar campos obrigatórios e quantidade de caracteres
    if (
        dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 255
    ) {
        return message.ERROR_REQUIRED_FIELDS //status code 400
    } else {
        //envia os dados para a model inserir no BD
        let resultDadosALuno = await alunoDAO.insertAluno(dadosAluno)
        //valida se o banco de dados inseriu corretamente os dados
        if (resultDadosALuno) {
            let novoAluno = await alunoDAO.selectLastId()
            let dadosAlunosJSON ={}
            dadosAlunosJSON.status = message.SUCCESS_CREATED_ITEM.status
            dadosAlunosJSON.message = message.SUCCESS_CREATED_ITEM.message
            dadosAlunosJSON.aluno = novoAluno
            return dadosAlunosJSON
        } else {
            return message.ERROR_INTERNAL_SERVER //status code 500
        }
    }
}

//atualiza um aluno existente
const atualizarAluno = async (dadosAluno, idAluno) => {
    //validação para tratar campos obrigatórios e quantidade de caracteres
    if (
        dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 255
    ) {
        return message.ERROR_REQUIRED_FIELDS //status code 400
    } else if (
        idAluno == '' || idAluno == undefined || isNaN(idAluno)
    ) {
        return message.ERROR_INVALID_ID //status code 400
    } else {
        //adiciona o id do aluno no JSON dos dados
        dadosAluno.id = idAluno

        let statusId = await alunoDAO.selectByIdAluno(idAluno)

        if(statusId) {
            let resultDadosALuno = await alunoDAO.updateAluno(dadosAluno)

            if (resultDadosALuno) {
                let alunoId = await alunoDAO.selectByIdAluno(idAluno)
                let dadosAlunosJSON ={}
                dadosAlunosJSON.status = message.SUCCESS_UPDATED_ITEM.status
                dadosAlunosJSON.message = message.SUCCESS_UPDATED_ITEM.message
                dadosAlunosJSON.aluno = alunoId
                return dadosAlunosJSON
            } else {
                return message.ERROR_INTERNAL_SERVER
            }
        } else {
            return message.ERROR_NOT_FOUND
        }

        
    }
}

//deletar um aluno existente
const deletarAluno = async (idAluno) => {

    let statusId = await alunoDAO.selectByIdAluno(idAluno)

    if(statusId) {
        let resultDadosALuno = await alunoDAO.deleteAluno(idAluno)

        if (resultDadosALuno) {
            return message.SUCCESS_DELETED_ITEM
        } else {
            return message.ERROR_INTERNAL_SERVER
        }
    } else {
        return message.ERROR_NOT_FOUND
    }

    
}


//retorna a lista de todos os alunos
const getAlunos = async () => {

    let dadosAlunosJSON = {}

    //chama a função do arquivo DAO que irá retornar todos os regustros do DB
    let dadosAluno = await alunoDAO.selectAllAlunos()

    if (dadosAluno) {
        //criando o json com o atributo alunos para encaminhar um array de alunos
        dadosAlunosJSON.status = message.SUCCESS_SUCCESS_REQUEST.status
        dadosAlunosJSON.message = message.SUCCESS_SUCCESS_REQUEST.message
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return message.ERROR_NOT_FOUND
    }

}

//retorna um aluno filtrando pelo id
const getBuscarAlunoId = async (idALuno) => {
    let dadosAlunosJSON = {}

    if (
        idAluno == '' || idAluno == undefined || isNaN(idAluno)
    ) {
        return message.ERROR_INVALID_ID //status code 400
    } else {
        let dadosAluno = await alunoDAO.selectByIdAluno(idAluno)

        if (dadosAluno) {
            dadosAlunosJSON.status = message.SUCCESS_SUCCESS_REQUEST.status
            dadosAlunosJSON.message = message.SUCCESS_SUCCESS_REQUEST.message
            dadosAlunosJSON.alunos = dadosAluno
            return dadosAlunosJSON
        } else {
            return message.ERROR_ID_NOT_FOUND
        }
    }
}

//retorna um aluno filtrando pelo id
const getAlunoNome = async (nome) => {
    let dadosAlunosJSON = {}

    let dadosAluno = await alunoDAO.selectByNomeAluno(nome)

    if (dadosAluno) {
        dadosAlunosJSON.status = message.SUCCESS_SUCCESS_REQUEST.status
        dadosAlunosJSON.message = message.SUCCESS_SUCCESS_REQUEST.message
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return message.ERROR_NOT_FOUND
    }
}

module.exports = {
    getAlunos,
    getBuscarAlunoId,
    getAlunoNome,
    inserirAluno,
    atualizarAluno,
    deletarAluno
}