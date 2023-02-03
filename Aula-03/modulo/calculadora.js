/*
    Objetivo: Arquivo de funções para cálculos matemáticos
    Autor: Alexssandro
    Data: 03/02/2023
    Versão: 1.0
 */

//Função para reaçizar cálculos matemáticos (SOMAR, SUBTRAIR, MULTIPLICAR e DIVIDIR)
function calculadora(numero1, numero2, tipoCalculo) {

    let valor1 = parseFloat(numero1);
    let valor2 = parseFloat(numero2);
    let operacao = tipoCalculo.toUpperCase();
    let resultado;

    if (operacao == 'SOMAR') {

        resultado = valor1 + valor2;

    } else if (operacao == 'SUBTRAIR') {

        resultado = valor1 - valor2;

    } else if (operacao == 'MULTIPLICAR') {

        resultado = valor1 * valor2;

    } else if (operacao == 'DIVIDIR') {

        if (valor2 == 0) {

            console.log('ERRO: Não é possível realizar a divisão por 0');

        } else {

            resultado = parseFloat(valor1) / parseFloat(valor2);
            //Finaliza o objeto de entrada de dados (sai do programa)
            entradaDados.close();

        };

    } else {

        console.log('ERRO: A escolha de operação foi inválida!');

    };


    //Validação para tratar quando a variável resultado não for processada por algum problema
    if (resultado == undefined) {

        return false;

    } else {

        return resultado;

    }
}

module.exports = {
    calculadora
}