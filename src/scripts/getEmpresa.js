import api from "../services/api";
import { useState, useEffect } from "react";


function GetEmpresa(empresaList) {

    let [ empresa, setEmpresa ] = useState ([])

    useEffect(() => {
        async function getEmpresas() {
            const { data } = await api.get('/empresa')

            setEmpresa(data)
        }

        getEmpresas()
    }, [])

        empresaList = empresa
    return empresaList
}

export default GetEmpresa
