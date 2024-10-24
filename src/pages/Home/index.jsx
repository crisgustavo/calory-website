import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'

import TopBar from '../../components/TopBar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'



import { ImgSlider, Content, BudgetInfo,
    BudgetText, BudgetButton, BudgetTitle,
    DefaultWhatsapp, BudgetTitleSpan,
    ButtonWhatsapp
} from "./styles"

import whatsappicon from '../../assets/images/icons/whatsapp.png'
import slider1 from '../../assets/midias/banner/Ban-mercado.jpg'
import slider2 from '../../assets/midias/banner/Ban-certificado.jpg'
import slider3 from '../../assets/midias/banner/Ban-restaurantes.jpeg'
import slider4 from '../../assets/midias/banner/Ban-autocenter.png'
import slider5 from '../../assets/midias/banner/Ban-empresarial.png'






function Home() {

    const navigate = useNavigate();

    const arrayImages = [
        { id: '1', image: slider1, url:  '/softwares/mercado'},
        { id: '2', image: slider2, url:  '/certificados-digitais'},
        { id: '3', image: slider3, url:  '/softwares/restaurante'},
        { id: '4', image: slider4, url:  '/softwares/autocenter'},
        { id: '5', image: slider5, url:  '/softwares/loja'}
    ]

    window.scrollTo({top: 0, behavior: 'smooth'})
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
                style={{'width': '99%'}}
            >
                {arrayImages.map((item) => (
                    <SwiperSlide key={item.id}>
                        <ImgSlider src={item.image} alt='Slider' className='slide-item' onClick={() => navigate(item.url)}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Content>
                <BudgetInfo>
                    <BudgetTitle>Ligue agora ou chame no whatsapp
                    <BudgetTitleSpan>(44) 99993-9313</BudgetTitleSpan></BudgetTitle>
                    <BudgetText>Nossos consultores terão o maior prazer em trazer a solução para o seu empreendimento</BudgetText>
                    <BudgetButton onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Tenho%20interesse%20em%20adquirir%20um%20de%20seus%20softwares', '_blank')}>Orçamento já!</BudgetButton>
                    <ButtonWhatsapp src={whatsappicon} onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20seus%20softwares', '_blank')} />
                </BudgetInfo>
            </Content>

            
            <Footer />

            <DefaultWhatsapp src={whatsappicon} onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20seus%20softwares', '_blank')} />

        </>
    )
}

export default Home