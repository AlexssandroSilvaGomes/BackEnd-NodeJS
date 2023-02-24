/*
    Objetivo: utilizar códigos e métodos de arrays
    Data: 24/02/23
    Autor: Alexssandro
    Versão: 1.0
*/

// [] - representação do objeto do tipo array
// {} - representação do objeto do tipo json

const listaNomes = ['José', 'Maria', 'Luiz', 'Antônio', 'Ana', 'Carlos']
const listaProdutos = ['mouse', 'teclado', 'monitor', 'gabinete', 'HD', 'memória']


const exibindoDadosArray = () => {
    //Verifica o tipo de dado de um índice
    console.log(typeof (listaNomes[0]))

    //Exibe o conteúdo de um índice
    console.log(listaNomes[0])

    //Exibe todos os itens do array
    console.log(listaNomes)

    //Table - permite visualizar o conteudo do array em formato de tabela
    console.table(listaNomes)

    //length - retorna numericamente a quantidade de itens de um array
    console.log(listaNomes.length)

    //Percorrendo um array com while
    let cont = 0
    let qtdeitens = listaNomes.length

    while (cont < qtdeItens) {

        console.log(`O nome do aluno(a) é:  ${listaNomes[cont]}`)

        cont += 1

    }

    //percorrendo um array com for
    for (let cont = 0; cont < qtdeitens; cont++) {

        console.log(`O nome do aluno(a) é: ${listaNomes[cont]}`)

    }

    //percorrendo um array com for each
    listaNomes.forEach((nome) => {

        console.log(`O nome do aluno(a) é: ${nome}`)

    });

    // ou (usando o for)

    for (item in listaNomes) {

        console.log(`O nome do aluno(a) é: ${listaNomes[item]}`)

    }
}

const manipulandoDadosArray = () => {

    //push - acrescenta elementos no final de um array
    listaProdutos.push('memória')
    listaProdutos.push('gabinete', 'WebCam', 'fone')
    console.table(listaProdutos)

    //unshift - acrescenta elementos no começo de um array
    listaProdutos.unshift('HD', 'placa-mãe', 'SSD')
    console.table(listaProdutos)

    //pop - remove o ultimo elemento de um array
    listaProdutos.pop()
    console.table(listaProdutos)

    //shift - remove o primeiro elemento de um array
    listaProdutos.shift()
    console.table(listaProdutos)

    //slice - permite a criação de uma réplica de outro array
    const novosProdutos = listaProdutos.slice()
    console.table(novosProdutos)

    //indexOf - permite buscar um elemento dentro de um array, retornando seu indice. 
        //Se o retorno for -1, o item não foi encontrado.
    console.log(listaProdutos.indexOf('mouse'))

    //Exemplo de utilização do indexOf
    if (listaProdutos.indexOf('teclado') >= 0) {

        console.log('Item encontrado!')
        
    } else {

        console.log('Item não encontrado!')

    }

}

const removerProduto = (nomeProduto) => {

    let nome = nomeProduto
    let indice = listaProdutos.indexOf(nome)
    let status

    //splice - permite apagar um ou mais elementos de um array através do indice
        //Se for declarado somente o indice como argumento, ele por padrão apagará todos os elementos conseguintes
    if (indice >= 0) {

        listaProdutos.splice(indice, 1)
        status = true

    } else {

        status = false

    }

    return status

}

// console.table(listaProdutos)
// console.log(removerProduto('pc'))
// console.log(removerProduto('mouse'))
// console.table(listaProdutos)

const remove = (lista, nomeProduto) => {

    let nome = nomeProduto
    let listaItemRemovido = lista.slice()
    let indice = listaItemRemovido.indexOf(nome)
    let status

    if (indice >= 0) {

        listaItemRemovido.splice(indice, 1)
        status = true

    } else {

        status = false

    }

    if (status) {
        return listaProdutos
    } else {
        return false
    }
}

console.log(remove(listaProdutos, 'mouse'))

