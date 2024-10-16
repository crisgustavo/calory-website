import api from "../services/api";
import { useState, useEffect } from "react";

function GetProdutos(productList) {

    let [product, setProduct] = useState([])

        useEffect(() => {
            async function getProduct() {
                const { data } = await api.get('/produtos')

                setProduct(data)
            }

            getProduct()

        }, [])

        productList = product
    return productList
}

export default GetProdutos 