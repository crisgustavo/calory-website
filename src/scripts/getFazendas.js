import api from "../services/api";
import { useState, useEffect } from "react";


function GetFazendas(fazendasList) {

    let [ fazendas, setFazendas ] = useState ([])

    useEffect(() => {
        async function getFazendas() {
            const { data } = await api.get('/fazendas')

            setFazendas(data)
        }

        getFazendas()
    }, [])

        fazendasList = fazendas
    return fazendasList
}

export default GetFazendas
