import styled from "styled-components";
import landingbg from '../../../assets/images/logo_facebook.png'
import footerbg from '../../../assets/images/footer-bg.jpg'



export const Background = styled.div `
    height: 100vh;
    width: calc(100vw - 3%);
    background-image: url(${landingbg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 400px;
    opacity: 0.5;
    z-index: -1;
    position: absolute;
    top: 100px;
`

export const Header = styled.div `
    background: linear-gradient(0deg, rgba(51,63,212,1) 0%, rgba(49,49,156,1) 30%, rgba(49,49,156,1) 70%, rgba(51,63,212,1) 100%);
    height: 100px;
    width: 100%;
    border: 2px solid rgba(49,49,156,1);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    box-shadow: 2px 3px 10px black;
`

export const UserSettings = styled.div `
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 10px;
`

export const UserLogo = styled.img `
    width: 25px;
`

export const UserName = styled.label `
    color: #ffffff;
    font-weight: 500;
    align-self: center;
`

export const CompanyLogo = styled.img `
    width: 25px;
`

export const CompanyName = styled.label `
    color: #ffffff;
    font-weight: 500;
    align-self: center;
`

export const Exit = styled.button `
    background: linear-gradient(0deg, rgba(212,51,51,1) 0%, rgba(156,49,49,1) 70%, rgba(212,51,51,1) 100%);
    font-size: 30px;
    color: #ffffff;
    padding: 5px 15px;
    border: 1px solid black;
    border-radius: 25px;
    box-shadow: 2px 2px 10px black;

    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 0.5;
    }
`

export const Body = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0px;
`

export const Panel = styled.div `
    display: flex;
    gap: 5px;
`

export const Incoming = styled.button `
    background: linear-gradient(0deg, rgba(21,15,96,1) 0%, rgba(36,34,193,1) 100%);
    border: 1px solid black;
    border-radius: 20px;
    font-size: 20px;
    padding: 5px 10px;
    color: #ffffff;
    font-weight: 500;
    box-shadow: 2px 2px 10px black;

    &:hover{
        opacity: 0.8;
    }
`

export const Output = styled.button `
background: linear-gradient(0deg, rgba(21,15,96,1) 0%, rgba(36,34,193,1) 100%);
    border: 1px solid black;
    border-radius: 20px;
    font-size: 20px;
    padding: 5px 10px;
    color: #ffffff;
    font-weight: 500;
    box-shadow: 2px 2px 10px black;

    &:hover{
        opacity: 0.8;
    }
`

export const Stock = styled.button `
background: linear-gradient(0deg, rgba(21,15,96,1) 0%, rgba(36,34,193,1) 100%);
    border: 1px solid black;
    border-radius: 20px;
    font-size: 20px;
    padding: 5px 10px;
    color: #ffffff;
    font-weight: 500;
    box-shadow: 2px 2px 10px black;

    &:hover{
        opacity: 0.8;
    }
`

export const Print = styled.button `
    display: flex;
    background: linear-gradient(0deg, rgba(180,180,180,1) 0%, rgba(232,231,231,1) 100%);
    width: 40px;
    padding: 5px 10px;
    border: 1px solid rgba(143,143,143,1);
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 10px black;
    margin-left: 80px;

    img{
        width: 20px;
    }

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`

export const IncomingPanel = styled.div `
    display: flex;
    border: 1px solid black;
    border-radius: 5px;
    width: 100%;
    height: 500px;
    margin: 10px 0px;
    background-color: rgb(222,222,222);
    box-shadow: 2px 2px 10px black;
`

export const OutputPanel = styled.div `

`

export const StockPanel = styled.div `

`

export const Footer = styled.div `
    background-image: url(${footerbg});
    width: 100%;
    height: 118px;
`