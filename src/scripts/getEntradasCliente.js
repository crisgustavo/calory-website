function GetEntradasCliente(todasentradas, productList, entradascliente) {
    entradascliente = todasentradas.map(entrada => {
        let produtonome
        produtonome = productList.filter(produto => {
            if (entrada.idproduto === produto.idproduto) {
                return produto.nome
            }
        })
        return {
            romaneio: entrada.romaneio,
            ano_safra: entrada.ano_safra,
            idproduto: entrada.idproduto,
            produto: produtonome[0].nome,
            peso_liquido_entrada: (entrada.peso_liquido_entrada).toFixed(2),
            peso_liquido_entrada_sc: (entrada.peso_liquido_entrada / 60).toFixed(2),
            peso_liquido: (entrada.peso_liquido).toFixed(2),
            peso_liquido_sc: (entrada.peso_liquido / 60).toFixed(2),
            placa: entrada.placa,
            data: entrada.data,
            desconto_total: (entrada.desconto_total).toFixed(2)
        }
    })

    return entradascliente
}

export default GetEntradasCliente