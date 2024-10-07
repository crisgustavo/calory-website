import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import Agricola from "./pages/agricola/index.jsx";
import SoftwareAgrovet from "./pages/softwares/software-agrovet/index.jsx";
import SoftwareAutocenter from "./pages/softwares/software-autocenter/index.jsx";
import SoftwareImobiliaria from "./pages/softwares/software-imobiliaria/index.jsx";
import SoftwareJoias from "./pages/softwares/software-joias/index.jsx";
import SoftwareLojas from "./pages/softwares/software-lojas/index.jsx";
import SoftwareMadeireira from "./pages/softwares/software-madeireira/index.jsx";
import SoftwareMercado from "./pages/softwares/software-mercado/index.jsx";
import SoftwareRestaurante from "./pages/softwares/software-restaurante/index.jsx";
import Softwares from "./pages/softwares/index.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/agricola',
        element: <Agricola />
    },
    {
        path: '/software-agovet',
        element: <SoftwareAgrovet />
    },
    {
        path: '/software-autocenter',
        element: <SoftwareAutocenter />
    },
    {
        path: '/software-imobiliaria',
        element: <SoftwareImobiliaria />
    },
    {
        path: '/software-joias',
        element: <SoftwareJoias />
    },
    {
        path: '/software-lojas',
        element: <SoftwareLojas />
    },
    {
        path: '/software-madeireira',
        element: <SoftwareMadeireira />
    },
    {
        path: '/software-mercado',
        element: <SoftwareMercado />
    },
    {
        path: '/software-restaurante',
        element: <SoftwareRestaurante />
    },
    {
        path: '/softwares',
        element: <Softwares />
    }
    
])

export default router