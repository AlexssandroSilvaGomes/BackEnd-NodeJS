/*
    Objetivo: Tabuada com estrutura de repetição e gerenciadora de tabuadas
    Autor: Alexssandro
    Data: 13/02/2023
    Versão: 1.0
*/

const gerarTabuada = function (multiplicando, maxMultiplicador, tabuadaInicial, tabuadaFinal) {

    let multi = parseFloat(String(multiplicando).replace(',', '.'));
    let maxMulti = parseFloat(String(maxMultiplicador).replace(',', '.'));
    let tabInicial = parseFloat(tabuadaInicial);
    let tabFinal = parseFloat(tabuadaFinal);
    let status = true;

    if (multi == 0 || maxMulti == 0) {

        status = false;

    } else if (isNaN(multi) || isNaN(maxMulti) || isNaN(tabInicial) || isNaN(tabFinal)) {

        status = false;

    } else if (multi == '' || maxMulti == '' || tabInicial == '' || tabFinal == '') {

        status = false;

    } else if (multi < 1 || maxMulti > 50 || tabInicial < 2 || tabFinal > 100) {

        status = false;

    } else {

        let res;
        let resetMulti = multi;

        while (parseFloat(tabInicial) <= parseFloat(tabFinal)) {

            console.log(`\n Tabuada do ${tabInicial} \n`);

            multi = resetMulti;

            while (multi <= maxMulti) {
                res = multi * tabInicial;
                console.log(`${tabInicial} X ${multi} = ${res}\n`);

                multi += 1;
            }

            tabInicial += 1;

        }

    }

}

module.exports = {
    gerarTabuada
}