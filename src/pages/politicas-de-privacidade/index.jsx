import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TopBar from "../../components/TopBar";
import plus from '../../assets/images/icons/pls.png'
import Whatsapp from "../../components/Whatsapp";
import { Content, Product, Plus,
         ProductH1, ProductP
} from './styles'

function PoliticaDePrivacidade() {
    window.scrollTo({top: 0, behavior: 'smooth'})

    const navigate = useNavigate();
    return (
        <>
            <TopBar/>

            <Header />

                <Content>
                    <Product>
                        <Plus className='plus' src={plus} alt='+' onClick={() => navigate('/politicas-de-privacidade/politicas-de-privacidade/politica-de-privacidade-appcadcliente')} />
                        <ProductH1 className='producth1'>Política de Privacidade AppCadCliente</ProductH1>
                        <ProductP>1. Informações gerais<br />
                                  A presente Política de Privacidade contém informações a respeito do 
                                  modo como tratamos, total ou ...
                        </ProductP>
                    </Product>

                    <Product>
                        <Plus className='plus' src={plus} alt='+' onClick={() => navigate('/politicas-de-privacidade/politicas-de-privacidade/politica-de-privacidade-calory-controle')}/>
                        <ProductH1 className='producth1'>Política de Privacidade Calory Controle</ProductH1>
                        <ProductP>1. Informações gerais<br />
                                  A presente Política de Privacidade contém informações a respeito do 
                                  modo como tratamos, total ou ...
                        </ProductP>
                    </Product>

                    <Product>
                        <Plus className='plus' src={plus} alt='+' onClick={() => navigate('/politicas-de-privacidade/politicas-de-privacidade/politica-de-privacidade-calory-pedido')}/>
                        <ProductH1 className='producth1'>Política de Privacidade Calory Pedido</ProductH1>
                        <ProductP>1. Informações gerais<br />
                                  A presente Política de Privacidade contém informações a respeito do 
                                  modo como tratamos, total ou ...
                        </ProductP>
                    </Product>

                    <Product>
                        <Plus className='plus' src={plus} alt='+' onClick={() => navigate('/politicas-de-privacidade/politicas-de-privacidade/politica-de-privacidade-csemite')}/>
                        <ProductH1 className='producth1'>Política de Privacidade CSEmite</ProductH1>
                        <ProductP>1. Informações gerais<br />
                                  A presente Política de Privacidade contém informações a respeito do 
                                  modo como tratamos, total ou ...
                        </ProductP>
                    </Product>

                    <Product>
                        <Plus className='plus' src={plus} alt='+' onClick={() => navigate('/politicas-de-privacidade/politicas-de-privacidade/politica-de-privacidade-csordem')}/>
                        <ProductH1 className='producth1'>Política de Privacidade CSOrdem</ProductH1>
                        <ProductP>1. Informações gerais<br />
                                  A presente Política de Privacidade contém informações a respeito do 
                                  modo como tratamos, total ou ...
                        </ProductP>
                    </Product>

                    <Product>
                        <Plus className='plus' src={plus} alt='+' onClick={() => navigate('/politicas-de-privacidade/politicas-de-privacidade/politica-de-privacidade-expoperola')}/>
                        <ProductH1 className='producth1'>Política de Privacidade ExpoPerola</ProductH1>
                        <ProductP>1. Informações gerais<br />
                                  A presente Política de Privacidade contém informações a respeito do 
                                  modo como tratamos, total ou ...
                        </ProductP>
                    </Product>

                    <Product>
                        <Plus className='plus' src={plus} alt='+' onClick={() => navigate('/politicas-de-privacidade/politicas-de-privacidade/politica-de-privacidade-frut-norte')}/>
                        <ProductH1 className='producth1'>Política de Privacidade Frut Norte</ProductH1>
                        <ProductP>1. Informações gerais<br />
                                  A presente Política de Privacidade contém informações a respeito do 
                                  modo como tratamos, total ou ...
                        </ProductP>
                    </Product>

                    <Product>
                        <Plus className='plus' src={plus} alt='+' onClick={() => navigate('/politicas-de-privacidade/politicas-de-privacidade/politica-de-privacidade-lotabus')}/>
                        <ProductH1 className='producth1'>Política de Privacidade LotaBus</ProductH1>
                        <ProductP>1. Informações gerais<br />
                                  A presente Política de Privacidade contém informações a respeito do 
                                  modo como tratamos, total ou ...
                        </ProductP>
                    </Product>

                    <Product>
                        <Plus className='plus' src={plus} alt='+' onClick={() => navigate('/politicas-de-privacidade/politicas-de-privacidade/politica-de-privacidade-visitas')}/>
                        <ProductH1 className='producth1'>Política de Privacidade Visitas</ProductH1>
                        <ProductP>1. Informações gerais<br />
                                  A presente Política de Privacidade contém informações a respeito do 
                                  modo como tratamos, total ou ...
                        </ProductP>
                    </Product>

                </Content>


            <Footer />

            <Whatsapp />
        </>
    )
}

export default PoliticaDePrivacidade