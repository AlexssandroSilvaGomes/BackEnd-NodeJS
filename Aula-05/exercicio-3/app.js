/*
    Objetivo: sistema que gerencia números pares e ímpares
    Autor: Alexssandro
    Data: 13/02/2023
    Versão: 1.0
*/

var calcular = require('./modulo/paresImpares.js')
var readline = require('readline')

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

console.log('\n ****** Gerador de Pares e Ímpares ****** \n')

console.log('Selecione o que pretende calcular:')
console.log('1 - Calcular apenas números pares')
console.log('2 - Calcular apenas números ímpares')
console.log('3 - Calcular números pares e ímpares')

entradaDados.question('Número pretendido: ', function (tipoSeparacao) {

    let tipoSep = tipoSeparacao

    entradaDados.question('Digite o menor número da lista: ', function (menorNum) {

        let menorNumero = menorNum

        entradaDados.question('Digite o maior número da lista: ', function (maiorNum) {

            let maiorNumero = maiorNum
            let resultado

            resultado = calcular.gerarParImpar(menorNumero, maiorNumero, tipoSep)

        })

    })

})

