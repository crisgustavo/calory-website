import { useNavigate } from "react-router-dom";
import { DefaultPageLink } from "./styles";

function PageLink({children}) {
    const navigate = useNavigate();

        function getAdress() {
            let address = children

            if (address === 'Home') {navigate('/')}
            if (address === 'Softwares') {navigate('/softwares')}
            if (address === 'Sobre Nós') {navigate('/sobre-nos')}
            if (address === 'Contato') {navigate('/contato')}
        }

    return (
        <DefaultPageLink onClick={() => {getAdress()}}>{children}</DefaultPageLink>
    )
}

export default PageLink