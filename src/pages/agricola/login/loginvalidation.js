import { useNavigate } from "react-router-dom"
//import connection from "../../../database/crud-db";
//import { login, senha } from '../../../database/userslist.js'
//import express from 'express'

function AgricolaValidade() {
    const navigate = useNavigate();
        
    return(    
        () => navigate('/agricola')
    )
    
}

export default AgricolaValidade