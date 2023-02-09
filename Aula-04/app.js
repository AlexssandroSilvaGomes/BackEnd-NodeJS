/*
    Objetivo: Tabuada com estrutura de repetição
    Autor: Alexssandro
    Data: 09/02/2023
    Versão: 1.0
 */

var matematica = require('./modulo/tabuada.js')
var readline = require('readline');
const { stdin } = require('process');

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

console.log('\n ****** Tabuada ****** \n');

entradaDados.question('Digite o número da tabuada: ', function (multi) {

    let multiplicando = multi;

    entradaDados.question('Digite o número máximo da tabuada: ', function (maxMulti) {

        let maxMultiplicando = maxMulti;
        let resultado;

        if (multiplicando == '' || maxMultiplicando == '') {

            console.log('ERRO: Não é possível calcular se algum dado estiver em branco.');
            entradaDados.close();

        } else if (isNaN(multiplicando) || isNaN(maxMultiplicando)) {

            console.log('ERRO: Não é possível calcular se os dados digitados não forem números.');
            entradaDados.close();

        } else {

            resultado = matematica.TabuadaCalc(multiplicando, maxMultiplicando);
            if (resultado !== false) {

                console.log(resultado);

            } else {

                //Finaliza o objeto de entrada de dados (sai do programa)
                entradaDados.close();
            };

        }



    })

})