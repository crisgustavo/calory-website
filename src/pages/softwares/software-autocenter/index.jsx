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

import autocenterimg from '../../../assets/midias/produto/b-autocenter.jpg'
import PageContentLeft from '../../../components/PageContentLeft';
import WhatsappBudget from '../../../components/WhatsappBudget';

function SoftwareAutocenter() {
    window.scrollTo({top: 0, behavior: 'smooth'})

    return (
        <>
            <TopBar />
            <Header />

            <PageContent>
                <PageContentTitle>Empresarial Autocenter</PageContentTitle>

                <PageContentInfo>
                    <PageContentLeft>
                        <PageContentImage src={autocenterimg} />
                        <WhatsappBudget />
                    </PageContentLeft>
                    <PageContentDescription>
                        <PageH2>Sistema Empresarial completo para segmento do AUTOCENTER.</PageH2>
                        <PageH3>Este módulo é indicado para os segmentos: Oficinas Mecânicas, Autoelétricas, Autopeças, Bicicletarias, Comércio de Pneus, Oficinas em Geral, Trocas de Óleo, Autovidros, Lavacar</PageH3>
                        <PageContentDescriptionInfo>
                            <CheckImg /><PageP>LOCALIZAÇÃO NO ESTOQUE</PageP>
                            <CheckImg /><PageP>CADASTRO DE CLIENTE / CADASTRO DE FROTAS</PageP>
                            <CheckImg /><PageP>CONTROLE DE COMISSÕES</PageP>
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
                            <CheckImg /><PageP>BACKUP AUTOMÁTICO / MANUAL</PageP>
                            <CheckImg /><PageP>COMISSÃO PARA OS VENDEDORES E COMISSÃO POR PRODUTO</PageP>
                            <CheckImg /><PageP>CONTROLE DE ACESSO POR USUÁRIO E SENHA - COMPLETO E RESTRITO</PageP>
                            <CheckImg /><PageP>HISTÓRICO DE VENDAS POR CLIENTES</PageP>
                            <CheckImg /><PageP>RESERVA DE MERCADORIA NO PEDIDO</PageP>
                            <CheckImg /><PageP>DESTACA CLIENTES EM ATRASO</PageP>
                        </PageContentDescriptionInfo>
                    </PageContentDescription>
                </PageContentInfo>
            </PageContent>


            <Footer />

        </>
    )
}

export default SoftwareAutocenter