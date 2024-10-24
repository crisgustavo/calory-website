//importação de bibliotecas
import Table from 'react-bootstrap/Table';

//importação de componentes
import {
    Background, Footer, Header,
    UserSettings, UserLogo, UserName,
    CompanyLogo, CompanyName, Exit,
    Body, Panel, Incoming,Output, 
    Stock, Print,IncomingPanel, 
    IncomingTable, OutputPanel,
    StockPanel, HeaderIncoming, PageH1, 
    IncomingFilter, FilterH1,
    ProductSelect, YearSelect, 
    MeasureSelect, Period, PeriodPanel, 
    StartPeriod, FinalPeriod, Clear
} from './styles'
import FooterElements from '../../../components/FooterElements'

//importação de variáveis
import { idclifor, nome } from '../login'

//importação de funções
import GetProdutos from '../../../scripts/getProdutos'
import GetEmpresaID from '../../../scripts/getEmpresaID'
import GetNomeCliente from '../../../scripts/getNomeCliente'
import GetNomeEmpresa from '../../../scripts/getNomeEmpresa'
import GetTodasEntradas from '../../../scripts/getTodasEntradas'
import GetEntradasCliente from '../../../scripts/getEntradasCliente'
import GetSelectProdutos from '../../../scripts/getSelectProdutos'
import GetSelectAnoSafra from '../../../scripts/getSelectAnoSafra'

//importação de imagens
import user from '../../../assets/images/icons/user1.png'
import company from '../../../assets/images/icons/company1.png'
import printer from '../../../assets/images/icons/printer.png'
import { useState } from 'react';
import { Target } from 'lucide-react';


function AgricolaLanding() {

    const cliforimported = idclifor
    const nomeimported = nome

    //Até aqui recebendo id e nome corretamente OKOKOKOKOKOKOK

    let empresaid = ''
    empresaid = GetEmpresaID(cliforimported, nomeimported, empresaid)
    //Recebendo o id da empresa OKOKOKOKOKOKOK

    let nomecliente = ''
    nomecliente = GetNomeCliente(cliforimported, empresaid, nomecliente)
    //Recebendo fantasia do cliente OKOKOKOKOKOK

    let nomeempresa = ''
    nomeempresa = GetNomeEmpresa(empresaid, nomeempresa)
    //recebendo fantasia da empresa OKOKOKOKOKOK

    let todasentradas = []
    todasentradas = GetTodasEntradas(cliforimported, empresaid, todasentradas)
    //recebendo todas as entradas do cliente logado OKOKOKOKOK

    let productList = []
    productList = GetProdutos(productList, empresaid)
    //Recebendo corretamente lista de produtos possíveis para o cliente OKOKOKOKOKOK

    let entradascliente = []
    entradascliente = GetEntradasCliente(todasentradas, productList, entradascliente)
    //Importando entradas com nome do produto OKOKOKOKOKOKOK

    let getSelectProdutos = []
    getSelectProdutos = GetSelectProdutos(entradascliente, productList, getSelectProdutos)
    //Criando array para os produtos das entradas do mesmo cliente OKOKOKOKOKOK

    let getSelectSafra = []
    getSelectSafra = GetSelectAnoSafra(entradascliente, getSelectSafra)
    //Criando array com os anos safra de entrada do mesmo cliente OKOKOKOKOK

    let entradasclientenew = []
    let i = 0
    entradascliente.map(entrada => {
        if (entrada.idproduto === '') {    
            entradasclientenew[i] = entrada
            i++
        }
    })

    //console.log(entradasclientenew)


    //validação de oculto e visível de elementos
    const [isShowDataIncoming, setIsShowDataIncoming] = useState(false);
    const handleDataIncoming = () => setIsShowDataIncoming(!isShowDataIncoming)
    
    const[isShowEntradas, setIsShowEntradas] = useState(false);
    const handleEntradas = () => setIsShowEntradas(!isShowEntradas)



    //Handle change de selects
    const [selOptProduto, setSelOptProduto] = useState('');

    const handleProdutoChange = (event) => {
        const value = event.target.value;
        setSelOptProduto(value);
        console.log(selOptProduto)
    }


    return (
        <>
            <Background />
            <Header>
                <UserSettings>
                    <UserLogo src={user} />
                    <UserName>{nomecliente}</UserName>
                    <CompanyLogo src={company} />
                    <CompanyName>{nomeempresa}</CompanyName>
                </UserSettings>
                <Exit>Sair</Exit>
            </Header>

            <Body>
                <Panel>
                    <Incoming type='button' onClick={handleEntradas}>Entradas</Incoming>
                    <Output>Saídas</Output>
                    <Stock>Estoque</Stock>
                    <Print><img src={printer} alt="" /></Print>
                </Panel>
                {isShowEntradas &&
                <IncomingPanel>
                    <HeaderIncoming>
                        <PageH1>Entradas</PageH1>
                        <IncomingFilter>
                            <FilterH1>Produtos</FilterH1>
                            <ProductSelect onChange={handleProdutoChange} value={selOptProduto}>
                                <option value='0'>TODOS</option>
                                {   
                                    getSelectProdutos.map((item) =>
                                        <option value={item.idproduto}>{item.nome}</option>
                                    )
                                }
                            </ProductSelect>
                            <FilterH1>Safra</FilterH1>
                            <YearSelect>
                                <option value='0'>TODOS</option>
                                {
                                    getSelectSafra.map((item) =>
                                        <option value={item.ano_safra}>{item.ano_safra}</option>
                                    )
                                }
                            </YearSelect>
                            <MeasureSelect>
                                <option value='kg' selected>KG</option>
                                <option value='sc'>Sc</option>
                            </MeasureSelect>
                            <Period type='button' onClick={handleDataIncoming}>Datas</Period>
                                {isShowDataIncoming && <PeriodPanel>
                                                <FilterH1>De:</FilterH1>
                                                <StartPeriod />
                                                <FilterH1>Até:</FilterH1>
                                                <FinalPeriod />
                                                <Clear />
                                            </PeriodPanel>}   
                        </IncomingFilter>
                    </HeaderIncoming>
                    <IncomingTable>
                        <Table className='table'>
                            <thead>
                                <tr className='tr'>
                                    <th className='align-left'>Romaneio</th>
                                    <th>Ano Safra</th>
                                    <th>Produto</th>
                                    <th className='align-right'>Peso Bruto</th>
                                    <th className='align-right'>Peso Líquido</th>
                                    <th>Placa</th>
                                    <th>Data</th>
                                    <th className='align-right'>Desc. Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <div className='body'>
                                {

                                    entradascliente.map((item) =>
                                        <tr className='tr result'>
                                            <td className='align-left'>{item.romaneio}</td>
                                            <td className='align-center'>{item.ano_safra}</td>
                                            <td className='align-center'>{item.produto}</td>
                                            <td className='align-right'>{item.peso_liquido_entrada}</td>
                                            <td className='align-right'>{item.peso_liquido}</td>
                                            <td className='align-center'>{item.placa}</td>
                                            <td className='align-center'>{item.data}</td>
                                            <td className='align-right'>{item.desconto_total}</td>
                                        </tr>
                                    )
                                }
                                </div>
                            </tbody>
                        </Table>
                    </IncomingTable>
                </IncomingPanel>
                }
                <OutputPanel>

                </OutputPanel>

                <StockPanel>

                </StockPanel>

            </Body>

            <Footer>
                <FooterElements />
            </Footer>
        </>
    )
}

export default AgricolaLanding