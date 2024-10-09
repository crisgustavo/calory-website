import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
import SoftwareAgrovet from "./pages/softwares/software-agrovet/index.jsx";
import SoftwareAutocenter from "./pages/softwares/software-autocenter/index.jsx";
import SoftwareImobiliaria from "./pages/softwares/software-imobiliaria/index.jsx";
import SoftwareLojas from "./pages/softwares/software-lojas/index.jsx";
import SoftwareMadeireira from "./pages/softwares/software-madeireira/index.jsx";
import SoftwareMercado from "./pages/softwares/software-mercado/index.jsx";
import SoftwareRestaurante from "./pages/softwares/software-restaurante/index.jsx";
import Softwares from "./pages/softwares/index.jsx";
import SoftwareJoalheria from "./pages/softwares/software-joias/index.jsx";
import CertificadosDigitais from './pages/certificados-digitais/index.jsx';
import Contato from "./pages/contato/index.jsx";
import ClienteLogin from "./pages/area-do-cliente/login/index.jsx";
import AgricolaLogin from "./pages/agricola/login/index.jsx";
import SobreNos from "./pages/sobre-nos/index.jsx";
import ThankYou from "./pages/contato/thankyou.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/agricola/login',
        element: <AgricolaLogin />
    },
    {
        path: '/area-do-cliente/login',
        element: <ClienteLogin />
    },
    {
        path: '/softwares/agrovet',
        element: <SoftwareAgrovet />
    },
    {
        path: '/softwares/autocenter',
        element: <SoftwareAutocenter />
    },
    {
        path: '/softwares/imobiliaria',
        element: <SoftwareImobiliaria />
    },
    {
        path: '/softwares/joalheria',
        element: <SoftwareJoalheria />
    },
    {
        path: '/softwares/lojas',
        element: <SoftwareLojas />
    },
    {
        path: '/softwares/madeireira',
        element: <SoftwareMadeireira />
    },
    {
        path: '/softwares/mercado',
        element: <SoftwareMercado />
    },
    {
        path: '/softwares/restaurante',
        element: <SoftwareRestaurante />
    },
    {
        path: '/softwares',
        element: <Softwares />
    },
    {
        path: '/certificados-digitais',
        element: <CertificadosDigitais />
    },
    {
        path: '/contato',
        element: <Contato />
    },
    {
        path: '/sobre-nos',
        element: <SobreNos />
    },
    {
        path: '/obrigado',
        element: <ThankYou />
    }
    
])

export default router