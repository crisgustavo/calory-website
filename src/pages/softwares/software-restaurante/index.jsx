import TopBar from '../../../components/TopBar';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import PageContent from '../../../components/PageContent';
import PageContentTitle from '../../../components/PageContentTitle';
import PageContentInfo from '../../../components/PageContentInfo';
import PageContentDescription from '../../../components/PageContentDescription';
import PageContentDescriptionInfo from '../../../components/PageContentDescriptionInfo';
import PageH2 from '../../../components/PageH2';
import PageH3 from '../../../components/PageH3';
import CheckImg from '../../../components/CheckImg';
import PageP from '../../../components/PageP';
import { PageContentImage } from './styles';

import restauranteimg from '../../../assets/midias/produto/b-restaurantes.jpg'
import WhatsappBudget from '../../../components/WhatsappBudget';
import PageContentLeft from '../../../components/PageContentLeft';

function SoftwareRestaurante() {
    window.scrollTo({top: 0, behavior: 'smooth'})


    return (
        <>
            <TopBar />
            <Header />
            
            <PageContent>
                <PageContentTitle>Empresarial Restaurantes e Lanchonetes</PageContentTitle>
                
                <PageContentInfo>
                    <PageContentLeft>
                        <PageContentImage src={restauranteimg} />
                        <WhatsappBudget />
                    </PageContentLeft>
                    <PageContentDescription>
                        <PageH2>Sistema Empresarial completo para segmento de RESTAURANTES e LANCHONETES.</PageH2>
                        <PageH3>Este módulo é indicado para os segmentos: Restaurantes, Bares, Lanchonetes, Bistrôs, Pubs e Padarias.</PageH3>
                        <PageContentDescriptionInfo>
                            <CheckImg /><PageP>APP NO CELULAR INTEGRADO COM O SISTEMA PARA GARÇOM TIRAR PEDIDO</PageP>
                            <CheckImg /><PageP>APP NO CELULAR INTEGRADO CM ASS IMPRESSORAS</PageP>
                            <CheckImg /><PageP>SISTEMA INTEGRADO COM A BALANÇA</PageP>
                            <CheckImg /><PageP>TELA DE MULTI-ATENDIMENTO</PageP>
                            <CheckImg /><PageP>EMISSÃO DE NFe E NFCe</PageP>
                            <CheckImg /><PageP>CONTROLE DE CAIXA</PageP>
                            <CheckImg /><PageP>MAIS DE 50 RELATORIOS GERENCIAIS</PageP>
                            <CheckImg /><PageP>CONTAS A PAGAR</PageP>
                            <CheckImg /><PageP>CONTAS A RECEBER</PageP>
                            <CheckImg /><PageP>DOWNLOAD/IMPORTAÇÃO DE XML DE NFE DE COMPRAS</PageP>
                            <CheckImg /><PageP>CONTROLE DE ESTOQUE</PageP>
                            <CheckImg /><PageP>EMISSÃO DE BOLETO</PageP>
                            <CheckImg /><PageP>RECEBIMENTOS COM CARTÕES NO SISTEMA TEF</PageP>
                            <CheckImg /><PageP>SUPORTE REMOTO</PageP>
                        </PageContentDescriptionInfo>
                    </PageContentDescription>
                    
                </PageContentInfo>
            </PageContent>

            


            <Footer />

        </>
    )
}

export default SoftwareRestaurante