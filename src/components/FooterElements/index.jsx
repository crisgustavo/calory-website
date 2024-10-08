import FooterLinks from "../FooterLinks";
import FooterLogo from "../FooterLogo";
import FooterSocialMedia from "../FooterSocialMedia";
import { DefaultFooterElements } from "./styles";

function FooterElements() {
    return (
        <DefaultFooterElements>
            <FooterLogo />
            <FooterLinks />
            <FooterSocialMedia/>
        </DefaultFooterElements>
    )
}

export default FooterElements