import {
    Background, Footer, Header,
    UserSettings, UserLogo, UserName,
    CompanyLogo, CompanyName, Exit,
    Body, Panel, Incoming,
    Output, Stock, Print,
    IncomingPanel,
    OutputPanel,
    StockPanel
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

                <IncomingPanel>
                    <HeaderIncoming>
                        <PageH1>Entradas</PageH1>
                        <IncomingFilter>
                            <FilterH1>Produtos</FilterH1>
                            <PoductSelect />
                            <FilterH1>Safra</FilterH1>
                            <YearSelect />
                            <MeasureSelect />
                            <Period />
                                <PeriodPanel>
                                    <FilterH1>De:</FilterH1>
                                    <StartPeriod />
                                    <FilterH1>Até:</FilterH1>
                                    <FinalPeriod />
                                    <Clear />
                                </PeriodPanel>
                        </IncomingFilter>
                    </HeaderIncoming>                   
                </IncomingPanel>

                <OutputPanel>

                </OutputPanel>

                <StockPanel>

                </StockPanel>

            </Body>

        <Footer>
            <FooterElements />
        </Footer>
        </>
    )
}

export default AgricolaLanding