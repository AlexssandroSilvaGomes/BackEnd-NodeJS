/*
    Objetivo: sistema que calcula media escolar
    Autor: Alexssandro
    Data: 10/02/2023
    Versão: 1.0
*/

const mediaCalc = function (nota1, nota2, nota3, nota4) {

    let num1 = parseFloat(String(nota1).replace(',', '.'));
    let num2 = parseFloat(String(nota2).replace(',', '.'));
    let num3 = parseFloat(String(nota3).replace(',', '.'));
    let num4 = parseFloat(String(nota4).replace(',', '.'));
    let status = true;

    if (num1 < 0 || num1 > 100 || num2 < 0 || num2 > 100 || num3 < 0 || num3 > 100 || num4 < 0 || num4 > 100) {

        status = false;

    } else if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {

        status = false;

    } else {

        let somaNotas = num1 + num2 + num3 + num4;
        let media = somaNotas / 4;

        console.log(media)

    };

    return status;

}

module.exports = {
    mediaCalc
};