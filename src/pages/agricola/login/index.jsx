import {
    Background, Login, Header,
    LoginH1, LoginTitle, InputUser,
    Button, LoginHeader, EyeIcon,
    LoginContent, LoginBackground, Footer,
    Password, InputPassword
} from './styles'
import ContainerLogo from '../../../components/ContainerLogo'
import FooterElements from '../../../components/FooterElements'
import AgricolaValidade from './loginvalidation'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'




function AgricolaLogin() {

    const [isShow, setIsShow] = useState(false);

    const handlePassword = () => setIsShow(!isShow)

    return (
        <>
            <Background>
                <Header>
                    <ContainerLogo />
                </Header>
                <LoginBackground>
                </LoginBackground>
                    <Login>
                        <LoginHeader>
                            <LoginTitle>AGRÍCOLA</LoginTitle>
                        </LoginHeader>

                        <LoginContent>
                            <LoginH1>CPF/CNPJ</LoginH1>
                            <InputUser className='user' type='number' placeholder='Digite apenas números' />
                            <LoginH1>SENHA</LoginH1>
                            <Password>
                                <InputPassword type={isShow ? 'text' : 'password'} placeholder='Digite sua senha'/>
                                <EyeIcon type='button' onClick={handlePassword}>
                                    {!isShow && <Eye size={18} />}
                                    {isShow && <EyeOff size={18} />}                                    
                                </EyeIcon>
                            </Password>
                            <Button onClick={AgricolaValidade()}>Login</Button>
                        </LoginContent>
                    </Login>

                    <Footer>
                        <FooterElements />
                    </Footer>
                
            </Background>
            
            
        </>
    )

    
}

export default AgricolaLogin