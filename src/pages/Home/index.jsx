import { useNavigate } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react'

import TopBar from '../../components/TopBar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import NewTopBar from '../../components/NewTopBar'



import {
    /*ImgSlider,*/ Content, BudgetInfo,
    BudgetText, BudgetButton, BudgetTitle,
    DefaultWhatsapp, BudgetTitleSpan,
    ButtonWhatsapp,
    Banner,
    BannerImg,
    BannerH1,
    BannerP,
    BackgroundGradient,
    BannerText,
    IMGBanner,
    Content1,
    ContentInfo1,
    ContentInfoHead,
    ContentInfoBody,
    ContentIcon,
    ContentHeadTitle,
    ContentInfoBodyP,
    Content1Title,
    Content1List,
    BannerButton,
    BannerContent,
    BannerFloat1,
    BannerFloat2,
    FloatH1,
    FAQContent,
    FAQTitle,
    FAQQuestion,
    FAQAnswer,
    FAQParagraph,
    FAQList
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

import empresa from '../../assets/images/icons/empresa.png'
import treinamento from '../../assets/images/icons/treinamento.png'
import suporte from '../../assets/images/icons/suporte.png'


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

            {/*<Swiper
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
                    </Swiper>*/}

            <BackgroundGradient>
                <TopBar />

                <NewTopBar />

                <Banner>

                    <BannerText>
                        <BannerH1>Desde 2008 <b>simplificando a gestão de Empreendedores</b> por todo o Brasil</BannerH1>

                        <BannerP><hr /></BannerP>

                        <BannerButton onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Tenho%20interesse%20em%20testar%20gratuitamente%20seu%20software', '_blank')}>Experimente grátis!</BannerButton>
                    </BannerText>

                    <BannerContent>
                        <BannerImg>
                            <IMGBanner src={banner3} />
                        </BannerImg>
                        <BannerFloat1>
                            <FloatH1>+ 1000 Clientes</FloatH1>
                        </BannerFloat1>
                        <BannerFloat2>
                            <FloatH1>Diversos Ramos <br /> de Atividade</FloatH1>
                        </BannerFloat2>
                    </BannerContent>
                </Banner>

                <Content>
                    <BudgetInfo>
                        <BudgetTitle>Ligue agora ou chame no whatsapp
                            <BudgetTitleSpan>(44) 99993-9313</BudgetTitleSpan></BudgetTitle>
                        <BudgetText>Nossos consultores terão o maior prazer em trazer a solução para o seu empreendimento</BudgetText>
                        <BudgetButton onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Tenho%20interesse%20em%20adquirir%20um%20de%20seus%20softwares', '_blank')}>Orçamento já!</BudgetButton>
                        <ButtonWhatsapp src={whatsappicon} onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20seus%20softwares', '_blank')} />
                    </BudgetInfo>
                </Content>


                <Content1>
                    <Content1Title>Quais são nossas vantagens?</Content1Title>
                    <Content1List>
                        <ContentInfo1>
                            <ContentInfoHead>
                                <ContentIcon src={empresa} />
                                <ContentHeadTitle>Sistemas Empresariais</ContentHeadTitle>
                            </ContentInfoHead>
                            <ContentInfoBody>
                                <ContentInfoBodyP>Sistemas empresariais que automatizam processos, reduzem
                                    erros e economizam tempo. Eles melhoram a comunicação, integram áreas e
                                    permitem análises precisas, aumentando a eficiência e a produtividade.
                                    Invista em tecnologia e transforme sua operação!
                                </ContentInfoBodyP>
                            </ContentInfoBody>
                        </ContentInfo1>

                        <ContentInfo1>
                            <ContentInfoHead>
                                <ContentIcon src={treinamento} />
                                <ContentHeadTitle>Treinamento</ContentHeadTitle>
                            </ContentInfoHead>
                            <ContentInfoBody>
                                <ContentInfoBodyP>Nossos treinamentos são essenciais para garantir que a equipe
                                    utilize as ferramentas de forma eficiente. Eles aceleram o aprendizado,
                                    minimizam erros e atendem às necessidades específicas de cada área,
                                    aumentando a produtividade e otimizando resultados.
                                </ContentInfoBodyP>
                            </ContentInfoBody>
                        </ContentInfo1>

                        <ContentInfo1>
                            <ContentInfoHead>
                                <ContentIcon src={suporte} />
                                <ContentHeadTitle>Suporte Técnico</ContentHeadTitle>
                            </ContentInfoHead>
                            <ContentInfoBody>
                                <ContentInfoBodyP>
                                    Nosso suporte técnico online oferece assistência imediata, resolvendo
                                    problemas rapidamente. Com acesso a especialistas, a equipe pode tirar
                                    dúvidas e manter a produtividade alta, garantindo confiança na ferramenta.
                                </ContentInfoBodyP>
                            </ContentInfoBody>
                        </ContentInfo1>
                    </Content1List>
                </Content1>

                <FAQContent>
                    <FAQTitle>Perguntas Frequentes...</FAQTitle>

                    <FAQList>
                        <FAQQuestion>
                            <FAQParagraph><b>Cliente: </b>Posso fazer um teste gratuito antes de adquirir o
                                sistema?</FAQParagraph>
                        </FAQQuestion>
                        <FAQAnswer>
                            <FAQParagraph><b>Calory: </b>Sim, fornecemos teste  grátis por 30 dias.</FAQParagraph>
                        </FAQAnswer>
                    </FAQList>

                    <FAQList>
                        <FAQQuestion>
                            <FAQParagraph><b>Cliente: </b>O Suporte é robotizado?</FAQParagraph>
                        </FAQQuestion>
                        <FAQAnswer>
                            <FAQParagraph><b>Calory: </b>Não. Nossos atendimentos são todos humanizados.
                                Atendemos via whatsapp (mensagens, áudios ou ligação), o que for mais conveniente
                                para o cliente.</FAQParagraph>
                        </FAQAnswer>
                    </FAQList>

                    <FAQList>
                        <FAQQuestion>
                            <FAQParagraph><b>Cliente: </b>Quais os valores dos planos?</FAQParagraph>
                        </FAQQuestion>
                        <FAQAnswer>
                            <FAQParagraph><b>Calory: </b>Varia da necessidade do cliente. São módulos que juntos
                                atendem as necessidades de cada cliente.</FAQParagraph>
                        </FAQAnswer>
                    </FAQList>

                    <FAQList>
                        <FAQQuestion>
                            <FAQParagraph><b>Cliente: </b>Preciso de internet para usar o sistema?</FAQParagraph>
                        </FAQQuestion>
                        <FAQAnswer>
                            <FAQParagraph><b>Calory: </b>Nossos sistemas trabalham tanto online quanto
                                offline.</FAQParagraph>
                        </FAQAnswer>
                    </FAQList>

                </FAQContent>



                <DefaultWhatsapp src={whatsappicon} onClick={() => window.open('https://wa.me/5544999939313?text=Olá!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20seus%20softwares', '_blank')} />
            </BackgroundGradient >
            <Footer />
        </>
    )
}

export default Home