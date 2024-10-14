import express from 'express'
import mysql from 'mysql'


const app = express();
app.use(express.json());


const connection = mysql.createPool({
    host: '177.107.115.204',
    port: '30590',
    user: 'CALORY_PAGRICOLA',
    password: '@CALORY123@',
    database: 'calory_pagricola'
})


app.get('/usuarios', async (req, res) => {
    connection.getConnection((err, connection) => {
        connection.query('SELECT login, senha FROM usuarios', function (error, results){
            if (error) throw error
            res.send(results)
        })
    })
})




app.listen(3000,() => {
    console.log('Seu servidor está executando na porta 3000')
})

export default connection