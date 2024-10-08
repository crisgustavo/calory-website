import { DefaultListItem } from "./styles";
import { useNavigate } from "react-router-dom";



function ListItem({children}) {
    const navigate = useNavigate();
    

    function getAdress() {
        let address = children

        if (address === 'HOME') {navigate('/')}
        if (address === 'SOFTWARES') {navigate('/softwares')}
        if (address === 'CERTIFICADOS DIGITAIS') {navigate('/certificados-digitais')}
        if (address === 'CONTATO') {navigate('/contato')}
    }


    return (
        <DefaultListItem onClick={() => {getAdress()}}>{children}</DefaultListItem>        
    )
}

export default ListItem