/*
    Objetivo: Tabuada com estrutura de repetição
    Autor: Alexssandro
    Data: 09/02/2023
    Versão: 1.0
 */

//retorna o processamento de uma tabuada qualquer até um contador qualquer
const TabuadaCalc = function (multiplicando, maxMultiplicador) {

    let tabuada = parseFloat(String(multiplicando).replace(',', '.'));
    let maxContador = parseFloat(String(maxMultiplicador).replace(',', '.'));
    let status = true;
    let cont = 0;
    let res;

    if (tabuada == 0 || maxContador == 0) {

        status = false;

    } else if (isNaN(tabuada) || isNaN(maxContador)) {

        status = false

    } else {

        // while (cont <= maxContador) {

        //     res = tabuada * cont;

        //     console.log(`${tabuada} X ${cont} = ${res}\n`);

        //     cont += 1;

        // }

        for (cont = 0; cont <= maxContador; cont += 1) {
            res = tabuada * cont;
            console.log(`${tabuada} X ${cont} = ${res}\n`);
        }

    }

    return status;
    
}

console.log(TabuadaCalc(5, 10))

module.exports = {
    TabuadaCalc
}