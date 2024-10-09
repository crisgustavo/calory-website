import { useNavigate } from 'react-router-dom'
import logocontainer from '../../assets/images/logo_facebook.png'
import { DefaultContainerLogo } from './styles'

function ContainerLogo() {
    const navigate = useNavigate();

    return (
        <DefaultContainerLogo src={logocontainer} onClick={() => navigate('/')}/>
    )
}

export default ContainerLogo