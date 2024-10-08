import { DefaultFooterSocialMedia } from "./styles";
import facebookicon from '../../assets/images/social-media/facebook.png'
import instagramicon from '../../assets/images/social-media/instagram.png'

function FooterSocialMedia() {
    return (
        <DefaultFooterSocialMedia>
            <a href='https://www.facebook.com/calorysistemas'><img src={facebookicon} alt="Facebook" /></a>
            <a href='https://www.instagram.com/calorysistemas/'><img src={instagramicon} alt="Instagram" /></a>
        </DefaultFooterSocialMedia>
    )
}

export default FooterSocialMedia