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

import agrovetimg from '../../../assets/midias/produto/b-agrovet.jpg'
import PageContentLeft from '../../../components/PageContentLeft';
import WhatsappBudget from '../../../components/WhatsappBudget';

function SoftwareAgrovet() {
    window.scrollTo({top: 0, behavior: 'smooth'})

    return (
        <>
            <TopBar />
            <Header />

            <PageContent>
                <PageContentTitle>Empresarial Agro e Veterinárias</PageContentTitle>
                
                <PageContentInfo>
                    <PageContentLeft>
                        <PageContentImage src={agrovetimg} />
                        <WhatsappBudget />
                    </PageContentLeft>
                    <PageContentDescription>
                        <PageH2>Sistema Empresarial completo para segmento do AGRONEGÓCIO.</PageH2>
                        <PageH3>Este módulo é indicado para os segmentos: Casas de Rações, Clinicas Veterinárias, Casas de Silagens, Pet Shop e Agropecuárias.</PageH3>
                        <PageContentDescriptionInfo>
                            <CheckImg /><PageP>BUSCA POR PRICIPIO ATIVO</PageP>
                            <CheckImg /><PageP>LOCALIZAÇÃO NO ESTOQUE</PageP>
                            <CheckImg /><PageP>ORDEM DE SERVIÇO</PageP>
                            <CheckImg /><PageP>CONTROLE DE VALIDADE POR LOTE</PageP>
                            <CheckImg /><PageP>EMISSÃO DE RECEITUARIO</PageP>
                            <CheckImg /><PageP>CONTAS A PAGAR COM CALCULO DE JUROS</PageP>
                            <CheckImg /><PageP>CONTAS A RECEBER COM CALCULOS DE JUROS</PageP>
                            <CheckImg /><PageP>DESTACA CLIENTE EM ATRASO</PageP>
                            <CheckImg /><PageP>MOVIMENTO DIARIO CONTÁBIL</PageP>
                            <CheckImg /><PageP>COMISSÃO PARA VENDEDORES</PageP>
                            <CheckImg /><PageP>COMISSÃO POR PRODUTO</PageP>
                            <CheckImg /><PageP>FATOR DE CONVERSÃO DO CADASTRO DE UNIDADE DE MEDIDAS</PageP>
                            <CheckImg /><PageP>RESERVA DE MERCADORIAS NA TELA DE VENDA</PageP>
                            <CheckImg /><PageP>INTEGRAÇÃO COM BALANÇA NO CHECKOUT</PageP>
                            <CheckImg /><PageP>ENVIO DE XML PARA CONTABILIDADE</PageP>
                            <CheckImg /><PageP>E-MAIL NA NF-E COM XML E DANFE (PDF) ANEXADOS</PageP>
                            <CheckImg /><PageP>EMISSÃO DE NFe E NFCe</PageP>
                            <CheckImg /><PageP>CONTROLE DE CAIXA</PageP>
                            <CheckImg /><PageP>MAIS DE 50 RELATORIOS GERENCIAIS</PageP>
                            <CheckImg /><PageP>CONTAS A PAGAR</PageP>
                            <CheckImg /><PageP>CONTAS A RECEBER</PageP>
                            <CheckImg /><PageP>DOWNLOAD/IMPORTAÇÃO DE XML DE NFE DE COMPRAS</PageP>
                            <CheckImg /><PageP>CONTROLE DE ESTOQUE</PageP>
                            <CheckImg /><PageP>EMISSÃO DE BOLETO</PageP>
                            <CheckImg /><PageP>CRIAÇÃO DE COD DE BARRAS INTERNO</PageP>
                            <CheckImg /><PageP>SUPORTE REMOTO</PageP>
                            <CheckImg /><PageP>IMPRESSÃO DE ETIQUETAS</PageP>
                            <CheckImg /><PageP>RECEBIMENTOS COM CARTÕES NO SISTEMA TEF</PageP>
                            <CheckImg /><PageP>CALCULO DE DESCONTO AUTOMÁTICO PARA VENDAS ACIMA DE XX UNIDADES</PageP>
                        </PageContentDescriptionInfo>
                    </PageContentDescription>
                </PageContentInfo>
            </PageContent>


            <Footer />

        </>
    )
}

export default SoftwareAgrovet