import Footer from "../../components/Footer"
import Header from "../../components/Header"
import TopBar from "../../components/TopBar"
import plus from '../../assets/images/icons/pls.png'
import { Main, CatalogTitle, CatalogShow, CatalogItem, } from "./styles"
import kasperplus from '../../assets/images/antivirus/kasperplus.png'
import kasperpremium from '../../assets/images/antivirus/kasperpremium.png'
import kaspersmall from '../../assets/images/antivirus/kaspersmalloffice.png'
import kasperstandard from '../../assets/images/antivirus/kasperstandard.png'
import kaspermobile from '../../assets/images/antivirus/kasperstandardmobile.png'

function Antivirus() {
    window.scrollTo({top: 0, behavior: 'smooth'})
    return (
        <>
            <TopBar />
            <Header />
            <Main>
                <CatalogTitle>Conheça nossos Antivírus!</CatalogTitle>
                <CatalogShow>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Gostaria%20de%20adquirir%20o%20antivírus%20Kaspersky%20Standard', '_blank')}/>
                        <img src={kasperstandard} alt="Kaspersky Standard" />
                        <h1>Kaspersky Standard</h1>
                        <h3>Inclui tecnologias de segurança de última geração, protegendo você de ameaças 
                            como golpes financeiros e ataques de rede, além de ferramentas para que seus 
                            dispositivos funcionem mais rápida e continuamente, e recursos de privacidade 
                            para proteger webcams, microfones e suas videochamadas. Compatível com Windows, 
                            macOS, Android e iOS.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Gostaria%20de%20adquirir%20o%20antivírus%20Kaspersky%20Plus', '_blank')}/>
                        <img src={kasperplus} alt="Kaspersky Plus" />
                        <h1>Kaspersky Plus</h1>
                        <h3>Oferece cibersegurança de nível internacional e ferramentas para incrementar seu 
                            dispositivo. Além disso, uma seleção completa de recursos de privacidade para 
                            ajudar a proteger seus dados e seu dinheiro, gerenciar senhas com segurança, 
                            identificar invasores em seu Wi-Fi e navegar com privacidade usando a 
                            VPN ilimitada. Compatível com Windows, macOS, Android e iOS.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Gostaria%20de%20adquirir%20o%20antivírus%20Kaspersky%20Premium', '_blank')}/>
                        <img src={kasperpremium} alt="Kaspersky Premium" />
                        <h1>Kaspersky Premium</h1>
                        <h3>Fornece segurança de classe mundial, ferramentas de impulsionamento de 
                            dispositivos e uma série de recursos de privacidade — incluindo VPN — para 
                            proteger suas senhas, pagamentos, rede Wi-Fi, arquivos, navegação e muito mais. 
                            Além disso, vem com recursos de proteção de identidade — como uma carteira segura 
                            para seus documentos confidenciais — e acesso prioritário à nossa equipe de 
                            suporte remoto que pode executar uma série de serviços em seu nome, incluindo 
                            instalação de produtos e verificação de saúde do PC. Funciona no Windows, macOS, 
                            Android e iOS.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+"  onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Gostaria%20de%20adquirir%20o%20antivírus%20Kaspersky%20Small%20Office', '_blank')} />
                        <img src={kaspersmall} alt="Kaspersky Small Office" />
                        <h1>Kaspersky Small Office</h1>
                        <h3>Criado especificamente para empresas com 5 a 50 computadores, o Kaspersky Small 
                            Office Security é fácil de instalar e gerenciar, e oferece a segurança mais 
                            testada e premiada do mundo para computadores, servidores de arquivos e 
                            dispositivos móveis, protegendo seus negócios de ataques on-line, fraude 
                            financeira, ransomware e perda de dados.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Gostaria%20de%20adquirir%20o%20antivírus%20Kaspersky%20Standard%20Mobile', '_blank')}/>
                        <img src={kaspermobile} alt="Kaspersky Standard Mobile" />
                        <h1>Kaspersky Standard Mobile</h1>
                        <h3>Inclui tecnologias de segurança de última geração – protegendo você de ameaças 
                            como golpes financeiros e ataques de phishing projetados para roubar seus dados 
                            pessoais – ao lado de ferramentas para ajudar seus dispositivos a trabalharem 
                            mais rápido e da melhor maneira, além de recursos de privacidade para proteger 
                            suas webcams, microfones e chamadas de vídeo. Funciona no Android e iOS.</h3>
                    </CatalogItem>
                                        
                </CatalogShow>
            </Main>

            <Footer />
        </>
    )
}

export default Antivirus