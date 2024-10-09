import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TopBar from "../../components/TopBar";
import { ContainerThankyou, ContainerH1, ContainerPThankyou } from "./styles";

function ThankYou(){
    return (
        <>
            <TopBar />
            <Header />
                <ContainerThankyou>
                    <ContainerH1 style={{fontSize: '50px'}}>Obrigado!</ContainerH1>
                    <ContainerPThankyou>Nossa Equipe agradece pelo seu contato!<br />
                    Assim que possível retornaremos seu e-mail.</ContainerPThankyou>
                </ContainerThankyou>
            <Footer />
        </>
    )
}

export default ThankYou