import {
    Background, Footer, Header,
    UserSettings, UserLogo, UserName,
    CompanyLogo, CompanyName, Exit,
    Body, Panel, Incoming,
    Output, Stock, Print
} from './styles'
import FooterElements from '../../../components/FooterElements'

import user from '../../../assets/images/icons/user1.png'
import company from '../../../assets/images/icons/company1.png'
import printer from '../../../assets/images/icons/printer.png'

function AgricolaLanding() {
    return (
        <>
        <Background />
            <Header>
                <UserSettings>
                    <UserLogo src={user}/>
                    <UserName>User</UserName>
                    <CompanyLogo src={company}/>
                    <CompanyName>Company</CompanyName>
                </UserSettings> 
                <Exit>Sair</Exit>
            </Header>

            <Body>
                <Panel>
                    <Incoming>Entradas</Incoming>
                    <Output>Saídas</Output>
                    <Stock>Estoque</Stock>
                    <Print><img src={printer} alt="" /></Print>
                </Panel>
            </Body>

        <Footer>
            <FooterElements />
        </Footer>
        </>
    )
}

export default AgricolaLanding