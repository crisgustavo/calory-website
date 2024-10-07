import phoneicon from '../../assets/images/icons/phone.png'
import { DefaultContainerPhone } from './styles'

function ContainerPhone() {
    return (
        <DefaultContainerPhone>
            <img src={phoneicon} alt="" />
            <h3>Atendimento</h3>
            <p><span>Palotina</span>
                <br />(44) 3649-4444
                <br />
                <br /><span>Pérola</span>
                <br />(44) 3636-2883
                <br />
                <br /><span>Celulares</span>
                <br />(44) 99993-9313
                <br />(44) 99927-0531</p>
        </DefaultContainerPhone>
    )
}

export default ContainerPhone