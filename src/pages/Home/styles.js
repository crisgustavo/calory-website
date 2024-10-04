import styled from 'styled-components'
import footerbackground from '../../assets/images/footer-bg.jpg'


export const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    width: 100%;

`

export const LeftLinks = styled.div`
    margin-left: 8%;
    align-self: self-start;
`

export const SocialLinks = styled.div`
    margin-right: 10%;
    gap: 10px;
    justify-self: right;
    
`

export const FacebookLink = styled.img`
margin-left: 10px;
    width: 20px;
    filter: grayscale(100);

        &:hover {
            filter: grayscale(0);
        }
`

export const InstagramLink = styled.img`
margin-left: 10px;
    width: 20px;
    filter: grayscale(100);

        &:hover {
            filter: grayscale(0);
        }

`

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;

`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`

export const ContainerLogo = styled.img`
    width: 40%;
    align-self: center;
    margin-top: -9%;
    margin-bottom: -9%;
    z-index: -1;
`

export const ContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const ContainerEmail = styled.div`
    a { text-decoration: none;
        color: #000000;
        display: grid;
            img {
                grid-area: img;
                width: 80%;
                margin-left: 5%;
            };
            h3 {
                grid-area: h3;
                align-self: flex-end;
                text-align: center;
                width: 100%;
            };
            p {
                grid-area: p;
                width: 100%;
                font-size: 80%;
                text-align: center;
            };
        grid-template-areas: 'img h3' 'img p';
        cursor: pointer;

        &:hover {
            p {
                color: #2000d8;
            }
            img {
                opacity: 50%;
            }
        }
    }
`

export const ContainerPhone = styled.div`
    display: grid;
        img {
            grid-area: img;
            padding: 7px;
            width: 60%;
        };
        h3 {
            grid-area: h3;
            align-self: flex-end;
            justify-self: left;
            padding: 0px 5px;
        };
        p {
            grid-area: p;
            justify-self: left;
            z-index: 10;
            padding: 0px 5px 5px;
            font-size: 80%;
        };
    grid-template-areas: 'img h3' 'img p ';
    height: 64px;
    overflow: hidden;

    &:hover{
        transition: 2s ease-in-out;
        transition-property: overfow;
        overflow: visible;
        p {
            background: white;
            border: 1px solid rgb(92,92,92);
            border-radius: 5px;
        }
        
    }
`

export const HeaderWrap = styled.div `
    width: 100%;
`

export const HeaderNavigator = styled.nav `

`

export const ListMenu = styled.ul `
    list-style: none;
    width: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-content: space-between;
    font-weight: 500;
    color: rgb(92, 92, 92);
`

export const ListItem = styled.li `
    border: 1px #ffffff;
    border-radius: 15px;
    padding: 5px;
    background: linear-gradient(180deg, #ffffff7c 0%, #9c9c9c 100%);
    color: #FFFFFF;
    text-align: center;
    min-width: max-content;

    &:hover{
        background: linear-gradient(180deg, #4c2cff7c 0%, #2000d8 100%);
        cursor: pointer;
        transition: 0.5s;
        transition-property: font-size;
        font-size: 115%;
    }
`

export const ListItemTrial = styled.li `
    border: 1px #FFFFFF;
    border-radius: 15px;
    padding: 5px;
    background: linear-gradient(180deg, #4c2cff7c 0%, #2000d8 100%);
    color: #FFFFFF;
    text-align: center;
    min-width: max-content;

    &:hover{
        cursor: pointer;
        transition: 0.5s;
        transition-property: font-size;
        font-size: 115%;
        font-weight: 700;
    }
`

export const ImgSlider = styled.img `
    width: 80%;
    margin: 1% 10% 2% 10%;
`

export const Content = styled.div `

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

    span {
        color: #4c2cff;
        font-weight: 900;
    }
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
    background: linear-gradient(180deg, #ffffff7c 0%, #9c9c9c 100%);
    color: #FFFFFF;
    text-align: center;
    min-width: max-content;
    font-size: 100%;

    &:hover{
        background: linear-gradient(180deg, #4c2cff7c 0%, #2000d8 100%);
        cursor: pointer;
        transition: 0.5s;
        transition-property: font-size;
        font-size: 115%;
    }

`

export const ContentInfo = styled.div `

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
`





export const Footer = styled.div `
    background-image: url(${footerbackground});
    width: 100%;
    background-size: fill;

        &::after{
            padding-top: 15%;
            display: block;
            content: '';
        }
`

export const FooterElements = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    justify-content: space-between;
`

export const FooterLogo = styled.img `
    padding: 30px;
`

export const FooterLinks = styled.ul `
    display: flex;
    justify-content: right;
    gap: 10px;
    margin-right: 30px;
`

export const PageLink = styled.a `
    color: rgb(192,192,192);
`

export const FooterSocialMedia = styled.div `

`

export const Whatsapp = styled.img `
    width: 90px;
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 10;
`


