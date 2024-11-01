import styled from 'styled-components'


export const BackgroundGradient = styled.div `
    background: linear-gradient(45deg, rgba(235,245,255,1) 0%, rgba(217,235,255,1) 100%);
    z-index: -100;

    @media(max-width: 800px) {
        background: linear-gradient(45deg, rgba(235,245,255,1) 0%, #e8f3ff 100%);
    }
`
/*
export const ImgSlider = styled.img `
    width: 80%;
    margin: 1% 10% 2% 10%;
`*/

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
    box-shadow: 1px 2px 5px 1px black;
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
    background: linear-gradient(180deg, rgba(82,165,231,1) 0%, rgba(39,70,166,1) 46%, rgba(2,41,160,1) 68%);
    color: #FFFFFF;
    text-align: center;
    min-width: max-content;
    font-size: 100%;
    box-shadow: 1px 1px 5px 1px black;

    &:hover{
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
    filter: drop-shadow(2px 2px 3px black);

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
    filter: drop-shadow(2px 2px 3px black);

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

export const Banner = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    text-align: center;
    height: 100%;
    z-index: 2;
    gap: 40px;
    margin: 0px 0px 20px;
    background-color: #1B6CC2;


    @media(max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        margin: 0px 0px 20px;
        padding: 20px 0 0 0;
        gap: 0;
    }
`

export const BannerContent = styled.div `
    display: flex;
    position: relative;
    width: 30%;
    
    @media(max-width: 1000px){
        margin-left: 3%;
    }
`

export const BannerFloat1 = styled.div `
    display: flex;
    position: absolute;
    border: 1px solid navy;
    padding: 5px;
    z-index: 5;
    background: #ffffff;
    border-radius: 10px;
    width: fit-content;
    height: fit-content;
    right: -12%;
    top: 25%;
    box-shadow: 1px 1px 5px 1px black;

    @media(max-width: 550px) {
        right: -32%;
        top: 22%;
    }
`

export const BannerFloat2 = styled.div `
    display: flex;
    position: absolute;
    border: 1px solid navy;
    padding: 5px;
    z-index: 5;
    background: #ffffff;
    border-radius: 10px;
    width: fit-content;
    height: fit-content;
    left: -23%;
    bottom: 25%;
    box-shadow: 1px 1px 5px 1px black;

    @media(max-width: 550px) {
        left: -40%;
        top: 60%;
    }
`

export const FloatH1 = styled.h1 `
    font-size: 150%;
    color: navy;

    @media(max-width: 1000px) {
        font-size: 110%;    
    }

    @media(max-width: 550px) {
        font-size: 70%;    
    }
    
`

//SE A IMAGEM FOR = BANNER3 
export const BannerImg = styled.div `
    width: 90%;
    overflow: hidden;
    border: 1px solid navy;
    border-radius: 15px;
    box-shadow: 1px 2px 5px 1px black;
    position: relative;
    top: 10px;

    @media(max-width: 800px) {
        border-radius: 10px;
        margin-top: -10px;
        align-self: center;
        justify-self: center;
    }
`
export const IMGBanner = styled.img `
    width: 120%;
`

export const BannerText = styled.div `
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4%;

    @media(max-width: 800px) {
        width: 90%;
    }
`

export const BannerH1 = styled.h1 `
    color: #FFFFFF;
    font-size: 250%;

    b{
        color: navy;
    }

    @media(max-width: 1000px) {
        font-size: 180%;
    }

    @media(max-width: 600px) {
        font-size: 140%;
    }
`

export const BannerP = styled.p `
    color: #FFFFFF;
    width: 100%;
    font-size: 100%;
    font-weight: 100;
`

export const BannerButton = styled.button `
    width: max-content;
    height: max-content;
    margin: 10px;
    padding: 5px 25px;
    border: 1px #ffffff;
    border-radius: 5cap;
    background: linear-gradient(180deg, rgba(82,165,231,1) 0%, rgba(39,70,166,1) 46%, rgba(2,41,160,1) 68%);
    color: #FFFFFF;
    text-align: center;
    font-size: 180%;
    box-shadow: 1px 1px 5px 1px black;

    &:hover{
        cursor: pointer;
        transition: 0.5s;
        transition-property: font-size;
        font-size: 200%;
        opacity: 0.7;
    }

    @media(max-width: 800px){
        font-size: 120%;
    }

    &:hover{
        font-size: 135%;
    }

`

export const Content1 = styled.div `
    border-radius: .3cap;
    background-color: #FFFFFF;
    width: 98%;
    margin-bottom: 1%;
    margin-left: 1%;
    padding: 2% 5%;
    justify-self: center;
    display: flex;
    flex-direction: column;


    @media(max-width: 800px) {
        margin-left: 0%;
        flex-direction: column;
        margin-bottom: 2%;
    }
`

export const Content1Title = styled.h1 `
    text-align: center;
    color: #1B6CC2;
    margin-bottom: 30px;

    @media(max-width: 800px){
        margin: 15px 0;
    }
`

export const Content1List = styled.div`
    display: flex;
    justify-content: space-around;

    @media(max-width: 800px) {
        margin-left: 0%;
        flex-direction: column;
        margin-bottom: 2%;
    }
`

export const ContentInfo1 = styled.div `
    display: flex;
    flex-direction: column;
    width: 30%;
    background: #1B6CC2;
    border-radius: 15px;
    gap: 10px;
    padding: 20px;
    color: #FFFFFF;
    box-shadow: 1px 1px 40px 1px rgb(0, 50, 94);
    

    @media(max-width: 800px) {
        width: 100%;
        margin: 5% 0 5%
    }
`

export const ContentInfoHead = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
`

export const ContentInfoBody = styled.div `
    display: flex;
    flex-direction: column;
    padding: 5%;
    text-align: center;
`

export const ContentIcon = styled.img `
    width: 40px;
    
`

export const ContentHeadTitle = styled.h1 `
    font-size: 25px;
`

export const ContentInfoBodyP = styled.p `
    text-align: left;
    line-height: 20px;
`


