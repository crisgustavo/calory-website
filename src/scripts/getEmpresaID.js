import api from "../services/api";
import { useState, useEffect } from "react";


function GetEmpresaID(cliforimported, nomeimported, empresaid) {

    let [ clifor, setClifor ] = useState ([])

    useEffect(() => {
        async function getClifor() {
            const { data } = await api.get('/clifor')

            setClifor(data)
        }

        getClifor()
    }, [])

    const empresaidlist = clifor.filter(item => {
        if (item.idclifor === cliforimported && item.nome === nomeimported) {
            empresaid = item.idempresa
        }
    })

    return empresaid
}

export default GetEmpresaID
