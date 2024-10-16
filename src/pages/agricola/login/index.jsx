import {
    Background, Login, Header,
    LoginH1, LoginTitle, InputUser,
    Button, LoginHeader, EyeIcon,
    LoginContent, LoginBackground, Footer,
    Password, InputPassword
} from './styles'
import ContainerLogo from '../../../components/ContainerLogo'
import FooterElements from '../../../components/FooterElements'
import { useEffect, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import GetUsuários from '../../../scripts/getUsuarios'


function AgricolaLogin() {

    const navigate = useNavigate();

    const [isShow, setIsShow] = useState(false);

    const handlePassword = () => setIsShow(!isShow)

    const [ userValue, setUserValue ] = useState('');
    const [ passwordValue, setPasswordValue ] = useState('');

    const userChange = (event) => {setUserValue(event.target.value)}
    const passwordChange = (event) => {setPasswordValue(event.target.value)}

        let userList = []
        userList = GetUsuários(userList)


    function validaLogin(userValue, passwordValue) {
        let passwordEncoded = btoa(passwordValue)

        const id = userList.filter((user) => {
            if (user.login == userValue && user.senha == passwordEncoded) {
                return true
            } else {
                return false
            }
        })

        if (id.length !== 0) {
            const idcatch = id.map(item => {
                idclifor = item.id_clifor
                nome = item.nome
            })
            navigate('/agricola')
        } else {
            alert('Usuário ou senha incorretos. Tente novamente.')
        }
    }
        
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
                            <InputUser className='user' type='number' placeholder='Digite apenas números' value={userValue} onChange={userChange}/>
                            <LoginH1>SENHA</LoginH1>
                            <Password>
                                <InputPassword type={isShow ? 'text' : 'password'} placeholder='Digite sua senha' value={passwordValue} onChange={passwordChange}/>
                                <EyeIcon type='button' onClick={handlePassword}>
                                    {!isShow && <Eye size={18} />}
                                    {isShow && <EyeOff size={18} />}                                    
                                </EyeIcon>
                            </Password>
                            <Button type='button' onClick={() => validaLogin(userValue, passwordValue, userList)}>Login</Button>
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

export let idclifor
export let nome