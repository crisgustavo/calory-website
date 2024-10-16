import api from "../services/api";
import { useState, useEffect } from "react";


function GetUsuários(userList) {

    let [users, setUsers] = useState([])

        useEffect(() => {
            async function getUsers() {
                const { data } = await api.get('/usuarios')

                setUsers(data)
            }

            getUsers()

        }, [])

        userList = users
    return userList
}

export default GetUsuários 
