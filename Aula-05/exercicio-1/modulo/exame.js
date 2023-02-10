/*
    Objetivo: sistema que calcula media de exame escolar
    Autor: Alexssandro
    Data: 10/02/2023
    Versão: 1.0
*/

const mediaExame = function (valorMedia, valorExame) {

    let antigaMedia = parseFloat(String(valorMedia).replace(',', '.'));
    let exameNota = parseFloat(String(valorExame).replace(',', '.'));
    let status = true;

    let mediaExame = (antigaMedia + exameNota) / 2;

    if (antigaMedia < 0 || antigaMedia > 100 || exameNota < 0 || exameNota > 100) {

        status = false;

    } else if (isNaN(antigaMedia) || isNaN(exameNota)) {

        status = false;

    } else {
    
        console.log(mediaExame);

    }

    return status;

}

module.exports = {
    mediaExame
}