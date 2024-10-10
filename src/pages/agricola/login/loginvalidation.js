import { useNavigate } from "react-router-dom";

function AgricolaValidade() {
    const navigate = useNavigate();

    return(
        () => navigate('/agricola')
    )
}

export default AgricolaValidade