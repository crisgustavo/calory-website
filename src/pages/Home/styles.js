import styled from 'styled-components'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.png'
import banner4 from '../../assets/images/banner4.png'



export const BackgroundGradient = styled.div `
    background: linear-gradient(45deg, rgba(235,245,255,1) 0%, rgba(217,235,255,1) 100%);
    z-index: -100;
`

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

/*
export const NewTopBar = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid black;
    box-shadow: 1px 1px 5px 1px black;
    position: relative;

    @media(max-width: 800px) {
        height: max-content;
    }
`

export const MenuBar = styled.div `
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 80px;
    align-items: center;
`

export const MenuButton = styled.button `
    background: none;
    border: 1px solid black;
    border-radius: 20px;
    box-shadow: 1px 1px 5px 1px black;
    padding: 2px;
    width: max-content;
    cursor: pointer;
`

export const NavigatorContent = styled.div `
    @media(max-width: 800px) {
        height: max-content;
        overflow: visible;
    }
`

export const MenuButtonImg = styled.img `
    width: 50px;

    @media(max-width: 995px) {
        width: 30px;
    }
`

export const MenuNavigator = styled.nav `
    @media(max-width: 800px) {
        height: max-content;
    }
`

export const LogoNewTopBar = styled.img `
    width: 200px;
    height: fit-content;
    margin-right: 20px;
    align-self: center;

    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }

    &:active {
        opacity: 0.5;
    }


    @media(max-width: 995px) {
        width: 150px;
    }
`
*/
export const Banner = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    height: 500px;
    z-index: 2;
    gap: 40px;
    margin: 0px 0px 10px;
    background-color: navy;

    @media(max-width: 800px) {
        height: 300px;
    }
    @media(max-width: 500px) {
        height: 200px;
        margin: 0px 0px 8px;
    }
`

//SE A IMAGEM FOR = BANNER3 
export const BannerImg = styled.div `
    width: 30%;
    display: flex;
    overflow: hidden;
    border-radius: 50px;
    box-shadow: 1px 2px 5px 1px black;

    @media(max-width: 800px) {
        border-radius: 20px;
    }
`
export const IMGBanner = styled.img `
    
`
//SE FOR BANNER FUNDO
/*export const BannerImg = styled.div `
    display: flex;
    align-self: center;
    width: 99%;
    height: 100%;
    z-index: 0;
    background: url(${banner2});
    background-size: 100%;
    background-position: center;
    background-position-x: center;
    background-position-y: center;
    background-repeat: no-repeat;
    border-radius: 3px;
    opacity: 0.5;

    @media(max-width: 450px) {
        background-size: 200%;
    }
`*/

export const BannerText = styled.div `
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4%;

    @media(max-width: 800) {
        width: 60%;
    }
`

export const BannerH1 = styled.h1 `
    background-image: linear-gradient(180deg, #FFFFFF 31%, rgba(61,123,175,1) 55%, #FFFFFF 81%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    margin-left: 5%;
    font-size: 250%;

    @media(max-width: 900px) {
        font-size: 180%;
    }

    @media(max-width: 600px) {
        font-size: 100%;
    }
`

export const BannerH2 = styled.h2 `
    margin-left: 5%;
    
    font-size: 175%;
    color: rgb(0, 35, 66);

    @media(max-width: 900px){
        font-size: 100%;
    }

    @media(max-width: 600px) {
        font-size: 70%;
    }
`

export const BannerP = styled.p `
    margin-left: 5%;
    color: #aad4ff;

    font-size: 100%;
    font-weight: 500;

    @media(max-width: 900px) {
        font-size: 66%;
    }

    @media(max-width: 600px) {
        font-size: 55%;
    }
`
export const Content1 = styled.div `
    border-radius: 50px;
    background-color: #FFFFFF;
    width: 98%;
    margin-bottom: 5%;
    margin-left: 1%;
    padding: 2% 0%;
    justify-self: center;
    box-shadow: 1px 2px 5px 1px black;

    @media(max-width: 800px) {
        border-radius: 25px;
        margin-left: 0.5%;
    }
`
