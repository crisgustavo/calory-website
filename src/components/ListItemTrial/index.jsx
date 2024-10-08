import { useNavigate } from "react-router-dom";
import { DefaultListItemTrial } from "./styles";

function ListItemTrial({children}) {
const navigate = useNavigate();

    return (
        <DefaultListItemTrial onClick={() => navigate('/experimente-gratis')}>{children}</DefaultListItemTrial>
    )
}

export default ListItemTrial