import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NewTopBar from "../../components/NewTopBar";
import TopBar from "../../components/TopBar";
import Whatsapp from "../../components/Whatsapp";
import { Container, ContainerH1, ContainerInfo, 
         FormEmail, InputEmail, InputName, 
         InputText, Button, 
         ContainerName, ContainerEmail,
         Localization,
         ContainerMapLeft,
         ContainerP,
         ContainerMapRight,
         Map
        } from "./styles";

function Contato(){
    window.scrollTo({top: 0, behavior: 'smooth'})
    return (
        <>
        
            <NewTopBar />
                <Container>
                    <FormEmail target="_blank" action="https://formsubmit.co/atendimento@calory.com.br" method="POST">
                        <ContainerInfo>
                            <ContainerName>
                            <ContainerH1>Nome:</ContainerH1>
                            <InputName type="text" name="name" placeholder="Digite seu nome" required></InputName>
                            </ContainerName>
                            
                            <ContainerEmail>
                            <ContainerH1>E-mail:</ContainerH1>
                            <InputEmail type="email" name="email" placeholder="Digite seu e-mail" required></InputEmail>
                            </ContainerEmail>
                        </ContainerInfo>
                        <ContainerH1>Mensagem:</ContainerH1>
                        <InputText type="text" name="message" placeholder="Digite sua mensagem para nós" required></InputText>
                        <Button type="submit">Enviar Mensagem</Button>

                        <input type="hidden" name="_next" value="http://calory.com.br/obrigado"></input>
                        <input type="hidden" name="_subject" value="Novo Contato do Site"></input>
                        <input type="hidden" name="_captcha" value="false"></input>
                        <input type="text" name="_honey" style={{display: 'none'}}></input>
                    </FormEmail>
                {/*
                    <Localization>
                    <ContainerMapLeft>
                        <ContainerH1 style={{textAlign: "center"}}>Palotina</ContainerH1>
                        <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.6875425843214!2d-53.84080052545717!3d-24.287641788674296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f36e6f92e1024f%3A0x546adc5d5a606c60!2sCalory%20Sistemas!5e0!3m2!1spt-BR!2sbr!4v1728481146878!5m2!1spt-BR!2sbr" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Map>
                        <ContainerP>
                            PALOTINA - PR <br />
                            Av. Pres. Kennedy, 1485 - Centro, <br />
                            Palotina - PR, 85950-035<br />
                            Fone (44) 3649-4444
                        </ContainerP>
                    </ContainerMapLeft>
                    <ContainerMapRight>
                        <ContainerH1 style={{textAlign: "center"}}>Pérola</ContainerH1>
                        <Map src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.457170766476!2d-53.679713725477555!3d-23.802336970487953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f334ebd3e11d05%3A0x6df893d37d71defd!2sCalory%20Sistema!5e0!3m2!1spt-BR!2sbr!4v1728481369078!5m2!1spt-BR!2sbr" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Map>
                        <ContainerP>
                            PÉROLA - PR <br />
                            Av. Doná Pérola Byington, 561 - Centro, <br />
                            Pérola - PR, 87540-000<br />
                            Fone (44) 3636-2883
                        </ContainerP>
                    </ContainerMapRight>
                </Localization>

                */}
                </Container>

                

            <Footer />

            <Whatsapp />
        </>
    )
}

export default Contato