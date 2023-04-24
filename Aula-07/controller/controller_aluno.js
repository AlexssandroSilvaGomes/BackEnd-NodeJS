/*
    Objetivo: responsável pela regra de negócio referente ao CRUD de ALUNOS
    Data: 14/04/2023
    Autor: Alexssandro da Silva Gomes
    Versão: 1.0
*/

//import do arquivo DAO para acessar dados do aluno no banco de dados
let alunoDAO = require('../model/DAO/alunoDAO.js')

//inserir um novo aluno
const novoAluno = (dadosAluno) => {

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
    getAlunoNome
}