import api from "../services/api";
import { useState, useEffect } from "react";


function GetProducao(producaoList) {

    let [ producao, setProducao ] = useState ([])

    useEffect(() => {
        async function getProducao() {
            const { data } = await api.get('/producao')

            setProducao(data)
        }

        getProducao()
    }, [])

        producaoList = producao
    return producaoList
}

export default GetProducao
