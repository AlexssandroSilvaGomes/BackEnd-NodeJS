/*
    Objetivo: responsável pela manipulação de dados dos alunos no banco de dados 
    Data: 14/04/2023
    Autor: Alexssandro da Silva Gomes
    Versão: 1.0
*/

//import da biblioteca do prisma client
let { PrismaClient } = require('@prisma/client')
const { response } = require('express')
    
//instancia da classe PrismaClient
let prisma = new PrismaClient()

//inserir dados do aluno no banco de dados
const insertAluno = (dadosAluno) => {

}

//atualiza um aluno existente
const updateAluno = (dadosAluno) => {

}

//deletar um aluno existente
const deleteAluno = (id) => {

}

//retorna a lista de todos os alunos
const selectAllAlunos = async () => {
    
    //ScriptSQL para buscar todos os itens no DB
    let sql = 'select * from tbl_aluno'
    

    //$queryRawUnsafe(sql) - Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw(select * from tbl_aluno) - usa o comando diretamente

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //valida se o DB retornou algum registro
    if(rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }

}

//retorna um aluno filtrando pelo id
const selectByIdAluno = async (id) => {
    
    let sql = 'select * from tbl_aluno where id=' + id
    let rsAlunoId = await prisma.$queryRawUnsafe(sql)

    if(rsAlunoId.length > 0) {
        return rsAlunoId
    } else {
        return false
    }
}

//retorna um aluno filtrando pelo nome
const selectByNomeAluno = async (nome) => {

    let sql = "select * from tbl_aluno where nome like '%" + nome + "%'"
    let rsAlunoNome = await prisma.$queryRawUnsafe(sql)

    if(rsAlunoNome.length > 0) {
        return rsAlunoNome
    } else {
        return false
    }

}

module.exports = {
    selectAllAlunos,
    selectByIdAluno,
    selectByNomeAluno
}