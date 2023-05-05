/*
    Objetivo: Arquivo responsável por padronizar as mensagens de ERRO, SUCESSO, funções, variáveis(...) para o projeto 
    Data: 28/04/2023
    Autor: Alexssandro da Silva Gomes
    Versão: 1.0
*/



/*  MENSAGENS DE ERRO */
const ERROR_REQUIRED_FIELDS = {status: 400, message: 'Campos obrigatórios não foram preenchidos!'}
const ERROR_INTERNAL_SERVER = {status: 500, message: 'Devido a um erro interno no servidor, não foi possível processar a requisição.'}

/*  MENSAGENS DE SUCESSO */
const SUCCESS_CREATED_ITEM = {status: 201, message: 'item criado com sucesso!'}
const SUCCESS_UPDATED_ITEM = {status: 200, message: 'Item atualizado com sucesso.'}
const SUCCESS_DELETED_ITEM = {status: 200, message: 'Item apagado com sucesso.'}

/*  MENSAGENS DE ERRO NO ID */
const ERROR_INVALID_ID = {status: 400, message: 'O id informado na requisição não é valido ou não foi encaminhado.'}
const ERROR_ID_NOT_FOUND = {status: 404, message: 'O id informado na requisição é valido, mas não consta no banco de dados.'}

/*  MENSAGENS DE ERRO NA REQUISIÇÃO */
const ERROR_INVALID_CONTENT_TYPE = {status: 415, message: 'O tipo de midia content type da silicitação não é compatível com o servidor. Tipo aceito: [application/json]'}

module.exports = {
    ERROR_REQUIRED_FIELDS,
    ERROR_INTERNAL_SERVER,
    SUCCESS_CREATED_ITEM,
    SUCCESS_UPDATED_ITEM,
    SUCCESS_DELETED_ITEM,
    ERROR_INVALID_ID,
    ERROR_ID_NOT_FOUND,
    ERROR_INVALID_CONTENT_TYPE
}