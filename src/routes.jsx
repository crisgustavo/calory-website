import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Agricola from "./pages/agricola/index.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/agricola',
        element: <Agricola />
    },/*
    {
        path: '/cadastro-cliente',
        element: <CadastroCliente />
    },
    {
        path: '/contato',
        element: <Contato />
    },
    {
        path: '/softwares',
        element: <Softwares />
    }*/
])

export default router