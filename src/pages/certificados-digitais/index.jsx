import Footer from "../../components/Footer"
import Header from "../../components/Header"
import TopBar from "../../components/TopBar"
import plus from '../../assets/images/icons/pls.png'

import c1ecnpj from '../../assets/midias/produto/C10-e-cnpj-a3-de-3-anos-e25a98a007.jpg'
import c2ecnpj from '../../assets/midias/produto/C28-e-cnpj-a1-53f20dc95d.jpg'
import c3ecnpj from '../../assets/midias/produto/C9-e-cnpj-a3-de-1-ano-e18050cee6.jpg'
import c4ecnpj from '../../assets/midias/produto/C11-e-cnpj-a3-de-1-ano-em-cartao-6f555fcc83.jpg'
import c5ecnpj from '../../assets/midias/produto/C13-e-cnpj-a3-de-1-ano-em-cartao-leitora-df79bdd00b.jpg'
import c6ecnpj from '../../assets/midias/produto/C15-e-cnpj-a3-de-1-ano-em-token-d392b2b8c1.jpg'
import c7ecnpj from '../../assets/midias/produto/C12-e-cnpj-a3-de-3-anos-em-cartao-b78ab59615.jpg'
import c8ecnpj from '../../assets/midias/produto/C14-e-cnpj-a3-de-3-anos-em-cartao-leitora-b2b7e5de5a.jpg'
import c9ecnpj from '../../assets/midias/produto/C16-e-cnpj-a3-de-3-anos-em-token-338fbe37db.jpg'

import c1ecpf from '../../assets/midias/produto/C27-e-cpf-a1-f84474b004.jpg'
import c2ecpf from '../../assets/midias/produto/C19-e-cpf-a3-de-1-ano-8c38787a07.jpg'
import c3ecpf from '../../assets/midias/produto/C18-e-cpf-a3-de-1-ano-em-cartao-16df6be619.jpg'
import c4ecpf from '../../assets/midias/produto/C21-e-cpf-a3-de-1-ano-em-cartao-leitora-7082bed0ff.jpg'
import c5ecpf from '../../assets/midias/produto/C23-e-cpf-a3-de-1-ano-em-token-a60feb940e.jpg'
import c6ecpf from '../../assets/midias/produto/C20-e-cpf-a3-de-3-anos-e280bf9dc3.jpg'
import c7ecpf from '../../assets/midias/produto/C17-e-cpf-a3-de-3-anos-em-cartao-71171187ea.jpg'
import c8ecpf from '../../assets/midias/produto/C22-e-cpf-a3-de-3-anos-em-cartao-leitora-da36e99e6b.jpg'
import c9ecpf from '../../assets/midias/produto/C24-e-cpf-a3-de-3-anos-em-token-2e452bbdcb.jpg'
import { CatalogItem, CatalogShow, CatalogTitle, Main } from "./styles"
import Whatsapp from "../../components/Whatsapp"
import NewTopBar from "../../components/NewTopBar"

