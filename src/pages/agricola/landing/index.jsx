import {
    Background, Footer, Header,
    UserSettings, UserLogo, UserName,
    CompanyLogo, CompanyName, Exit,
    Body, Panel, Incoming,
    Output, Stock, Print,
    IncomingPanel,
    OutputPanel,
    StockPanel,
    HeaderIncoming,
    PageH1, IncomingFilter, FilterH1,
    ProductSelect, YearSelect, MeasureSelect,
    Period, PeriodPanel, StartPeriod,
    FinalPeriod, Clear
} from './styles'
import FooterElements from '../../../components/FooterElements'

import user from '../../../assets/images/icons/user1.png'
import company from '../../../assets/images/icons/company1.png'
import printer from '../../../assets/images/icons/printer.png'

import { idclifor, nome } from '../login'
import { useEffect, useState } from 'react'
import api from '../../../services/api'
import GetEmpresa from '../../../scripts/getEmpresa'
import GetProdutos from '../../../scripts/getProdutos'
import GetFazendas from '../../../scripts/getFazendas'
import GetLocais from '../../../scripts/getLocais'
import GetPlantio from '../../../scripts/getPlantio'
import GetEntradas from '../../../scripts/getEntradas'
import GetSaidas from '../../../scripts/getSaida'
import GetEstoques from '../../../scripts/getEstoque'



function AgricolaLanding() {

    const cliforimported = idclifor
    const nomeimported = nome

    let fantasia = ''
    let id = ''
    let companyname = '' 


    let [ clifor, setClifor ] = useState ([])

    useEffect(() => {
        async function getClifor() {
            const {data} = await api.get('/clifor')

            setClifor(data)
        }

        getClifor()
    }, [])

    const cliforkey = clifor.filter((id) => {
        if (id.idclifor == cliforimported && id.nome == nomeimported) {
            return true
        } else {
            return false
        }
    }) 

    const idcliforcatch = cliforkey.map(item => {
        cliforid = item.idclifor
        fantasia = item.fantasia
        id = item.idempresa
    })

    let empresaList = []
    empresaList = GetEmpresa(empresaList)
    

    const empresakey = empresaList.filter(item => {
        if (item.idempresa == id){
            return true
        } else {
            return false
        }
    })

    const empresacatch = empresakey.map(item => {
        companyname = item.fantasia
    })

    let productList = []
    productList = GetProdutos(productList)
    console.log(productList)

    let locaisList = []
    locaisList = GetLocais(locaisList)

    let fazendasList = []
    fazendasList = GetFazendas(fazendasList)

    let plantioList = []
    plantioList = GetPlantio(plantioList)

    let entradasCliente = '';
    function GetEntradaCliente(entradasCliente) {
        let entradasList = []
        entradasList = GetEntradas(entradasList)

        entradasCliente = entradasList.map (item => {
            if (item.idclifor == cliforimported && item.idempresa == id) {
                return true
            } else {
                return false
            }
        })
    }


    return (
        <>
        <Background />
            <Header>
                <UserSettings>
                    <UserLogo src={user}/>
                    <UserName>{fantasia}</UserName>
                    <CompanyLogo src={company}/>
                    <CompanyName>{companyname}</CompanyName>
                </UserSettings> 
                <Exit>Sair</Exit>
            </Header>

            <Body>
                <Panel>
                    <Incoming onClick={() => GetEntradaCliente}>Entradas</Incoming>
                    <Output>Saídas</Output>
                    <Stock>Estoque</Stock>
                    <Print><img src={printer} alt="" /></Print>
                </Panel>

                <IncomingPanel>
                    <HeaderIncoming>
                        <PageH1>Entradas</PageH1>
                        <IncomingFilter>
                            <FilterH1>Produtos</FilterH1>
                            <ProductSelect />
                            <FilterH1>Safra</FilterH1>
                            <YearSelect />
                            <MeasureSelect />
                            <Period />
                                <PeriodPanel>
                                    <FilterH1>De:</FilterH1>
                                    <StartPeriod />
                                    <FilterH1>Até:</FilterH1>
                                    <FinalPeriod />
                                    <Clear />
                                </PeriodPanel>
                        </IncomingFilter>
                    </HeaderIncoming>                   
                </IncomingPanel>

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