/*
    Objetivo: calculadora que efetua as quatro operações básicas - VERSÃO DO PROFESSOR
    Autor: Alexssandro
    Data: 03/02/2023
    Versão: 1.0
 */

var matematica = require('./modulo/calculadora.js')

var readline = require('readline');
const { endianness } = require('os');
var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

entradaDados.question('valor: \n', function (numero1) {

    let valor1 = numero1.replace(',', '.');

    entradaDados.question('valor: \n', function (numero2) {

        let valor2 = numero2.replace(',', '.');

        entradaDados.question('Escolha uma operação matemática: [ SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR ] \n', function (tipoCalculo) {

            let operacao = tipoCalculo;
            let resultado;

            if (valor1 == '' || valor2 == '' || operacao == '') {

                console.log('ERRO: Não é possível calcular se algum dado estiver em branco.');

            } else if (isNaN(valor1) || isNaN(valor2)) {

                console.log('ERRO: Não é possível calcular se os dados digitados não forem números.');

            } else {

                resultado = matematica.calculadora(valor1, valor2, operacao);
                if (resultado !== false) {

                    console.log(resultado);

                } else {

                    //Finaliza o objeto de entrada de dados (sai do programa)
                    entradaDados.close();
                };

            };

        });

    });

});

