import api from "../services/api";
import { useState, useEffect } from "react";


function GetEntradas(entradasList) {

    let [ entradas, setEntradas ] = useState ([])

    useEffect(() => {
        async function getEntradas() {
            const { data } = await api.get('/entradas')

            setEntradas(data)
        }

        getEntradas()
    }, [])

        entradasList = entradas
    return entradasList
}

export default GetEntradas
