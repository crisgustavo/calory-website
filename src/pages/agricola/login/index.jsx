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
import React, { useState } from 'react'
//import LoginValidation from './validation'


function AgricolaLogin() {

    const [isShow, setIsShow] = useState(false);

    const handlePassword = () => setIsShow(!isShow)

    const [ userValue, setUserValue ] = useState('');
    const [ passwordValue, setPasswordValue ] = useState('');

    const userChange = (event) => {setUserValue(event.target.value)}
    const passwordChange = (event) => {setPasswordValue(event.target.value)}
   
    let login = ''
    let senha = ''

    function ListUsers() {
    /*    let [ users, setUsers ] = useState([])
    
        useEffect(() => {
            async function getUsers() {
                const { data } = await app.get('/usuarios', async (req,res) => {
                    connection.getConnection(() => {
                        connection.query('SELECT * FROM usuarios')
                    })
                })
                
                setUsers(data)
            }
            
            getUsers();
        }, [])

        //login = users.login
        //senha = users.senha

        console.log('login: '+login, 'senha '+senha)
        console.log(users)
    */}

    function validaLogin() {
        console.log('hello world')
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
                            <Button type='button' onClick={AgricolaValidade()}>Login</Button>
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