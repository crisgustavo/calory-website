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

import madeireiraimg from '../../../assets/midias/produto/b-madeira.jpg'
import WhatsappBudget from '../../../components/WhatsappBudget';
import PageContentLeft from '../../../components/PageContentLeft';

function SoftwareMadeireira() {
    window.scrollTo({top: 0, behavior: 'smooth'})

    return (
        <>
            <TopBar />
            <Header />
            
            <PageContent>
                <PageContentTitle>Empresarial Madeireira</PageContentTitle>
                
                <PageContentInfo>
                    <PageContentLeft>
                        <PageContentImage src={madeireiraimg} />
                        <WhatsappBudget />
                    </PageContentLeft>
                    <PageContentDescription>
                        <PageH2>Sistema Empresarial completo para segmento de MADEIREIRA.</PageH2>
                        <PageH3>O módulo Empresarial Madeireira conta com algumas funcionalidades específicas para área, que ira ajudar na administração da empresa, como por exemplo:</PageH3>
                        <PageContentDescriptionInfo>
                            <CheckImg /><PageP>CALCULO POR MEDIDAS E QUANTIDADES</PageP>
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
                            <CheckImg /><PageP>CONTROLE DE ESTOQUE</PageP>
                            <CheckImg /><PageP>E-MAIL NA NFe COM XML E DANFE (PDF) ANEXADOS</PageP>
                            <CheckImg /><PageP>EMISSÃO DE NFe E NFCe</PageP>
                            <CheckImg /><PageP>IMPRESSÃO DE ETIQUETAS</PageP>
                            <CheckImg /><PageP>CALCULO DE DESCONTO AUTOMÁTICO PARA VENDAS ACIMA DE XX UNIDADES</PageP>
                            <CheckImg /><PageP>CRIAÇÃO DE COD DE BARRAS INTERNO</PageP>
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

export default SoftwareMadeireira