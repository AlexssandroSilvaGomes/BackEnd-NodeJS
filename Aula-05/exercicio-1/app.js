/*
    Objetivo: sistema que gerencie as médias escolares de uma universidade
    Autor: Alexssandro
    Data: 10/02/2023
    Versão: 1.0
*/

var calculoMedia = require('./modulo/media.js');
var calculoExame = require('./modulo/exame.js');
var readline = require('readline');

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})

console.log('\n ****** Média Escolar da Universidade XYZ ****** \n');

entradaDados.question('Nome do Aluno: \n', function (nomeAluno) {

    let aluno = nomeAluno;

    if (aluno == '') {

        console.log('ERRO: O espaço não pode estar em branco.');

    } else if (!(isNaN(aluno))) {

        console.log('ERRO: O espaço em branco só pode conter letras.');
        
    } else {

        entradaDados.question('Gênero do(a) Aluno(a): [ MASCULINO | FEMININO ] \n', function (generoAluno) {

            let genA = generoAluno.toUpperCase;

            if (genA == '') {

                console.log('ERRO: O espaço não pode estar em branco.');

            } else if (!(isNaN(genA))) {

                console.log('ERRO: O espaço em branco só pode conter letras.');

            } else {

                entradaDados.question('Nome do Professor: \n', function (nomeProfessor) {

                    let nomeProf = nomeProfessor;

                    if (nomeProf == '') {

                        console.log('ERRO: O espaço não pode estar em branco.');
                
                    } else if (!(isNaN(nomeProf))) {
                
                        console.log('ERRO: O espaço em branco só pode conter letras.');
                        
                    } else {

                        entradaDados.question('Gênero do(a) Professor(a): [ MASCULINO | FEMININO ] \n', function (generoProfessor) {

                            let genP = generoProfessor;

                            if (genP == '') {

                                console.log('ERRO: O espaço não pode estar em branco.');
                
                            } else if (!(isNaN(genP))) {
                
                                console.log('ERRO: O espaço em branco só pode conter letras.');
                
                            } else {

                                entradaDados.question('Nome do Curso: \n', function (nomeCurso) {

                                    let curso = nomeCurso;

                                    if (curso == '') {

                                        console.log('ERRO: O espaço não pode estar em branco.');
                                
                                    } else if (!(isNaN(curso))) {
                                
                                        console.log('ERRO: O espaço em branco só pode conter letras.');
                                        
                                    } else {

                                        entradaDados.question('Nome da Disciplina: \n', function (nomeDisciplina) {

                                            let nomeDisc = nomeDisciplina;

                                            if (nomeDisc == '') {

                                                console.log('ERRO: O espaço não pode estar em branco.');
                                        
                                            } else if (!(isNaN(nomeDisc))) {
                                        
                                                console.log('ERRO: O espaço em branco só pode conter letras.');
                                                
                                            } else {

                                                entradaDados.question('Digite a primeira nota: \n', function (nota1) {

                                                    let num1 = parseFloat(nota1.replace(',', '.'));

                                                    entradaDados.question('Digite a primeira nota: \n', function (nota2) {

                                                        let num2 = parseFloat(nota2.replace(',', '.'));

                                                        entradaDados.question('Digite a primeira nota: \n', function (nota3) {

                                                            let num3 = parseFloat(nota3.replace(',', '.'));

                                                            entradaDados.question('Digite a primeira nota: \n', function (nota4) {

                                                                let num4 = parseFloat(nota4.replace(',', '.'));
                                                                let resultado;
                                                                let status;
                                                                let proA;
                                                                let proP;

                                                                switch (genP) {
                                                                    case 'MASCULINO':
                                                                        
                                                                        proP = 'Professor';
                                                                        break;

                                                                    case 'FEMININO':

                                                                        proP = 'Professora';
                                                                        break;
                                                                
                                                                    default:
                                                                        break;
                                                                }

                                                                if (num1 == '' || num2 == '' || num3 == '' || num4 == '') {

                                                                    console.log('ERRO: As notas não podem estar em branco.');

                                                                } else if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {

                                                                    console.log('ERRO: As notas só podem conter letras.');

                                                                } else if (num1 < 0 || num1 > 100 || num2 < 0 || num2 > 100 || num3 < 0 || num3 > 100 || num4 < 0 || num4 > 100) {

                                                                    console.log('ERRO: As notas só podem ir de 0(zero) a 100(cem)!');

                                                                } else if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {

                                                                    console.log('ERRO: As notas precisam ser numéricas!');

                                                                } else {

                                                                    resultado = calculoMedia.mediaCalc(num1, num2, num3, num4);

                                                                    if (resultado >= 70) {

                                                                        switch (genA) {
                                                                            case 'MASCULINO':

                                                                                proA = 'O aluno';
                                                                                status = 'APROVADO';

                                                                                break;
                                                                            
                                                                            case 'FEMININO':

                                                                                proA = 'A aluna';
                                                                                status = 'APROVADA';

                                                                                break;

                                                                            default:
                                                                                break;  
                                                                        }

                                                                    } else if (resultado < 50) {

                                                                        switch (genA) {
                                                                            case 'MASCULINO':

                                                                                proA = 'O aluno';
                                                                                status = 'REPROVADO';

                                                                                break;
                                                                            
                                                                            case 'FEMININO':

                                                                                proA = 'A aluna';
                                                                                status = 'REPROVADA';

                                                                                break;

                                                                            default:
                                                                                break;  
                                                                        }

                                                                    } else if (resultado >= 50 && resultado < 70) {

                                                                        entradaDados.question('Nota do Exame: \n', function (valorExame) {

                                                                            let notaExame = valorExame;

                                                                            if (notaExame == '') {

                                                                                console.log('ERRO: O espaço não pode estar em branco.');
                                                                        
                                                                            } else if (isNaN(notaExame)) {
                                                                        
                                                                                console.log('ERRO: O espaço em branco só pode conter números.');
                                                                                
                                                                            } else {

                                                                                let resExame = calculoExame.mediaExame(resultado, notaExame);
                                                                                if (resExame >= 60) {

                                                                                    switch (genA) {
                                                                                        case 'MASCULINO':
            
                                                                                            proA = 'O aluno';
                                                                                            status = 'APROVADO';
            
                                                                                            break;
                                                                                        
                                                                                        case 'FEMININO':
            
                                                                                            proA = 'A aluna';
                                                                                            status = 'APROVADA';
            
                                                                                            break;
            
                                                                                        default:
                                                                                            break;  
                                                                                    }

                                                                                } else {

                                                                                    switch (genA) {
                                                                                        case 'MASCULINO':
            
                                                                                            proA = 'O aluno';
                                                                                            status = 'REPROVADO';
            
                                                                                            break;
                                                                                        
                                                                                        case 'FEMININO':
            
                                                                                            proA = 'A aluna';
                                                                                            status = 'REPROVADA';
            
                                                                                            break;
            
                                                                                        default:
                                                                                            break;  
                                                                                    }

                                                                                }

                                                                            }

                                                                        })

                                                                    } else {

                                                                        if (resultado !== false) {

                                                                            console.log(
                                                                                `${proA} ${aluno} foi ${status} na disciplina ${nomeDisc}.
                                                                                Curso: ${curso}
                                                                                ${proP}: ${nomeProf}
                                                                                Notas: ${num1}, ${num2}, ${num3}, ${num4}
                                                                                Média Final: ${resultado} \n`
                                                                            );
                                                                            entradaDados.close();
                                                            
                                                                        } else {
                                                            
                                                                            //Finaliza o objeto de entrada de dados (sai do programa)
                                                                            entradaDados.close();
                                                                        };

                                                                    }

                                                                }
            
                                                            })
        
                                                        })
    
                                                    })

                                                })

                                            }

                                        })

                                    }

                                })

                            }

                        })

                    }

                })

            }


        })
    }


})