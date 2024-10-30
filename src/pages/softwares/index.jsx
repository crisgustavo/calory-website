
import TopBar from '../../components/TopBar';
import Header from '../../components/Header';

import Whatsapp from '../../components/Whatsapp';

import agrovet from '../../assets/midias/produto/b-agrovet.jpg'
import autocenter from '../../assets/midias/produto/b-autocenter.jpg'
import imobiliaria from '../../assets/midias/produto/b-imobiliaria.jpg'
import joias from '../../assets/midias/produto/b-joias.jpg'
import lojas from '../../assets/midias/produto/b-empresarial.jpg'
import madeireira from '../../assets/midias/produto/b-madeira.jpg'
import mercado from '../../assets/midias/produto/b-mercados.jpg'
import restaurante from '../../assets/midias/produto/b-restaurantes.jpg'
import plus from '../../assets/images/icons/pls.png'
import { CatalogItem, CatalogShow, CatalogTitle, Main } from './styles';
import Footer from '../../components/Footer';
import { useNavigate } from 'react-router-dom';
import NewTopBar from '../../components/NewTopBar';


function Softwares() {
    window.scrollTo({top: 0, behavior: 'smooth'})
    const navigate = useNavigate();

    return (
        <>
            <NewTopBar />
            
            <Main>
                <CatalogTitle>Conheça nossos Softwares!</CatalogTitle>
                <CatalogShow>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => navigate('/softwares/lojas')}/>
                        <img src={lojas} alt="Empresarial Lojas" />
                        <h1>Empresarial Lojas</h1>
                        <h3>Sistema Empresarial completo para segmento de Calçados e Confecções</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => navigate('/softwares/mercado')}/>
                        <img src={mercado} alt="Empresarial Mercados e Conveniências" />
                        <h1>Empresarial Mercados e Conveniências</h1>
                        <h3>Sistema Empresarial completo para segmento do Mercados e Convêniências</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => navigate('/softwares/restaurante')}/>
                        <img src={restaurante} alt="Empresarial Restaurantes e Lanchonetes" />
                        <h1>Empresarial Restaurantes e Lanchonetes</h1>
                        <h3>Sistema Empresarial completo para segmento de Restaurantes e Lanchonetes</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => navigate('/softwares/autocenter')}/>
                        <img src={autocenter} alt="Empresarial Autocenter" />
                        <h1>Empresarial Autocenter</h1>
                        <h3>Sistema Empresarial completo para segmento de Autocenter</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => navigate('/softwares/agrovet')}/>
                        <img src={agrovet} alt="Empresarial Agorvet" />
                        <h1>Empresarial Agro Veterinária</h1>
                        <h3>Sistema Empresarial completo para segmento do Agronegócio</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => navigate('/softwares/joalheria')}/>
                        <img src={joias} alt="Empresarial Joalheria" />
                        <h1>Empresarial Joalheria</h1>
                        <h3>Sistema Empresarial completo para segmento de Calçados e Confecções</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => navigate('/softwares/madeireira')}/>
                        <img src={madeireira} alt="Empresarial Madeireira" />
                        <h1>Empresarial Madeireira</h1>
                        <h3>Sistema Empresarial completo para segmento de Madeireira</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => navigate('/softwares/imobiliaria')}/>
                        <img src={imobiliaria} alt="Empresarial Imobiliaria" />
                        <h1>Empresarial Imobiliaria</h1>
                        <h3>Sistema Empresarial completo para segmento de Imobiliaria</h3>
                        </CatalogItem>
                    
                </CatalogShow>
            </Main>


            <Whatsapp />

            <Footer />

        </>
    )
}

export default Softwares