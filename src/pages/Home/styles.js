import styled from 'styled-components'
import banner2 from '../../assets/images/banner2.jpg'
import banner3 from '../../assets/images/banner3.png'
import banner4 from '../../assets/images/banner4.png'



export const BackgroundGradient = styled.div `
    background: linear-gradient(45deg, rgba(235,245,255,1) 0%, rgba(217,235,255,1) 100%);
    z-index: -100;

    @media(max-width: 800px) {
        background: linear-gradient(45deg, rgba(235,245,255,1) 0%, #e8f3ff 100%);
    }
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
    justify-content: space-around;
    text-align: center;
    height: 500px;
    z-index: 2;
    gap: 40px;
    margin: 0px 0px 20px;
    background-color: navy;

    @media(max-width: 800px) {
        height: 300px;
    }

    @media(max-width: 500px) {
        flex-direction: column;
        align-items: center;
        height: 300px;
        margin: 0px 0px 20px;
        padding: 20px 0 0 0;
        gap: 0;
    }
`

//SE A IMAGEM FOR = BANNER3 
export const BannerImg = styled.div `
    width: 30%;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 1px 2px 5px 1px black;
    position: relative;
    top: 10px;

    @media(max-width: 800px) {
        border-radius: 10px;
        top: 10px;
    }
`
export const IMGBanner = styled.img `
    width: 110%
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
    /*background-image: linear-gradient(180deg, #FFFFFF 31%, rgba(61,123,175,1) 55%, #FFFFFF 81%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;*/
    color: #FFFFFF;
    margin-left: 5%;
    font-size: 250%;

    b{
        color: #729dff;
    }

    @media(max-width: 800px) {
        font-size: 180%;
    }

    @media(max-width: 600px) {
        font-size: 140%;
    }
`

export const BannerP = styled.p `
    margin-left: 5%;
    color: #FFFFFF;

    font-size: 100%;
    font-weight: 400;

    @media(max-width: 800px) {
        font-size: 80%;
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
    color: navy;
    margin-bottom: 20px;

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
    //background: linear-gradient(180deg, rgba(54,153,255,1) 0%, rgba(198,226,255,1) 85%, rgba(255,255,255,1) 100%);
    //background: linear-gradient(180deg, rgba(0,42,175,0.85) 0%, rgba(182,192,255,0.80) 64%, rgba(255,255,255,0) 100%);
    background: rgba(0,42,175,0.85);
    border-radius: .3cap;
    gap: 10px;
    margin-bottom: 2%;
    padding: 10px;

    color: #FFFFFF;
    

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


