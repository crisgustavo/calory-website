import styled from 'styled-components'



export const ImgSlider = styled.img `
    width: 80%;
    margin: 1% 10% 2% 10%;
`

export const Content = styled.div `
    width: 100%;
`

export const BudgetInfo = styled.div `
    border: 1px solid rgb(192,192,192);
    border-radius: .3cap;
    margin: 0% 1% 1%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas: 'bt h3 ' 'bt p ';
    padding: 1% 10%;
    gap: 5px;
    justify-content: center;
    
`               

export const BudgetTitle = styled.h3 `
    grid-area: h3;
    text-align: center;
`

export const BudgetTitleSpan = styled.h3 `
    text-align: center;
    color: rgba(39,70,166,1);
    font-weight: 900;
`

export const BudgetText = styled.p `
    grid-area: p;
    text-align: center;

`

export const BudgetButton = styled.button `
    grid-area: bt;
    width: 100%;
    height: 85%;
    justify-self: right;
    align-self: center;
    border: 1px #ffffff;
    border-radius: 5cap;
    padding: 5px;
    //background: linear-gradient(180deg, #ffffff7c 0%, #9c9c9c 100%);
    background: linear-gradient(180deg, rgba(82,165,231,1) 0%, rgba(39,70,166,1) 46%, rgba(2,41,160,1) 68%);
    color: #FFFFFF;
    text-align: center;
    min-width: max-content;
    font-size: 100%;

    &:hover{
        //background: linear-gradient(180deg, #4c2cff7c 0%, #2000d8 100%);
        //background: linear-gradient(180deg, rgba(82,165,231,1) 0%, rgba(39,70,166,1) 46%, rgba(2,41,160,1) 68%);
        cursor: pointer;
        transition: 0.5s;
        transition-property: font-size;
        font-size: 115%;
        opacity: 0.7;
    }

    @media(max-width: 800px) {
        width: 0px;
        visibility: hidden;
        
        &:hover{
        width: 0px;
    }

    }

`

export const ButtonWhatsapp = styled.img `
    width: 0px;
    grid-area: bt;
    align-self: center;
    justify-self: center;
    
    @media(max-width: 800px) {
        width: 90%;
    }
`

export const ContentInfo = styled.div `
    width: 100%;
`

export const ContentBox = styled.div `
    border: 1px solid rgb(192,192,192);
    border-radius: .3cap;
    margin: 0% 1% 1%;
    display: flex;
    flex-direction: column;
    padding: 1% 0%;
    height: 800px;
`

export const ContentTitle = styled.h2 `
    text-align: center;

    a {
        text-decoration: none;
        color: #4c2cff;
    }
`

export const ContentText = styled.h3 `
    text-align: center;
    color: rgb(122,122,122);
`

export const ContentH1 = styled.h1 `
    text-align: center;
    margin-top: 2%;
`

export const ContentShow = styled.div `
    width: 99%;
    align-self: center;
    height: 100%;
    padding: 0px 0px 10px 0px;
    overflow: hidden;
`

export const ContentCarroussel = styled.div `
    width: 100%;
    display: flex;
    position: relative;
    padding: 10px 0px 10px 0px;
    height: 50%;

    &:hover .item{
        animation-play-state: paused;
        filter: grayscale(1);
    }

    .item:hover {
        filter: grayscale(0);
        color: #4c2cff;
        opacity: .7;
    }

    .item:active {
        opacity: .5;
    }
`

export const DefaultWhatsapp = styled.img `
    width: 90px;
    position: fixed;
    right: 2%;
    bottom: 2%;
    z-index: 10;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 0.5;
    }

    @media(max-width: 800px) {
        visibility: hidden;
    }
`
