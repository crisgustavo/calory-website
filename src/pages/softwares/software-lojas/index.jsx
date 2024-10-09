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

import lojasimg from '../../../assets/midias/produto/b-empresarial.jpg'
import PageContentLeft from '../../../components/PageContentLeft';
import WhatsappBudget from '../../../components/WhatsappBudget';

function SoftwareLojas() {
    window.scrollTo({top: 0, behavior: 'smooth'})

    return (
        <>
            <TopBar />
            <Header />

            <PageContent>
                <PageContentTitle>Empresarial Lojas</PageContentTitle>
                
                <PageContentInfo>
                    <PageContentLeft>
                        <PageContentImage src={lojasimg} />
                        <WhatsappBudget />
                    </PageContentLeft>
                    <PageContentDescription>
                        <PageH2>Sistema Empresarial completo para segmento de CALÇADOS e CONFECÇÕES.</PageH2>
                        <PageH3>Este módulo é indicado para os segmentos: Loja de Roupas, Loja de Calçados, Lojas de Acessórioas em Geral, Lojas de 1,99.</PageH3>
                        <PageContentDescriptionInfo>
                            <CheckImg /><PageP>TELA EXCLUSIVA PARA CONDICIONAL</PageP>
                            <CheckImg /><PageP>TABELA DE MULTI-ATENDIMENTO</PageP>
                            <CheckImg /><PageP>LIBERAÇÃO DE VENDAS A PRAZO APÓS APROVAÇÃO DE CREDITO</PageP>
                            <CheckImg /><PageP>CONTROLE DE LIMITES DE CRÉDITO PARA CLIENTE</PageP>
                            <CheckImg /><PageP>EMISSÃO DE NFe E NFCe</PageP>
                            <CheckImg /><PageP>CONTROLE DE CAIXA</PageP>
                            <CheckImg /><PageP>MAIS DE 50 RELATORIOS GERENCIAIS</PageP>
                            <CheckImg /><PageP>CONTAS A PAGAR</PageP>
                            <CheckImg /><PageP>CONTAS A RECEBER</PageP>
                            <CheckImg /><PageP>DOWNLOAD/IMPORTAÇÃO DE XML DE NFE DE COMPRAS</PageP>
                            <CheckImg /><PageP>CONTROLE DE ESTOQUE</PageP>
                            <CheckImg /><PageP>EMISSÃO DE BOLETO</PageP>
                            <CheckImg /><PageP>CRIAÇÃO COD DE BARRA INTERNO</PageP>
                            <CheckImg /><PageP>EMISSÃO DE ETIQUETAS DE COD DE BARRAS PERSONALIZADAS</PageP>
                            <CheckImg /><PageP>IMPRESSÃO DE ETIQUETAS DE GÔNDOLA / VITRINE</PageP>
                            <CheckImg /><PageP>RECEBIMENTOS COM CARTÕES NO SISTEMA TEF</PageP>
                            <CheckImg /><PageP>CALCULO DE DESCONTO AUTOMÁTICO PARA VENDAS ACIMA DE X UNIDADES</PageP>
                            <CheckImg /><PageP>LANÇAMENTOS DE COMPRAS POR GRADES DE TAMANHOS</PageP>
                            <CheckImg /><PageP>SUPORTE REMOTO</PageP>
                        </PageContentDescriptionInfo>
                    </PageContentDescription>
                </PageContentInfo>
            </PageContent>


            <Footer />

        </>
    )
}

export default SoftwareLojas