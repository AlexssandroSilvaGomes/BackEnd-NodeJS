/*
    Objetivo: calcular a média de 4 notas escolares
    Autor: Alexssandro
    Data: 27/01/2023
    Versão: 1.0
 */


//import da biblioteca readline
var readline = require('readline');

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDeDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

/*
    Criação de variáveis
    - var: escopo global, pode ser chamada de qualquer lugar e é mutável;
    - let: escopo local, só pode ser chamada dentro do escopo em que está e é mutável;
    - const: escopo local ou global, pode ser chamada dentro do escopo em que está ou não e não é mutável.
*/

//Função de callback para entrar o nome do aluno
entradaDeDados.question('Digite seu nome: \n', function (nome) {
    //Recebe o valor digitado pelo teclado
    let nomeAluno = nome;

    //Função de callback para entrar a nota1
    entradaDeDados.question('Digite a nota1: \n', function (nota1) {
        let valor1 = nota1;

        //Função de callback para entrar a nota2
        entradaDeDados.question('Digite a nota2: \n', function (nota2) {
            let valor2 = nota2;

            //Função de callback para entrar a nota3
            entradaDeDados.question('Digite a nota3: \n', function (nota3) {
                let valor3 = nota3;

                //Função de callback para entrar a nota4
                entradaDeDados.question('Digite a nota4: \n', function (nota4) {
                    let valor4 = nota4;

                    /*
                        Conversão de tipos de dados
                        - parseInt() ou Number.parseInt() ou Number: converte uma String em Inteiro;
                        - parseFloat() ou Number.parseFloat() ou Number: converte uma String em Real.

                        Operadores lógicos de comparação
                        == (verifica a igualdade entre conteúdos)
                        != (verifica a diferença entre conteúdos)
                        === (verifica a igualdade entre conteúdos e tipo de dado)
                        !== (verifica a diferença entre conteúdos e igualdade no tipo de dado)
                        ==! (verifica a igualdade entre conteúdos e diferença no tipo de dado)
                        < (verifica se o primeiro conteúdo é menor que o outro conteúdo)
                        <= (verifica se o primeiro conteúdo é menor ou igual ao outro conteúdo)
                        > (verifica se o primeiro conteúdo é maior que o outro conteúdo)
                        >= (verifica se o primeiro conteúdo é maior ou igual ao outro conteúdo)

                        Operadores lógicos
                        E        && AND
                        OU       || OR
                        NEGAÇÃO  !  NOT

                        Ordem de execução operadores lógicos
                        0 - ()
                        1 - !
                        2 - &&
                        3 - ||
                        
                    */

                    let somaNotas = parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4);
                    let media = somaNotas / 4;


                    //validação para entrada vazia
                    if (valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '') {

                        console.log('Todas as caixas precisam ser preenchidas!');

                        //validação para entrada de texto (inválida)
                    } else if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {

                        console.log('As notas precisam receber números, não textos!');

                    } else if (valor1 < 0 || valor1 > 10 || valor2 < 0 || valor2 > 10 || valor3 < 0 || valor3 > 10 || valor4 < 0 || valor4 > 10) {

                        console.log('Os números precisam estar entre 0 e 10!')

                    } else {

                        console.log('Digite seu nome: \n' + nome);
                        console.log('Digite sua nota 1: \n' + valor1);
                        console.log('Digite sua nota 2: \n' + valor2);
                        console.log('Digite sua nota 3: \n' + valor3);
                        console.log('Digite sua nota 4: \n' + valor4);
                        console.log(nome + ', sua média é: \n' + media.toFixed(2));
                        
                        if (media >= 7) {

                            console.log('Status: Aprovado! \n');

                        } else {

                            console.log('Status: Reprovado! \n');

                        }
                        

                    };

                });
            });
        });
    });
});