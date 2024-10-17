import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    padding: 40px 140px 40px 120px;

    @media (max-width: 800px){
        padding: 20px 30px 20px 30px;
    }

`

export const ContainerH1 = styled.h1 `
    color: #4c2cff;
    margin: 0px 20px 10px 60px;

    @media (max-width: 800px){
        margin: 0px 0px 10px 0px;
        text-align: center;
    }
`

export const LineRow = styled.hr `
    color: rgb(142,142,142);
    margin: 0px 0px 60px 0px;
`

export const ContainerH2 = styled.h2 `
    margin: 20px 20px 5px ;
    font-size: 20px;
    color: rgb(75,75,75);
`

export const ContainerP = styled.p `
    font-size: 14px;

`