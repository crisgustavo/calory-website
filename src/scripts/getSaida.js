import api from "../services/api";
import { useState, useEffect } from "react";


function GetSaidas(saidasList) {

    let [ saidas, setSaidas ] = useState ([])

    useEffect(() => {
        async function getFazendas() {
            const { data } = await api.get('/saidas')

            setSaidas(data)
        }

        getSaidas()
    }, [])

        saidasList = saidas
    return saidasList
}

export default GetSaidas