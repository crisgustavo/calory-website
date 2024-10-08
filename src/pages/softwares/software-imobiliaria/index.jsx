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

import imobiliariaimg from '../../../assets/midias/produto/b-imobiliaria.jpg'
import PageContentLeft from '../../../components/PageContentLeft';
import WhatsappBudget from '../../../components/WhatsappBudget';


function SoftwareImobiliaria() {

    return (
        <>
            <TopBar />
            <Header />

            <PageContent>
                <PageContentTitle>Empresarial Imobiliaria</PageContentTitle>
                
                <PageContentInfo>
                    <PageContentLeft>
                        <PageContentImage src={imobiliariaimg} />
                        <WhatsappBudget />
                    </PageContentLeft>
                    <PageContentDescription>
                        <PageH2>Sistema Empresarial completo para segmento de IMOBILIÁRIA.</PageH2>
                        <PageH3> </PageH3>
                        <PageContentDescriptionInfo>
                            <CheckImg /><PageP>CADASTRO DE IMOVEIS</PageP>
                            <CheckImg /><PageP>CADASTRO DE INQUILINOS</PageP>
                            <CheckImg /><PageP>CADASTRO DE FIADOR</PageP>
                            <CheckImg /><PageP>GERADOR DE CONTRATOS</PageP>
                            <CheckImg /><PageP>CONTROLE DE RECEBIMENTOS</PageP>
                            <CheckImg /><PageP>CONTROLE DE REPASSE</PageP>
                            <CheckImg /><PageP>TAXAS ADMINISTRATIVAS</PageP>
                            <CheckImg /><PageP>CONTROLE DE CAIXA</PageP>
                            <CheckImg /><PageP>GERENCIAMENTO DE MANUTENÇÃO DOS IMOVEIS</PageP>
                            <CheckImg /><PageP>CONTAS A PAGAR</PageP>
                            <CheckImg /><PageP>CONTAS A RECEBER</PageP>
                            <CheckImg /><PageP>SUPORTE REMOTO</PageP>
                        </PageContentDescriptionInfo>
                    </PageContentDescription>
                </PageContentInfo>
            </PageContent>


            <Footer />

        </>
    )
}

export default SoftwareImobiliaria