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

import mercadoimg from '../../../assets/midias/produto/b-mercados.jpg'
import WhatsappBudget from '../../../components/WhatsappBudget';
import PageContentLeft from '../../../components/PageContentLeft';
import NewTopBar from '../../../components/NewTopBar';

function SoftwareMercado() {
    window.scrollTo({top: 0, behavior: 'smooth'})

    return (
        <>
            <NewTopBar />
            
            <PageContent>
                <PageContentTitle>Empresarial Mercados e Conveniências</PageContentTitle>
                
                <PageContentInfo>
                    <PageContentLeft>
                        <PageContentImage src={mercadoimg} />
                        <WhatsappBudget />
                    </PageContentLeft>
                    <PageContentDescription>
                        <PageH2>Sistema Empresarial completo para segmento de MERCADOS e CONVENIÊNCIAS.</PageH2>
                        <PageH3>Este módulo é indicado para os segmentos: Mercados, Açougues, Padarias, Mercearias, Lojas de Conveniências, Adegas, Atacados, Lojas de Alimentos, Lojas de Doces</PageH3>
                        <PageContentDescriptionInfo>
                            <CheckImg /><PageP>FLUXO FINANCEIRO, CONTROLE BANCÁRIO E CONTROLE DE MÚLTIPLAS CONTAS</PageP>
                            <CheckImg /><PageP>MOVIMENTO DIÁRIO CONTÁBIL</PageP>
                            <CheckImg /><PageP>RECIBOS, CARNÊS, DUPLICATAS E NOTAS PROMISSÓRIAS</PageP>
                            <CheckImg /><PageP>EMISSÃO DE BOLETO</PageP>
                            <CheckImg /><PageP>RECEBIMENTOS COM CARTÕES NO SISTEMA TEF</PageP>
                            <CheckImg /><PageP>CONTROLE DE CHEQUES PRÉ-DATADOS</PageP>
                            <CheckImg /><PageP>CONTAS A PAGAR COM CÁLCULO DE JUROS</PageP>
                            <CheckImg /><PageP>CONTAS A RECEBER COM CÁLCULO DE JUROS</PageP>
                            <CheckImg /><PageP>CONTROLE DE CAIXA</PageP>
                            <CheckImg /><PageP>CONTAS A PAGAR</PageP>
                            <CheckImg /><PageP>CONTAS A RECEBER</PageP>
                            <CheckImg /><PageP>MAIS DE 50 RELATORIOS GERENCIAIS</PageP>
                            <CheckImg /><PageP>DESTACA CLIENTES EM ATRASO </PageP>
                            <CheckImg /><PageP>PAGAMENTO PARCIAL DE CONTAS</PageP>
                            <CheckImg /><PageP>SELECIONAR / MARCAR VÁRIAS CONTAS PARA O RECEBIMENTO / PAGAMENTO</PageP>
                            <CheckImg /><PageP>CONTROLE DE LIMITE DE CRÉDITO</PageP>
                            <CheckImg /><PageP>HISTÓRICO DE VENDAS POR CLIENTES</PageP>
                            <CheckImg /><PageP>RESERVA DE MERCADORIA NO PEDIDO</PageP>
                            <CheckImg /><PageP>CADASTRO DE PRODUTO E FORNECEDOR NA IMPORTAÇÃO DO XML DE FORMA AUTOMÁTICA</PageP>
                            <CheckImg /><PageP>CADASTRO DE CLIENTES E FORNECEDORES</PageP>
                            <CheckImg /><PageP>FATOR DE CONVERSÃO DO CADASTRO DE UNIDADE DE MEDIDA</PageP>
                            <CheckImg /><PageP>CONVERSOR DE CAIXA PARA UNIDADES</PageP>
                            <CheckImg /><PageP>LOCALIZAÇÃO NO ESTOQUE</PageP>
                            <CheckImg /><PageP>CONTROLE DE VALIDADE POR LOTE</PageP>
                            <CheckImg /><PageP>CONTROLE DE ESTOQUE</PageP>
                            <CheckImg /><PageP>E-MAIL NA NFe COM XML E DANFE (PDF) ANEXADOS</PageP>
                            <CheckImg /><PageP>EMISSÃO DE NFe E NFCe</PageP>
                            <CheckImg /><PageP>IMPRESSÃO DE ETIQUETAS</PageP>
                            <CheckImg /><PageP>CRIAÇÃO DE COD DE BARRAS INTERNO</PageP>
                            <CheckImg /><PageP>CONTROLE DE PDV</PageP>
                            <CheckImg /><PageP>CALCULO DE DESCONTO AUTOMÁTICO PARA VENDAS ACIMA DE X UNIDADES</PageP>
                            <CheckImg /><PageP>CONTROLE COMPLETO DE COMISSÃO (POR VENDEDOR, GRUPO DE PRODUTOS E PRODUTOS)</PageP>
                            <CheckImg /><PageP>ORDEM DE SERVIÇO</PageP>
                            <CheckImg /><PageP>ENVIO DE XML PARA A CONTABILIDADE</PageP>
                            <CheckImg /><PageP>BACKUP AUTOMÁTICO SEMPRE NO PRIMEIRO ACESSO DO DIA</PageP>
                            <CheckImg /><PageP>CONTROLE DE ACESSO POR USUÁRIO E SENHA - COMPLETO E RESTRITO</PageP>
                            <CheckImg /><PageP>SUPORTE REMOTO</PageP>
                            <CheckImg /><PageP>SEM LIMITE DE USUÁRIOS</PageP>
                        </PageContentDescriptionInfo>
                    </PageContentDescription>
                </PageContentInfo>
            </PageContent>


            <Footer />
        </>
    )
}

export default SoftwareMercado