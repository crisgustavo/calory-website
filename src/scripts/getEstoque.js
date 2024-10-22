import api from "../services/api";
import { useState, useEffect } from "react";


function GetEstoques(estoquesList) {

    let [ estoques, setEstoques ] = useState ([])

    useEffect(() => {
        async function getFazendas() {
            const { data } = await api.get('/estoques')

            setEstoques(data)
        }

        getEstoques()
    }, [])

        estoquesList = estoques
    return estoquesList
}

export default GetEstoques