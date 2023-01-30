/*
    Objetivo: calculadora que efetua as quatro operações básicas
    Autor: Alexssandro
    Data: 30/01/2023
    Versão: 1.0
 */

var readline = require('readline');
const { stdin } = require('process');

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});

console.log('\n ****** Calculadora ****** \n');
console.log('Escolha uma das opções a seguir: \n');
console.log('1 - Somar \n');
console.log('2 - Subtrair \n');
console.log('3 - Multiplicar \n');
console.log('4 - Dividir \n');

entradaDados.question('Escolha: ', function(opcao) {
    let operacao = opcao;

    if (isNaN(operacao) || operacao > 4 || operacao < 1) {

        console.log('Selecione umas das opções existentes!');

    } else {

        entradaDados.question('Digite o primeiro número: ', function(numero1) {
            let num1 = parseFloat(numero1.replace(",", "."));

            entradaDados.question('Digite o segundo número: ', function(numero2) {
                let num2 = parseFloat(numero2.replace(",", "."));

                if (num1 === '' || num2 === '') {

                    console.log('Não pode deixar espaços vazios!');

                } else if (isNaN(num1) || isNaN(num2)) {

                    console.log('Caractere inválido, digite um número!');

                } else {

                    let res;

                    if (operacao == 1) {

                        res = num1 + num2;

                    } else if (operacao == 2) {

                        res = num1 - num2;

                    } else if (operacao == 3) {

                        res = num1 * num2;

                    } else if (operacao == 4) {
                    
                        if (num1 == '0' || num2 == '0') {

                            res = 'Não é possível dividir um número por 0!';

                        } else {

                            res = num1 / num2;

                        };

                    };

                    console.log('O resultado é: ' + res);

                };

            });
        });

    };

})