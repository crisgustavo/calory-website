
function GetSelectProdutos(entradascliente, productList, getSelectProdutos) {
    let produtosentrada = []
    let prodentradanew= []
    let arrayprodentrada = []
    produtosentrada = entradascliente.map(entrada => {
        let prodentrada = entrada.idproduto
        if (prodentrada != prodentradanew)  {
            prodentradanew = prodentrada
            arrayprodentrada.push(prodentradanew)
        }
    })

    function unique(value, index, self) {
        return  self.indexOf(value) === index;
    }

    produtosentrada = arrayprodentrada.filter(unique)

    let newprodentrada = [] 
    
    produtosentrada.forEach((item, index) => {
        newprodentrada[index] = {idproduto: item}
    })

    prodentradanew = []
    newprodentrada.map((item, index) => {
        productList.filter(produto => {
            if (item.idproduto === produto.idproduto) {
                prodentradanew[index] = {idproduto: item.idproduto, nome: produto.nome}
            }
        })
    })

    getSelectProdutos = prodentradanew

    return getSelectProdutos
}

export default GetSelectProdutos