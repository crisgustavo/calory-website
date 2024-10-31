import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'

import TopBar from '../../components/TopBar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewTopBar from '../../components/NewTopBar'



import {
    ImgSlider, Content, BudgetInfo,
    BudgetText, BudgetButton, BudgetTitle,
    DefaultWhatsapp, BudgetTitleSpan,
    ButtonWhatsapp,
    Banner,
    BannerImg,
    BannerH1,
    BannerP,
    BannerH2,
    BackgroundGradient,
    BannerText,
    IMGBanner,
    Content1
} from "./styles"

import whatsappicon from '../../assets/images/icons/whatsapp.png'
import slider1 from '../../assets/midias/banner/Ban-mercado.jpg'
import slider2 from '../../assets/midias/banner/Ban-certificado.jpg'
import slider3 from '../../assets/midias/banner/Ban-restaurantes.jpeg'
import slider4 from '../../assets/midias/banner/Ban-autocenter.png'
import slider5 from '../../assets/midias/banner/Ban-empresarial.png'

import banner1 from '../../assets/images/banner1.jpg'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.png'
import banner4 from '../../assets/images/banner4.png'


import menubuttonimg from '../../assets/images/menu.png'
import topbarimg from '../../assets/images/logo.png'
import ListMenu from '../../components/ListMenu'
import { useRef, useState } from 'react'
import { DefaultTopBar } from '../../components/TopBar/styles'
import { Bold } from 'lucide'






function Home() {

    const navigate = useNavigate();

    const arrayImages = [
        { id: '1', image: slider1, url: '/softwares/mercado' },
        { id: '2', image: slider2, url: '/certificados-digitais' },
        { id: '3', image: slider3, url: '/softwares/restaurante' },
        { id: '4', image: slider4, url: '/softwares/autocenter' },
        { id: '5', image: slider5, url: '/softwares/loja' }
    ]

    window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <>
            <BackgroundGradient>
                <TopBar />

                <NewTopBar />

                <Banner>

                    <BannerText>
                        <BannerH1>Está procurando um software completo para gerenciar sua empresa?</BannerH1>
                        
                        <BannerP>Temos a melhor solução para organizar e aumentar o faturamento do seu negócio com todo treinamento e suporte de uma equipe de ponta!</BannerP>
                    </BannerText>

                    <BannerImg>
                        <IMGBanner src={banner3} />
                    </BannerImg>

                </Banner>


                <Content1>
                    <Swiper
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation
                        autoplay={{ delay: 5000 }}
                        loop='true'
                        effect='coverflow'
                        followFinger='true'
                        style={{ 'width': '99%' }}
                    >
                        {arrayImages.map((item) => (
                            <SwiperSlide key={item.id}>
                                <ImgSlider src={item.image} alt='Slider' className='slide-item' onClick={() => navigate(item.url)} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Content1>

                <Content>
                    <BudgetInfo>
                        <BudgetTitle>Ligue agora ou chame no whatsapp
                            <BudgetTitleSpan>(44) 99993-9313</BudgetTitleSpan></BudgetTitle>
                        <BudgetText>Nossos consultores terão o maior prazer em trazer a solução para o seu empreendimento</BudgetText>
                        <BudgetButton onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Tenho%20interesse%20em%20adquirir%20um%20de%20seus%20softwares', '_blank')}>Orçamento já!</BudgetButton>
                        <ButtonWhatsapp src={whatsappicon} onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20seus%20softwares', '_blank')} />
                    </BudgetInfo>
                </Content>

                <DefaultWhatsapp src={whatsappicon} onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20seus%20softwares', '_blank')} />
            </BackgroundGradient>
            <Footer />
        </>
    )
}

export default Home