import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TopBar from "../../components/TopBar";
import Whatsapp from "../../components/Whatsapp";
import { Container, ContainerH1, ContainerH2, ContainerP, LineRow } from "./styles";




function SobreNos() {
    window.scrollTo({top: 0, behavior: 'smooth'})
    return (
        <>
            <TopBar />
            <Header />
                <Container>
                    <ContainerH1>Sobre Nós</ContainerH1>

                    <LineRow></LineRow>
                    
                    <ContainerH2>A Empresa</ContainerH2>
                    
                    <ContainerP>A Calory Sistemas é uma empresa que desenvolve Sistemas Administrativos, 
                        revende equipamentos de informática, relógios de ponto e certificados digitais. 
                        Atuando no mercado desde 2008, com desenvolvimento de Softwares com qualidade e segurança. 
                        Os nossos Sistemas atendem os mais criteriosos clientes, sendo pequenas, médias ou grandes 
                        Empresas, com controles gerenciais completos desde cadastros, entradas e saídas, estoque, 
                        financeiro e emissão de documentos fiscais, tudo integrado, de fácil acesso e manuseio. 
                        A empresa conta com mão-de-obra especializada, aplicando metodologias inovadoras, buscando 
                        sempre utilizar novas tecnologias esoluções inteligentes gerando mais confiabilidade, facilidade, 
                        agilidade e maior rendimento.</ContainerP>

                        <ContainerH2>Soluções</ContainerH2>

                        <ContainerP>Oferecemos soluções de gestão empresarial para que a sua empresa tenha competitividade, 
                            eficiência e agilidade nas decisões em seu mercado de atuação. Cada solução possui as 
                            funcionalidades necessárias para automatizar processos administrativos, financeiros e, 
                            principalmente, oferecer total controle na gestão do seu negócio.<br/> 
                            Conte com a Calory Sistemas para informatizar Comércios em geral (Supermercados, 
                            mercearias, lojas de calçados, confecções, conveniências, açougues, padarias, 
                            lanchonetes, restaurantes, oficinas/autopeças, petshops, agropecuárias, papelarias, locações, 1.99, etc..), 
                            Agronegócios (Silos, fazendas, condomínios agrícolas, pecuária, etc..), Distribuidoras (alimentos, bebidas, 
                            etc..),Industrias em geral (confecções, facção, acabamentos, etc..), Imobiliárias, 
                            Danceterias/Festas/Estacionamentos e 
                            Garagem/revenda de veículos. Conheça as Soluções Calory Sistemas específicas para 
                            o seu segmento, entre em contato conosco.</ContainerP>
                            <ContainerH2>Atendimentos Personalizados</ContainerH2>
                            <ContainerP>Disponibilizamos aos nossos clientes treinamentos personalizados 
                                ministrados por profissionais altamente qualificados, que podem ser 
                                ministrados no local do cliente, na nossa sede ou via internet através de 
                                sistema de suporte remoto.<br /> 
                                Entre em contato conosco e solicite um orçamento.</ContainerP>
                            <ContainerH2>Missão Calory Sistemas</ContainerH2>
                            <ContainerP>Desenvolver sistemas e comercializar produtos de qualidade, gerando prosperidade e 
                                satisfação aos clientes, através da melhoria contínua de nossos serviços e atendimentos.</ContainerP>
                            <ContainerH2>Visão</ContainerH2>
                            <ContainerP>Tornar-se uma empresa reconhecida nacionalmente pela excelência na prestação de serviços.</ContainerP>
                            <ContainerH2>Valores</ContainerH2>
                            <ContainerP>1-Integridade. <br />
                                2-Comprometimento.<br />
                                3-Valorização Humana.< br/>
                                4-Superação de Resultados. <br />
                                5-Melhoria contínua. <br />
                                6-Inovação. <br />
                                7-Sustentabilidade.</ContainerP>
                </Container>

                <Whatsapp />
            <Footer />
        </>
    )
}

export default SobreNos