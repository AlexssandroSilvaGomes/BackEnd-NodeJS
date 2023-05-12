/*
    Objetivo: responsável pela manipulação de dados dos alunos no banco de dados 
    Data: 14/04/2023
    Autor: Alexssandro da Silva Gomes
    Versão: 1.0
*/

const { response } = require('express')

//import da biblioteca do prisma client
const { PrismaClient } = require('@prisma/client')

//instancia da classe PrismaClient
const prisma = new PrismaClient()

//inserir dados do aluno no banco de dados
const insertAluno = async (dadosAluno) => {

    //ScriptSQL para inserir dados de um aluno no DB
    let sql = `insert into tbl_aluno (
                        nome, 
                        rg, 
                        cpf, 
                        data_nascimento, 
                        email
                        ) values (
                            '${dadosAluno.nome}',
                            '${dadosAluno.rg}',
                            '${dadosAluno.cpf}',
                            '${dadosAluno.data_nascimento}',
                            '${dadosAluno.email}'
                        )`

    let resultStatus = await prisma.$executeRawUnsafe(sql)

    //executa o script sql no BD
    if (resultStatus) {
        return true
    } else {
        return false
    }
}

//atualiza um aluno existente
const updateAluno = async (dadosAluno) => {
    //scriptsql para atualizar os dados no db
    let sql = `update tbl_aluno set
                        nome = '${dadosAluno.nome}',
                        rg = '${dadosAluno.rg}',
                        cpf = '${dadosAluno.cpf}',
                        data_nascimento = '${dadosAluno.data_nascimento}',
                        email = '${dadosAluno.email}'
                    where id = ${dadosAluno.id}
    `

    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if (resultStatus) {
        return true
    } else {
        return false
    }
}

//deletar um aluno existente
const deleteAluno = async (id) => {
    //scriptsql para atualizar os dados no db
    let sql = `delete from tbl_aluno where id = ${id}`

    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if (resultStatus) {
        return true
    } else {
        return false
    }
}

//retorna a lista de todos os alunos
const selectAllAlunos = async () => {

    //ScriptSQL para buscar todos os itens no DB
    let sql = 'select * from tbl_aluno'


    //$queryRawUnsafe(sql) - Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw(select * from tbl_aluno) - usa o comando diretamente

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //valida se o DB retornou algum registro
    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }

}

//retorna um aluno filtrando pelo id
const selectByIdAluno = async (id) => {

    let sql = 'select * from tbl_aluno where id=' + id
    let rsAlunoId = await prisma.$queryRawUnsafe(sql)

    if (rsAlunoId.length > 0) {
        return rsAlunoId
    } else {
        return false
    }
}

//retorna um aluno filtrando pelo nome
const selectByNomeAluno = async (nome) => {

    let sql = "select * from tbl_aluno where nome like '%" + nome + "%'"
    let rsAlunoNome = await prisma.$queryRawUnsafe(sql)

    if (rsAlunoNome.length > 0) {
        return rsAlunoNome
    } else {
        return false
    }

}

//retorna o ultimo id inserido no bd
const selectLastId = async () => {
    
    let sql = 'select * from tbl_aluno order by id desc limit 1;'

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }
}

module.exports = {
    selectAllAlunos,
    selectByIdAluno,
    selectByNomeAluno,
    insertAluno,
    updateAluno,
    deleteAluno,
    selectLastId
}