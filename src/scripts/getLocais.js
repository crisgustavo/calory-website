import api from "../services/api";
import { useState, useEffect } from "react";


function GetLocais(locaisList) {

    let [ locais, setLocais ] = useState ([])

    useEffect(() => {
        async function getLocais() {
            const { data } = await api.get('/locais')

            setLocais(data)
        }

        getLocais()
    }, [])

        locaisList = locais
    return locaisList
}

export default GetLocais
