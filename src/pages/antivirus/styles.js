import styled from "styled-components";

export const Main = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
`

export const CatalogTitle = styled.h1 `
    width: 100%;
    text-align: center;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(182,181,181,1) 50%, rgba(255,255,255,0) 100%);
    color: rgba(39,70,166,1);

    @media(max-width: 800px) {
        font-size: 140%;
    }
`

export const CatalogShow = styled.div `
    width: 100%;
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        padding: 30px 50px
    }
`

export const CatalogItem = styled.div `
    display: flex;
    flex-direction: column;
    width: auto;
    .plus{
        width: 80px;
        position: absolute;
        opacity: .8;
        z-index: 1;
        align-self: center;
        justify-self: center;
        margin: 170px 100px ;
        visibility: hidden;
        border: none;
    }

    img {
        width: 100%;
        border: 3px solid rgb(92,92,92);
        border-radius: 15px;
    }
    h1 {
        text-align: center;
        font-size: 25px;
        margin: 8px 0px;
    }
    h3{
        font-size: 15px;
        font-weight: 400;
        color: rgb(92,92,92);
    }

    &:hover {
        opacity: .7;
        cursor: pointer;
        h1 {
            color: rgba(39,70,166,1);
        }
        .plus{
            visibility: visible;
            opacity: 1;
        }
   
    }

    &:active {
        opacity: .5;
        
    }
`
