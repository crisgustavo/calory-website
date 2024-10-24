import api from "../services/api";
import { useState, useEffect } from "react";


function GetTodasEntradas(cliforimported, empresaid, todasentradas) {


    let [ entradas, setEntradas ] = useState ([])

    useEffect(() => {
        async function getEntradas() {
            const { data } = await api.get('/entradas')

            setEntradas(data)
        }

        getEntradas()
    }, [])

    todasentradas = entradas.filter(item => {
        if (item.idclifor === cliforimported && item.idempresa === empresaid) {
            return true
        }
    })

    return todasentradas
}

export default GetTodasEntradas
