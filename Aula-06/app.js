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

/*
    JSON é composto por: chave (atributo) valor

    {nome : 'José', celular : '119123123', email : 'josé@gmail.com'}


*/



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
        return listaItemRemovido
    } else {
        return false
    }
}

// console.log(remove(listaProdutos, 'mouse'))

const listagemProdutos = () => {

    //Forma n1 de criar um JSON e já atribuir chaves e valores
    // let listProdutosJSON = {produtos : listaProdutos, clientes : listaNomes}

    //Forma n2 de criar um JSON, onde as chaves e valores são atribuidas no decorrer do projeto
    // let listProdutosJSON = {}
    // listProdutosJSON.produtos = listaProdutos
    // listProdutosJSON.clientes = listaNomes

    // //Extraindo valores de um JSON e ARRAY
    // console.log(listProdutosJSON)
    // console.log(listProdutosJSON.produtos[1])
    // console.log(listProdutosJSON.clientes[1])

    let listProdutosJSON = {}
    let listProdutosArray = [
        {
            nome: 'Monitor',
            quantidade: 300,
            marca: 'DELL',
            valor: 1000,
            descricao: 'Monitor DELL...',
            codigo: 1
        },
        {
            nome: 'Monitor',
            quantidade: 280,
            marca: 'LG',
            valor: 1400,
            descricao: 'Monitor LG...',
            codigo: 2
        },
        {
            nome: 'Teclado',
            quantidade: 800,
            marca: 'Redragon',
            valor: 500,
            descricao: 'Teclado RGB Redragon...',
            codigo: 3
        },
        {
            nome: 'Teclado',
            quantidade: 200,
            marca: 'Logitech',
            valor: 250,
            descricao: 'Teclado office logitech...',
            codigo: 4
        },
        {
            nome: 'Teclado',
            quantidade: 340,
            marca: 'LG',
            valor: 120,
            descricao: 'Teclado LG...',
            codigo: 5
        },
        {
            nome: 'Teclado',
            quantidade: 100,
            marca: 'Razer',
            valor: 2500,
            descricao: 'Teclado Razer...',
            codigo: 6
        },
        {
            nome: 'Mouse',
            quantidade: 400,
            marca: 'Logitech',
            valor: 345,
            descricao: 'Mouse logitech...',
            codigo: 7
        },
        {
            nome: 'Mouse',
            quantidade: 1200,
            marca: 'Razer',
            valor: 800,
            descricao: 'Mouse Razer...',
            codigo: 8
        }
    ]

    //arrays para cores
    let listCoresDellArray = ['Preto', 'Cinza', 'Branco']
    let listCoresLgArray = ['Preto', 'Cinza']
    let listCoresTecladoArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul']
    let listCoresMouseArray = ['Preto', 'Branco', 'Azul', 'Verde', 'Rosa', 'Roxo', 'Amarelo', 'Vermelho']

    //arrays para modelos
    let listModelosMonitor = ['LCD', 'LED', 'OLED', '4k', 'IPS']
    let listModelosTeclados = ['Mecânico', 'Semi-mecânico', 'Membrana', 'Óptico']

    listProdutosJSON.produtos = listProdutosArray

    //Adicionar cores ao monitor dell
    listProdutosJSON.produtos[0].cores = listCoresDellArray

    //Adicionar cores ao monitor lg
    listProdutosJSON.produtos[1].cores = listCoresLgArray

    //Adicionar modelos aos teclados
    listProdutosJSON.produtos[0].modelos = listModelosMonitor
    listProdutosJSON.produtos[1].modelos = listModelosMonitor

    //Adicionar cores aos teclados
    listProdutosJSON.produtos[2].cores = listCoresTecladoArray
    listProdutosJSON.produtos[3].cores = listCoresTecladoArray
    listProdutosJSON.produtos[4].cores = listCoresTecladoArray
    listProdutosJSON.produtos[5].cores = listCoresTecladoArray
    //Adicionar modelos aos teclados
    listProdutosJSON.produtos[2].modelos = listModelosTeclados
    listProdutosJSON.produtos[3].modelos = listModelosTeclados
    listProdutosJSON.produtos[4].modelos = listModelosTeclados
    listProdutosJSON.produtos[5].modelos = listModelosTeclados

    //Adicionar cores aos teclados
    listProdutosJSON.produtos[6].cores = listCoresMouseArray
    listProdutosJSON.produtos[7].cores = listCoresMouseArray

    // //mostrando atributos do monitor LG
    // console.log('Nome: ' + listProdutosJSON.produtos[1].nome)
    // console.log('Marca: ' + listProdutosJSON.produtos[1].marca)
    // console.log('Valor: ' + listProdutosJSON.produtos[1].valor)
    // console.log('Cor: ' + listProdutosJSON.produtos[1].cores[1])
    // console.log('Modelo: ' + listProdutosJSON.produtos[1].modelos[3])

    let limiteProduto = listProdutosArray.length
    console.log(listProdutosArray.produtos.cores.length)

    for (let i = 0; i < limiteProduto; i++) {

        console.log('Nome: ' + listProdutosJSON.produtos[i].nome)
        console.log('Marca: ' + listProdutosJSON.produtos[i].marca)
        console.log('Valor: ' + listProdutosJSON.produtos[i].valor)

        console.log(listProdutosJSON.produtos[i].cores.length)

    }

}

listagemProdutos()
