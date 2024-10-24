import api from "../services/api";
import { useState, useEffect } from "react";


function GetNomeEmpresa(empresaid, nomeempresa) {

    let [ empresa, setEmpresa ] = useState ([])

    useEffect(() => {
        async function getEmpresas() {
            const { data } = await api.get('/empresa')

            setEmpresa(data)
        }

        getEmpresas()
    }, [])

    const empresalist = empresa.filter(item => {
        if (item.idempresa === empresaid) {
            nomeempresa = item.fantasia
        }
    })

    return nomeempresa
}

export default GetNomeEmpresa
