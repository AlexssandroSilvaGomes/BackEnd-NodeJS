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
    if(
        dadosAluno.nome == ''            || dadosAluno.nome == undefined            || dadosAluno.nome.length > 100           ||
        dadosAluno.rg == ''              || dadosAluno.rg == undefined              || dadosAluno.rg.length > 15              ||
        dadosAluno.cpf == ''             || dadosAluno.cpf == undefined             || dadosAluno.cpf.length > 18             ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == ''           || dadosAluno.email == undefined           || dadosAluno.email.length > 255
    ) {
        return message.ERROR_REQUIRED_FIELDS //status code 400
    } else {
        //envia os dados para a model inserir no BD
        let resultDadosALuno = await alunoDAO.insertAluno(dadosAluno)
        //valida se o banco de dados inseriu corretamente os dados
        if(resultDadosALuno) {
            return message.SUCCESS_CREATED_ITEM //status code 201
        } else {
            return message.ERROR_INTERNAL_SERVER //status code 500
        }
    }
}

//atualiza um aluno existente
const atualizarAluno = (dadosAluno) => {
    
}

//deletar um aluno existente
const deletarAluno = (id) => {
    
}

//retorna a lista de todos os alunos
const getAlunos = async () => {

    let dadosAlunosJSON = {}

    //chama a função do arquivo DAO que irá retornar todos os regustros do DB
    let dadosAluno = await alunoDAO.selectAllAlunos()

    if(dadosAluno) {
        //criando o json com o atributo alunos para encaminhar um array de alunos
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return false
    }

}

//retorna um aluno filtrando pelo id
const getBuscarAlunoId = async (id) => {
    let dadosAlunosJSON = {}

    let dadosAluno = await alunoDAO.selectByIdAluno(id)

    if(dadosAluno) {
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return false
    }
}

//retorna um aluno filtrando pelo id
const getAlunoNome = async (nome) => {
    let dadosAlunosJSON = {}

    let dadosAluno = await alunoDAO.selectByNomeAluno(nome)

    if(dadosAluno) {
        dadosAlunosJSON.quantidade = dadosAluno.length
        dadosAlunosJSON.alunos = dadosAluno
        return dadosAlunosJSON
    } else {
        return false
    }
}

module.exports = {
    getAlunos,
    getBuscarAlunoId,
    getAlunoNome,
    inserirAluno
}