import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'

import TopBar from '../../components/TopBar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Whatsapp from '../../components/Whatsapp'



import { ImgSlider, Content, BudgetInfo,
    BudgetText, BudgetButton, BudgetTitle,
    ContentInfo, ContentTitle, ContentText,
    ContentShow, ContentBox,
    ContentCarroussel, ContentH1
} from "./styles"


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
        { id: '1', image: slider1, url:  '/software-mercado'},
        { id: '2', image: slider2, url:  '/certificados-digitais'},
        { id: '3', image: slider3, url:  '/software-restaurante'},
        { id: '4', image: slider4, url:  '/software-autocenter'},
        { id: '5', image: slider5, url:  '/software-loja'}
    ]

    return (
        <>
            <TopBar/>

            <Header/>

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
                        <ImgSlider src={item.image} alt='Slider' className='slide-item' onClick={() => navigate(item.url)}/>
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

            <Footer />

            <Whatsapp />

        </>
    )
}

export default Home