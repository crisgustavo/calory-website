import styled from "styled-components";
import agricola from '../../../assets/midias/bg.jpg'
import footerbg from '../../../assets/images/footer-bg.jpg'

export const Background = styled.div `
    background-image: url(${agricola});
    width: 100%;
    height: 100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
`

export const Header = styled.div `
    display: flex;
    position: absolute;
    top: 12%;
    width: 100%;
    justify-content: center;
`

export const LoginBackground = styled.div `
    position: absolute;
    top: 150px;
    width: 300px;
    height: 350px;
    background-color: rgb(212,212,212);
    border-radius: 15px;   
    opacity: .7;
`

export const Login = styled.div `
    position: absolute;
    top: 150px;
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;    
    border: 2px solid #000cb1;
    border-radius: 15px;    
    opacity: .85;
    overflow: hidden;
`

export const LoginHeader = styled.div `
    background-color: rgb(142,142,192);
    position: relative;
    width: 295.5px;
    padding: 10px;
    border-radius: 12px;
`

export const LoginTitle = styled.h1 `
    text-align: center;
    color: #000cb1 ;
`

export const LoginContent = styled.div `
    display: flex;
    flex-direction: column;
    padding: 40px 0px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const LoginH1 = styled.h1 `
    font-size: 25px;
    font-weight: 500;
    color: rgb(42,42,42);
`

export const InputUser = styled.input `
    font-size: 20px;
    border: 1px solid #000cb1;
    border-radius: 5px;
    padding: 2px 5px;
    opacity: 0.8;
    text-align: center;

`

export const Password = styled.div`
    display: flex;
    align-items: center;
`

export const InputPassword = styled.input `
    font-size: 20px;
    border: 1px solid #000cb1;
    border-radius: 5px;
    padding: 2px 5px;
    opacity: 0.8;
    text-align: center;
`
export const EyeIcon = styled.button `
    width: 25px;
    position: absolute;
    right: 35px;
    border: none;
    background-color: transparent;

    &:hover {
        opacity: .7;
    }

    &:active {
        opacity: 0.5;
    }
`


export const Button = styled.button `
    font-size: 28px;
    border: 1px #ffffff;
    border-radius: 25px;
    padding: 5px 15px;
    background: linear-gradient(180deg, #ffffff 0%, #9c9c9c 100%);
    color: #FFFFFF;
    text-align: center;
    min-width: max-content;
    margin-top: 15px;

    &:hover{
        background: linear-gradient(180deg, #4c2cff 0%, #2000d8 100%);
        cursor: pointer;
        transition: 0.5s;
        transition-property: font-size;
        font-size: 30px;
    }
    &:active {
        opacity: .7;
    }
`

export const Footer = styled.div `
    position: absolute;
    top: 515px;
    background-image: url(${footerbg});
    width: 100%;
    height: 118px;
`