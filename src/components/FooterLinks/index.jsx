import PageLink from "../Pagelink";
import { DefaultFooterLinks } from "./styles";

function FooterLinks() {
    return (
        <DefaultFooterLinks>
            <PageLink>Home</PageLink>
            <PageLink>Sobre Nós</PageLink>
            <PageLink>Softwares</PageLink>
            <PageLink>Contato</PageLink>
        </DefaultFooterLinks>
    )
}

export default FooterLinks