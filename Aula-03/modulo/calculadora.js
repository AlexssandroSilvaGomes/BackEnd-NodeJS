/*
    Objetivo: Arquivo de funções para cálculos matemáticos
    Autor: Alexssandro
    Data: 03/02/2023
    Versão: 1.0
 */

//Função para reaçizar cálculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR e DIVIDIR)
//Forma -1 de criar uma função (tradicional)
function calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = parseFloat(numero1);
    let valor2 = parseFloat(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;
    let status = true;

    // if (operacao == 'SOMAR') {

    //     resultado = valor1 + valor2;

    // } else if (operacao == 'SUBTRAIR') {

    //     resultado = valor1 - valor2;

    // } else if (operacao == 'MULTIPLICAR') {

    //     resultado = valor1 * valor2;

    // } else if (operacao == 'DIVIDIR') {

    //     if (valor2 == 0) {

    //         console.log('ERRO: Não é possível realizar a divisão por 0');
    //         status = false;

    //     } else {

    //         resultado = parseFloat(valor1) / parseFloat(valor2);

    //     };

    // } else {

    //     console.log('ERRO: A escolha de operação foi inválida!');
    //     status = false;

    // };

    switch (operacao) {

        case 'SOMAR':

            resultado = valor1 + valor2;
            break;

        case 'SUBTRAIR':

            resultado = valor1 - valor2;
            break;

        case 'MULTIPLICAR':

            resultado = valor1 * valor2;
            break;

        case 'DIVIDIR':

            if (valor2 == 0) {

                console.log('ERRO: Não é possível realizar a divisão por 0');
                status = false;

            } else {

                resultado = parseFloat(valor1) / parseFloat(valor2);

            };
            break;

        default:
            console.log('ERRO: A escolha de operação foi inválida!');
            status = false;
            break;

    }


    //Validação para tratar quando a variável resultado não for processada por algum problema
    if (resultado == undefined && status == false) {

        return false;

    } else {

        return resultado;

    }
}

//Forma 02 de criar uma função (é uma das mais utilizadas)
const calculadora = function (){
}

//Forma 03 de criar uma função (modelo chamado de arrow function)
const SOMAR = (valor1, valor2) => valor1 + valor2;
const SUBTRAIR = (valor1, valor2) => valor1 - valor2;
const MULTIPLICAR = (valor1, valor2) => valor1 * valor2;
const dIVIDIR = (valor1, valor2) => valor1 / valor2;

module.exports = {
    calculadora
}