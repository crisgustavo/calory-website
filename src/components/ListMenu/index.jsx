import { useNavigate } from 'react-router-dom'
import Home from '../../pages/Home';


import ListItem from "../ListItem";
import ListItemTrial from "../ListItemTrial";
import { DefaultListMenu } from "./styles";


function ListMenu() {

    const navigate = useNavigate();


    return (
        <DefaultListMenu>
            <ListItem>
                HOME
            </ListItem>
            <ListItem>
                SOFTWARES
            </ListItem>
            <ListItem>
                ANTIVÍRUS
            </ListItem>
            <ListItem>
                CERTIFICADOS DIGITAIS
            </ListItem>
            <ListItem>
                CONTATO
            </ListItem>
            <ListItemTrial>
                EXPERIMENTE GRÁTIS!
            </ListItemTrial>
        </DefaultListMenu>
    )
}

export default ListMenu