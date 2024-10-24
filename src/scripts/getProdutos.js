import api from "../services/api";
import { useState, useEffect } from "react";

function GetProdutos(productList, empresaid) {

    let [product, setProduct] = useState([])

        useEffect(() => {
            async function getProduct() {
                const { data } = await api.get('/produtos')

                setProduct(data)
            }

            getProduct()

        }, [])

        productList = product.filter(item => {
            if (item.idempresa === empresaid) return true
        })

        let produtosnew = productList.map(item => {
            return {
                idproduto: item.idproduto,
                nome: item.nome
            }
        })
        
        productList = produtosnew
        
    return productList
}

export default GetProdutos 