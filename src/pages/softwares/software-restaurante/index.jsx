import { useNavigate } from 'react-router-dom'
import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';

function SoftwareRestaurante() {
    const navigate = useNavigate();

    return (
        <>
            <TopBar />
            <Header />
            <h1>Software Restaurante</h1>

        </>
    )
}

export default SoftwareRestaurante