const estadosCidades = require('../estados_cidades.js')

const getListaDeEstados = (lista) => {

    let listaEstados = {}
    let listaUfArray = []
    let status = true

    if (lista != undefined) {

        lista.estados.forEach((uf) => {

            listaUfArray.push(uf.sigla)

        });

        listaEstados.uf = listaUfArray
        listaEstados.quantidade = listaUfArray.length

    } else {

        status = false

    }

    if (status) {

        return listaEstados

    } else {

        return status

    }


}

// console.log(getListaDeEstados(estadosCidades.estadosCidades))

const getDadosEstado = (lista, siglaEstado) => {

    let listaEstados = {}
    let status = false

    lista.estados.forEach((estado) => {

        if (estado.sigla == siglaEstado && estado.sigla != undefined) {

            listaEstados.uf = estado.sigla
            listaEstados.descricao = estado.nome
            listaEstados.capital = estado.capital
            listaEstados.regiao = estado.regiao
            status = true

        }

    })



    if (status) {

        return listaEstados

    } else {

        return status

    }

}

// console.log(getDadosEstado(estadosCidades.estadosCidades, 'SP'))

const getCapitalEstado = (lista, siglaEstado) => {

    let listaEstados = {}
    let status = false

    lista.estados.forEach((estado) => {

        if (estado.sigla == siglaEstado && estado.sigla != undefined) {

            listaEstados.uf = estado.sigla
            listaEstados.descricao = estado.nome
            listaEstados.capital = estado.capital
            status = true

        }

    })



    if (status) {

        return listaEstados

    } else {

        return status

    }

}

// console.log(getCapitalEstado(estadosCidades.estadosCidades, "AC"))

const getEstadosRegiao = (lista, regiao) => {
    let listaEstados = {}
    let listaRegiaoArray = []
    let status = false

    lista.estados.forEach((estado) => {

        if (estado.regiao == regiao && estado.regiao != undefined) {

            let listEstadosRegiao = {}

            listEstadosRegiao.uf = estado.sigla
            listEstadosRegiao.descricao = estado.nome
            listaRegiaoArray.push(listEstadosRegiao)


            status = true

        }

    })

    listaEstados.regiao = regiao
    listaEstados.estados = listaRegiaoArray

    if (status) {

        return listaEstados

    } else {

        return status

    }
}

// console.log(getEstadosRegiao(estadosCidades.estadosCidades, "Sul"))

const getCapitalPais = (lista) => {

    let listaEstados = {}
    let listaCapitalArray = []
    let status = false

    lista.estados.forEach((estado) => {

        if (estado.capital_pais != undefined) {

            let listEstadosCapital = {}

            listEstadosCapital.capital_atual = estado.capital_pais.capital
            listEstadosCapital.uf = estado.sigla
            listEstadosCapital.descricao = estado.nome
            listEstadosCapital.capital = estado.capital
            listEstadosCapital.regiao = estado.regiao
            listEstadosCapital.capital_pais_ano_inicio = estado.capital_pais.ano_inicio
            listEstadosCapital.capital_pais_ano_termino = estado.capital_pais.ano_fim

            listaCapitalArray.push(listEstadosCapital)

            status = true

        }

    })

    listaEstados.capitais = listaCapitalArray

    if (status) {

        return listaEstados

    } else {

        return status

    }

}

// console.log(getCapitalPais(estadosCidades.estadosCidades))

const getCidades = (lista, siglaEstado) => {

    let listaEstados = {}
    let listaCidadesArray = []
    let status = false




    lista.estados.forEach((estado) => {

        if (estado.sigla == siglaEstado && estado.sigla != undefined) {

            listaEstados.uf = estado.sigla
            listaEstados.descricao = estado.nome

            estado.cidades.forEach((cidades) => {
                listaCidadesArray.push(cidades.nome)
            })

            listaEstados.quantidade = listaCidadesArray.length
            listaEstados.cidades = listaCidadesArray


            status = true

        }

    })

    if (status) {

        return listaEstados

    } else {

        return status

    }

}

console.log(getCidades(estadosCidades.estadosCidades, "SP"))