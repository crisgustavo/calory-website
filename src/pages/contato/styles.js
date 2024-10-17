import styled from "styled-components";

export const Container = styled.div `
    padding: 20px 0px 40px;
    display: flex;
    justify-content: center;
`

export const ContainerInfo = styled.div `
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: center;
    padding: 0px 20px 0px 20px;
    margin-bottom: 40px;

    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`

export const ContainerName = styled.div `

`

export const ContainerEmail = styled.div `

`

export const FormEmail = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerH1 = styled.h1 `
    font-size: 25px;
    margin-bottom: 10px;
    color: #4c2cff;

    @media(max-width: 800px) {
        font-size: 110%;
    }
`

export const InputName = styled.input `
    width: 225px;
    margin-right: 30px;
    font-size: 15px;
    border: 2px solid rgb(92,92,92);
    border-radius: 8px;
    padding: 5px;
`

export const InputEmail = styled.input `
    width: 225px;
    font-size: 15px;
    border: 2px solid rgb(92,92,92);
    border-radius: 8px;
    padding: 5px;
`

export const InputText = styled.textarea `
    width: 480px;
    height: 188px;
    font-size: 20px;
    border: 2px solid rgb(92,92,92);
    border-radius: 8px;
    padding: 2px 5px;
    justify-items: start;
    align-items: start;
    text-align: left;
    margin-bottom: 20px;

    @media(max-width: 800px) {
        width: 110%;
    }
`

export const Button = styled.button `
    border: 1px #ffffff;
    border-radius: 25px;
    padding: 10px 20px;
    background: linear-gradient(180deg, #ffffff7c 0%, #9c9c9c 100%);
    color: #FFFFFF;
    text-align: center;
    min-width: max-content;
    font-size: 25px;

    &:hover{
        background: linear-gradient(180deg, #4c2cff7c 0%, #2000d8 100%);
        cursor: pointer;
        transition: 0.5s;
        transition-property: font-size;
        font-size: 28px;
        border-radius: 28px;
    }
    &:active {
        opacity: .5;
    }
`

export const Localization = styled.div `
    display: flex;
    justify-content: center;
    gap: 20px;
`

export const ContainerMapLeft = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerMapRight = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerP = styled.p `
    margin: 10px 0px 30px 0px;
    font-weight: 500;
`

export const Map = styled.iframe `
    border: 2px solid rgb(92,92,92);
    border-radius: 10px;
`

export const ContainerThankyou = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
`

export const ContainerPThankyou = styled.p `
    font-size: 40px;
    text-align: center;

    @media(max-width: 800px) {
        font-size: 150%;
    }
`