function CertificadosDigitais() {
    window.scrollTo({top: 0, behavior: 'smooth'})
    return (
        <>
            <NewTopBar />
            <Main>
                <CatalogTitle>Certificados e-CNPJ</CatalogTitle>
                <CatalogShow>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CNPJ%20A3%20de%203%20anos', '_blank')}/>
                        <img src={c1ecnpj} alt="e-CNPJ A3 de 3 anos" />
                        <h1>e-CNPJ A3 de 3 anos</h1>
                        <h3>O e-CNPJ A3 tem validade de 03 anos, é indicado para quem quer identificar uma 
                            empresa através de seu representante legal perante a Receita Federal. IMPORTANTE: 
                            é necessário já ter cartão ou token aderente a legislação da ICP-Brasil para 
                            armazenamento do Certificado Digital.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CNPJ%20A1', '_blank')}/>
                        <img src={c2ecnpj} alt="e-CNPJ A1" />
                        <h1>e-CNPJ A1</h1>
                        <h3>O e-CNPJ A1 tem validade de 12 meses, sendo armazenado diretamente no computador. 
                            Tem menor custo e é indicado para identificar pessoas jurídicas.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CNPJ%20A3%20de%201%20ano', '_blank')}/>
                        <img src={c3ecnpj} alt="e-CNPJ A3 de 1 ano" />
                        <h1>e-CNPJ A3 de 1 ano</h1>
                        <h3>O e-CNPJ A3 tem validade de 01 ano, é indicado para quem quer identificar uma 
                            empresa através de seu representante legal perante a Receita Federal. IMPORTANTE: 
                            é necessário já ter cartão ou token aderente a legislação da ICP-Brasil para 
                            armazenamento do Certificado Digital.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CNPJ%20A3%20de%201%20ano%20em%20cartão', '_blank')}/>
                        <img src={c4ecnpj} alt="e-CNPJ A3 de 1 ano em cartão" />
                        <h1>e-CNPJ A3 de 1 ano em cartão</h1>
                        <h3>O e-CNPJ A3 com cartão tem validade de 01 ano, é indicado para quem quer 
                            identificar uma empresa através de seu representante legal perante a Receita 
                            Federal. IMPORTANTE: é necessário possuir uma leitora de cartão compatível.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CNPJ%20A3%20de%201%20ano%20em%20cartão%20com%20leitora', '_blank')}/>
                        <img src={c5ecnpj} alt="e-CNPJ A3 de 1 ano em cartão + leitora" />
                        <h1>e-CNPJ A3 de 1 ano em cartão + leitora</h1>
                        <h3>O e-CNPJ A3 em Cartão + Leitora tem validade de 01 ano, é indicado para quem quer 
                            identificar uma empresa através de seu representante legal perante a Receita 
                            Federal e busca uma solução completa para uso do certificado digital. O Kit 
                            Certificado Digital em Cartão e Leitora é ideal para quem pretende ter mais de um 
                            Certificado Digital em cartão e utilizará uma única leitora.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CNPJ%20A3%20de%201%20ano%20em%20token', '_blank')}/>
                        <img src={c6ecnpj} alt="e-CNPJ A3 de 1 ano em token" />
                        <h1>e-CNPJ A3 de 1 ano em token</h1>
                        <h3>O e-CNPJ A3 com token tem validade de 01 ano, é indicado para quem quer 
                            identificar uma empresa através de seu representante legal perante a Receita 
                            Federal. O certificado digital armazenado em token oferece ao usuário praticidade, 
                            fácil portabilidade e usabilidade, basta conectá-lo na porta USB do computador.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CNPJ%20A3%20de%203%20anos%20em%20cartão', '_blank')}/>
                        <img src={c7ecnpj} alt="e-CNPJ A3 de 3 anos em cartão" />
                        <h1>e-CNPJ A3 de 3 anos em cartão</h1>
                        <h3>O e-CNPJ A3 com cartão tem validade de 03 anos, é indicado para quem quer 
                            identificar uma empresa através de seu representante legal perante a Receita 
                            Federal. IMPORTANTE: é necessário possuir uma leitora de cartão compatível.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CNPJ%20A3%20de%203%20anos%20em%20cartão%20com%20leitora', '_blank')}/>
                        <img src={c8ecnpj} alt="e-CNPJ A3 de 3 anos em cartão + leitora" />
                        <h1>e-CNPJ A3 de 3 anos em cartão + leitora</h1>
                        <h3>O e-CNPJ A3 em Cartão + Leitora tem validade de 03 anos, é indicado para quem quer 
                            identificar uma empresa através de seu representante legal perante a Receita 
                            Federal e busca uma solução completa para uso do certificado digital. O Kit 
                            Certificado Digital em Cartão e Leitora é ideal para quem pretende ter mais de um 
                            Certificado Digital em cartão e utilizará uma única leitora.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CNPJ%20A3%20de%203%20anos%20em%20token', '_blank')}/>
                        <img src={c9ecnpj} alt="e-CNPJ A3 de 3 anos em token" />
                        <h1>e-CNPJ A3 de 3 anos em token</h1>
                        <h3>O e-CNPJ A3 com token tem validade de 03 anos, é indicado para quem quer 
                            identificar uma empresa através de seu representante legal perante a Receita 
                            Federal. O certificado digital armazenado em token oferece ao usuário praticidade, 
                            fácil portabilidade e usabilidade, basta conectá-lo na porta USB do computador.</h3>
                    </CatalogItem>
                                        
                </CatalogShow>
                <CatalogTitle>Certificados e-CPF</CatalogTitle>
                <CatalogShow>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CPF%20A1', '_blank')}/>
                        <img src={c1ecpf} alt="e-CPF A1" />
                        <h1>e-CPF A1</h1>
                        <h3>O e-CPF A1 tem validade de 12 meses, sendo armazenado diretamente no computador. 
                            Tem menor custo e é indicado para identificar pessoas físicas.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CPF%20A3%20de%201%20ano', '_blank')}/>
                        <img src={c2ecpf} alt="e-CPF A3 de 1 ano" />
                        <h1>e-CPF A3 de 1 ano</h1>
                        <h3>O e-CPF A3 tem validade de 01 ano, indicado para identificar e autenticar uma 
                            pessoa física no mundo digital. IMPORTANTE: é necessário já ter cartão ou token 
                            aderente a legislação da ICP-Brasil para armazenamento do Certificado Digital.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CPF%20A3%20de%201%20ano%20em%20cartão', '_blank')}/>
                        <img src={c3ecpf} alt="e-CPF A3 de 1 ano em cartão" />
                        <h1>e-CPF A3 de 1 ano em cartão</h1>
                        <h3>O e-CPF A3 com cartão tem validade de 01 ano, indicado para identificar e 
                            autenticar uma pessoa física no mundo digital. IMPORTANTE: é necessário possuir 
                            uma leitora de cartão compatível.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CPF%20A3%20de%201%20ano%20em%20cartão%20com%20leitora', '_blank')}/>
                        <img src={c4ecpf} alt="e-CPF A3 de 1 ano em cartão + leitora" />
                        <h1>e-CPF A3 de 1 ano em cartão + leitora</h1>
                        <h3>O e-CPF A3 em Cartão + Leitora tem validade de 01 ano, é indicado para 
                            identificar e autenticar uma pessoa física no mundo digital. O Kit Certificado 
                            Digital em Cartão e Leitora é ideal para quem pretende ter mais de um Certificado 
                            Digital em cartão e utilizará uma única leitora.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CPF%20A3%20de%201%20ano%20em%20token', '_blank')}/>
                        <img src={c5ecpf} alt="e-CPF A3 de 1 ano em token" />
                        <h1>e-CPF A3 de 1 ano em token</h1>
                        <h3>O e-CPF A3 em token com validade de 01 ano, é indicado para identificar e 
                            utenticar uma pessoa física no mundo digital. O certificado digital armazenado 
                            em token oferece ao usuário praticidade, fácil portabilidade e usabilidade, basta 
                            conectá-lo na porta USB do computador.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CPF%20A3%20de%203%20anos', '_blank')}/>
                        <img src={c6ecpf} alt="e-CPF A3 de 3 anos" />
                        <h1>e-CPF A3 de 3 anos</h1>
                        <h3>O e-CPF A3 tem validade de 03 anos, indicado para identificar e autenticar uma 
                            pessoa física no mundo digital. IMPORTANTE: é necessário já ter cartão ou token 
                            aderente a legislação da ICP-Brasil para armazenamento do Certificado Digital.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CPF%20A3%20de%203%20anos%20em%20cartão', '_blank')}/>
                        <img src={c7ecpf} alt="e-CPF A3 de 3 anos em cartão" />
                        <h1>e-CPF A3 de 3 anos em cartão</h1>
                        <h3>O e-CPF A3 com cartão tem validade de 03 anos, indicado para identificar e 
                            autenticar uma pessoa física no mundo digital. IMPORTANTE: é necessário possuir 
                            uma leitora de cartão compatível.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CPF%20A3%20de%203%20anos%20em%20cartão%20com%20leitora', '_blank')}/>
                        <img src={c8ecpf} alt="e-CPF A3 de 3 anos em cartão + leitora" />
                        <h1>e-CPF A3 de 3 anos em cartão + leitora</h1>
                        <h3>O e-CPF A3 em Cartão + Leitora tem validade de 03 anos, é indicado para 
                            identificar e autenticar uma pessoa física no mundo digital. O Kit Certificado 
                            Digital em Cartão e Leitora é ideal para quem pretende ter mais de um Certificado 
                            igital em cartão e utilizará uma única leitora.</h3>
                    </CatalogItem>
                    <CatalogItem>
                        <img className='plus' src={plus} alt="+" onClick={() => window.open('https://wa.me/5544999270531?text=Olá!%20Gostaria%20de%20adquirir%20o%20certificado%20e-CPF%20A3%20de%203%20anos%20em%20token', '_blank')}/>
                        <img src={c9ecpf} alt="e-CPF A3 de 3 anos em token" />
                        <h1>e-CPF A3 de 3 anos em token</h1>
                        <h3>O e-CPF A3 em token com validade de 03 anos, é indicado para identificar e 
                            autenticar uma pessoa física no mundo digital. O certificado digital armazenado 
                            em token oferece ao usuário praticidade, fácil portabilidade e usabilidade, basta 
                            conectá-lo na porta USB do computador.</h3>
                    </CatalogItem>
                                        
                </CatalogShow>
            </Main>

            <Footer />

            <Whatsapp />
        </>
    )
}

export default CertificadosDigitais