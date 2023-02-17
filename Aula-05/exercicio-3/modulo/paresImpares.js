/*
    Objetivo: sistema que realiza a separação de números pares e ímpares
    Autor: Alexssandro
    Data: 13/02/2023
    Versão: 1.0
*/

const gerarParImpar = (menorNumero, maiorNumero, tipoSeparacao) => {

    let menorNum = parseInt(menorNumero)
    let maiorNum = parseInt(maiorNumero)
    let separacao = parseInt(tipoSeparacao)
    let status = true;


    if (menorNum === '' || maiorNum === '' || separacao == '') {

        status = false
        console.log('ERRO: A entrada não pode estar em branco.')

    } else if (isNaN(menorNum) || isNaN(maiorNum) || isNaN(separacao)) {

        status = false
        console.log('ERRO: A entrada só pode conter números inteiros.')

    } else if (menorNum < 0 || menorNum > 500 || maiorNum < 100 || maiorNum > 1000 || separacao < 1 || separacao > 3) {

        status = false
        console.log('ERRO: Os valores tem limitações. O menor número vai de 0 a 500, o maior número vai de 100 a 1000 e por fim, a separação é um número de 1 a 3!')

    } else if (menorNum > maiorNum) {

        status = false
        console.log('ERRO: O menor número não pode ser maior que o maior número!')

    } else if (menorNum == maiorNum) {

        status = false
        console.log('ERRO: As estradas precisar receber números diferentes!')

    } else {

        let qtdNumPar = 0
        let qtdNumImpar = 0

        let num = menorNum

        if (separacao == 1) {

            console.log('\nlista de números pares\n')

            while (num <= maiorNum) {

                if ((num % 2) == 0) {

                    console.log(num)
                    qtdNumPar += 1
                }

                num += 1;

            }

            console.log('Quantidade de números encontrados: ' + qtdNumPar + '\n')

        } else if (separacao == 2) {

            console.log('lista de números impares\n')

            num = menorNum

            while (num <= maiorNum) {

                if ((num % 2) != 0) {

                    console.log(num)
                    qtdNumImpar += 1
                }

                num += 1;

            }

            console.log('\nQuantidade de números encontrados: ' + qtdNumImpar + '\n')

        } else {

            console.log('\nlista de números pares\n')

            while (num <= maiorNum) {

                if ((num % 2) == 0) {

                    console.log(num)
                    qtdNumPar += 1
                }

                num += 1;

            }

            console.log('Quantidade de números encontrados: ' + qtdNumPar + '\n')

            console.log('lista de números impares\n')

            num = menorNum

            while (num <= maiorNum) {

                if ((num % 2) != 0) {

                    console.log(num)
                    qtdNumImpar += 1
                }

                num += 1;

            }

            console.log('\nQuantidade de números encontrados: ' + qtdNumImpar + '\n')
        }
    }


}

module.exports = {
    gerarParImpar
}