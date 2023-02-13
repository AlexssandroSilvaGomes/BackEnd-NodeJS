/*
    Objetivo: sistema que gerencia o cálculo de uma tabuada
    Autor: Alexssandro
    Data: 13/02/2023
    Versão: 1.0
*/

var tabuada = require('./modulo/tabuada.js')
var readline = require('readline');

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

console.log('\n ****** Gerador de tabuadas ****** \n')

entradaDados.question('Digite o multiplicando: ', function (multi) {

    let multiplicando = multi

    entradaDados.question('Digite o máximo multiplicador: ', function (maxMulti) {

        let maxMultiplicador = maxMulti

        entradaDados.question('Digite o número da tabuada inicial: ', function (tabInit) {

            let tabuadaInicial = tabInit

            entradaDados.question('Digite o número da tabuada final: ', function (tabFinal) {

                let tabuadaFinal = tabFinal
                let resultado = tabuada.gerarTabuada(multiplicando, maxMultiplicador, tabuadaInicial, tabuadaFinal)



            })
        })
    })
})