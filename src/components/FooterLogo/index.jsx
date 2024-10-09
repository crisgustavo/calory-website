import { DefaultFooterLogo } from "./styles";
import footerlogo from '../../assets/images/footer-logo.png'

function FooterLogo() {
    return (
        <DefaultFooterLogo src={footerlogo} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}/>
    )
}

export default FooterLogo