import api from "../services/api";
import { useState, useEffect } from "react";


function GetPlantio(plantioList) {

    let [ plantio, setPlantio ] = useState ([])

    useEffect(() => {
        async function getPlantio() {
            const { data } = await api.get('/plantio')

            setPlantio(data)
        }

        getPlantio()
    }, [])

        plantioList = plantio
    return plantioList
}

export default GetPlantio