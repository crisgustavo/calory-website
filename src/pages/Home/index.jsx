import { useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
    Container, ContainerContact, ContainerEmail,
    ContainerLogo, ContainerPhone, FacebookLink,
    Header, HeaderNavigator,
    HeaderWrap, InstagramLink, LeftLinks,
    ListMenu, ListItem, ListItemTrial,
    SocialLinks, TopBar, Whatsapp,
    PageLink, FooterLinks, FooterLogo,
    Footer, FooterSocialMedia, FooterElements,
    ImgSlider,
    Content,
    BudgetInfo,
    BudgetText,
    BudgetButton,
    BudgetTitle,
    ContentInfo,
    ContentTitle,
    ContentText,
    ContentShow,
    ContentBox,
    ContentCarroussel,
    ContentH1,
} from "./styles"
import NoBorderButton from "../../components/NoBorderButton"
import fbimage from '../../assets/images/social-media/facebook.png'
import instaimage from '../../assets/images/social-media/instagram.png'
import logocontainer from '../../assets/images/logo_facebook.png'
import emailicon from '../../assets/images/icons/email.png'
import phoneicon from '../../assets/images/icons/phone.png'
import whatsappicon from '../../assets/images/icons/whatsapp.png'
import footerlogo from '../../assets/images/footer-logo.png'
import slider1 from '../../assets/midias/banner/Ban-mercado.jpg'
import slider2 from '../../assets/midias/banner/Ban-certificado.jpg'
import slider3 from '../../assets/midias/banner/Ban-restaurantes.jpeg'
import slider4 from '../../assets/midias/banner/Ban-autocenter.png'
import slider5 from '../../assets/midias/banner/Ban-empresarial.png'
import product1 from '../../assets/midias/produto/b-empresarial.jpg'
import product2 from '../../assets/midias/produto/b-mercados.jpg'
import product3 from '../../assets/midias/produto/b-restaurantes.jpg'
import product4 from '../../assets/midias/produto/b-autocenter.jpg'
import product5 from '../../assets/midias/produto/b-agrovet.jpg'
import product6 from '../../assets/midias/produto/b-joias.jpg'
import product7 from '../../assets/midias/produto/b-madeira.jpg'
import product8 from '../../assets/midias/produto/b-imobiliaria.jpg'



function Home() {
    const navigate = useNavigate();

    const arrayImages = [
        { id: '1', image: slider1 },
        { id: '2', image: slider2 },
        { id: '3', image: slider3 },
        { id: '4', image: slider4 },
        { id: '5', image: slider5 }
    ]

    return (
        <>
            <TopBar>
                <LeftLinks>
                    <NoBorderButton>CADASTRO</NoBorderButton>
                    <NoBorderButton>AGRÍCOLA</NoBorderButton>
                    <NoBorderButton>LOGIN</NoBorderButton>
                </LeftLinks>
                <SocialLinks>
                    <a href='https://www.facebook.com/calorysistemas'><FacebookLink src={fbimage} /></a>
                    <a href='https://www.instagram.com/calorysistemas/'><InstagramLink src={instaimage} /></a>
                </SocialLinks>
            </TopBar>

            <Header>
                <Container>
                    <ContainerLogo src={logocontainer} />
                    <ContainerContact>
                        <ContainerEmail>
                            <a href="mailto:atendimento@calory.com.br?subject=Contato sobre o website">
                                <img src={emailicon} alt="" />
                                <h3>Envie-nos um e-mail</h3>
                                <p>atendimento@calory.com.br</p>
                            </a>
                        </ContainerEmail>
                        <ContainerPhone>
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
                        </ContainerPhone>
                    </ContainerContact>
                </Container>

                <HeaderWrap>
                    <HeaderNavigator>
                        <ListMenu>
                            <ListItem >HOME</ListItem>
                            <ListItem >SOFTWARES</ListItem>
                            <ListItem >CERTIFICADOS DIGITAIS</ListItem>
                            <ListItem >CONTATO</ListItem>
                            <ListItemTrial>EXPERIMENTE GRÁTIS!</ListItemTrial>
                        </ListMenu>
                    </HeaderNavigator>
                </HeaderWrap>
            </Header>

            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                autoplay={{ delay: 5000 }}
                loop='true'
                effect='coverflow'
                followFinger='true'
            >
                {arrayImages.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ImgSlider src={item.image} alt='Slider' className='slide-item' />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Content>
                <BudgetInfo>
                    <BudgetTitle>Ligue agora para <span>(44) 3649-4444</span> ou pelo e-mail <span>atendimento@calory.com.br</span></BudgetTitle>
                    <BudgetText>Nossos consultores terão o maior prazer em trazer a solução para o seu empreendimento</BudgetText>
                    <BudgetButton>Orçamento já!</BudgetButton>
                </BudgetInfo>
            </Content>

            <Content>
                <ContentInfo>
                    <ContentBox>
                        <ContentTitle>Saiba mais sobre os <a href=''>Softwares</a> Calory</ContentTitle>
                        <ContentText>Um de nossos softwares pode ser a solução para sua empresa</ContentText>

                        <ContentShow>
                            <ContentCarroussel>
                                <div className="item" style={{ '--delay': '1s' }}>
                                    <img src={product1} alt="Empresarial Lojas" />
                                    <ContentH1>Empresarial Lojas</ContentH1>
                                </div>
                                <div className="item" style={{ '--delay': '2s' }}>
                                    <img src={product2} alt="Empresarial Mercados e Conveniências" />
                                    <ContentH1>Empresarial Mercados e Conveniências</ContentH1>
                                </div>
                                <div className="item" style={{ '--delay': '3s' }}>
                                    <img src={product3} alt="Empresarial Restaurantes e Lanchonetes" />
                                    <ContentH1>Empresarial Restaurantes e Lanchonetes</ContentH1>
                                </div>
                                <div className="item" style={{ '--delay': '4s' }}>
                                    <img src={product4} alt="Empresarial Autocenter" />
                                    <ContentH1>Empresarial Autocenter</ContentH1>
                                </div>

                            </ContentCarroussel>

                            <ContentCarroussel>
                                <div className="item" style={{ '--delay': '1s' }}>
                                    <img src={product5} alt="Empresarial Agro e Vet" />
                                    <ContentH1>Empresarial Agro e Veterinária</ContentH1>
                                </div>
                                <div className="item" style={{ '--delay': '2s' }}>
                                    <img src={product6} alt="Empresarial Joalheria" />
                                    <ContentH1>Empresarial Joalheria</ContentH1>
                                </div>
                                <div className="item" style={{ '--delay': '3s' }}>
                                    <img src={product7} alt="Empresarial Madeireira" />
                                    <ContentH1>Empresarial Madeireira</ContentH1>
                                </div>
                                <div className="item" style={{ '--delay': '4s' }}>
                                    <img src={product8} alt="Empresarial Imobiliaria" />
                                    <ContentH1>Empresarial Imobiliaria</ContentH1>
                                </div>
                            </ContentCarroussel>
                        </ContentShow>
                    </ContentBox>

                </ContentInfo>

            </Content>



            <Footer>
                <FooterElements>
                    <FooterLogo src={footerlogo} />

                    <FooterLinks>
                        <PageLink>Home</PageLink>
                        <PageLink>Sobre Nós</PageLink>
                        <PageLink>Softwares</PageLink>
                        <PageLink>Contato</PageLink>
                    </FooterLinks>

                    <FooterSocialMedia>

                    </FooterSocialMedia>
                </FooterElements>
            </Footer>

            <Whatsapp src={whatsappicon} />

        </>
    )
}

export default Home