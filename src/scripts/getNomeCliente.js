import api from "../services/api";
import { useState, useEffect } from "react";


function GetNomeCliente(cliforimported, empresaid, nomecliente) {

    let [ clifor, setClifor ] = useState ([])

    useEffect(() => {
        async function getClifor() {
            const { data } = await api.get('/clifor')

            setClifor(data)
        }

        getClifor()
    }, [])

    const cliforlist = clifor.filter(item => {
        if (item.idclifor === cliforimported && item.idempresa === empresaid) {
            nomecliente = item.fantasia
        }
    })

    return nomecliente
}

export default GetNomeCliente
