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

import joiasimg from '../../../assets/midias/produto/b-joias.jpg'
import PageContentLeft from '../../../components/PageContentLeft';
import WhatsappBudget from '../../../components/WhatsappBudget';


function SoftwareJoalheria() {
    window.scrollTo({top: 0, behavior: 'smooth'})

    return (
        <>
            <TopBar />
            <Header />

            <PageContent>
                <PageContentTitle>Empresarial Joias</PageContentTitle>
                
                <PageContentInfo>
                    <PageContentLeft>
                        <PageContentImage src={joiasimg} />
                        <WhatsappBudget />
                    </PageContentLeft>
                    <PageContentDescription>
                        <PageH2>Sistema Empresarial completo para segmento de JOALHERIA, RELOJOARIAS e ÓTICAS.</PageH2>
                        <PageH3>O módulo Empresarial Joias conta com algumas funcionalidades específicas para a área, como por exemplo:</PageH3>
                        <PageContentDescriptionInfo>
                            <CheckImg /><PageP>CADASTRO DIÁRIO DE COTAÇÕES DE OURO, PRATA E OURO BAIXO</PageP>
                            <CheckImg /><PageP>PREÇOS DE JOIAS VARIAVEIS DE ACORDO COM A COTAÇÃO DO DIA</PageP>
                            <CheckImg /><PageP>ETIQUETAS DE CÓDIGO DE BARRAS PRÓPRIAS PARA JÓIAS E RELÓGIOS</PageP>
                            <CheckImg /><PageP>FLUXO FINANCEIRO, CONTROLE BANCÁRIO E CONTROLE MÚLTIPLAS CONTAS</PageP>
                            <CheckImg /><PageP>MOVIMENTO DIÁRIO CONTÁBIL</PageP>
                            <CheckImg /><PageP>RECIBOS, CARNÊS DUPLICATAS E NOTAS PROMISSÓRIAS</PageP>
                            <CheckImg /><PageP>EMISSÃO DE BOLETO</PageP>
                            <CheckImg /><PageP>RECEBIMENTOS COM CARTÕES NO SISTEMA TEF</PageP>
                            <CheckImg /><PageP>CONTROLE DE CHEQUES PRÉ-DATADOS</PageP>
                            <CheckImg /><PageP>CONTAS A PAGAR COM CÁLCULO DE JUROS</PageP>
                            <CheckImg /><PageP>CONTAS A RECEBER COM CÁLCULO DE JUROS</PageP>
                            <CheckImg /><PageP>CONTROLE DE CAIXA</PageP>
                            <CheckImg /><PageP>MAIS DE 50 RELATÓRIOS GERENCIAIS</PageP>
                            <CheckImg /><PageP>DESTACA CLIENTES EM ATRASO</PageP>
                            <CheckImg /><PageP>PAGAMENTO PARCIAL DE CONTAS</PageP>
                            <CheckImg /><PageP>SELECIONAR / MARCAR VÁRIAS CONTAS PARA RECEBIMENTO / PAGAMENTO</PageP>
                            <CheckImg /><PageP>CONTROLE DE LIMITE DE CRÉDITO</PageP>
                            <CheckImg /><PageP>HISTÓRICO DE VENDAS POR CLIENTES</PageP>
                            <CheckImg /><PageP>RESERVA DE MERCADORIA NO PEDIDO</PageP>
                            <CheckImg /><PageP>PERMITE O CADASTRO DE PRODUTO, FORNECEDOR NA IMPORTAÇÃO DO XML DE FORMA AUTOMÁTICA</PageP>
                            <CheckImg /><PageP>CADASTRO DE CLIENTES E FORNECEDORES</PageP>
                            <CheckImg /><PageP>FATOR DE CONVERSÃO DO CADASTRO DE UNIDADE DE MEDIDA</PageP>
                            <CheckImg /><PageP>CONVERSOR DE CAIXA PARA UNIDADES</PageP>
                            <CheckImg /><PageP>LOCALIZAÇÃO NO ESTOQUE</PageP>
                            <CheckImg /><PageP>CONTROLE DE VALIDADE POR LOTE</PageP>
                            <CheckImg /><PageP>CONTROLE DE ESTOQUE</PageP>
                            <CheckImg /><PageP>CONTROLE DE VALIDADE POR LOTE</PageP>
                            <CheckImg /><PageP>E-MAIL NA NF-E COM XML E DANFE (PDF) ANEXADOS</PageP>
                            <CheckImg /><PageP>EMISSÃO DE NFe E NFCe</PageP>
                            <CheckImg /><PageP>INTEGRAÇÃO COM BALANÇA</PageP>
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

export default SoftwareJoalheria