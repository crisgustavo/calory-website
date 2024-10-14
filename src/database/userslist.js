import express from 'express'
import connection from './crud-db'
import { useEffect, useState } from 'react'

const app = express()
app.use(express.json())

function ListUsers() {
    let [ users, setUsers ] = useState([])

    useEffect(() => {
        async function getUsers() {
            const {data} = await app.get('/usuarios', async (req,res) => {
                connection.getConnection(() => {
                    connection.query('SELECT login, senha FROM usuarios')
                })
            
            setUsers(data)
            })
            
        }
        
        getUsers();
    }, [])
    
}

export const idusuario = users.idusuario;
export const login = JSON.parse(users.login);
export const senha = JSON.parse(users.senha);
export const nome = users.nome;
export const idClifor = users.id_clifor

console.log(login, senha)