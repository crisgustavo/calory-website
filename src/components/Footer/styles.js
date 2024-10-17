import styled from "styled-components";
import footerbackground from '../../assets/images/footer-bg.jpg'

export const ImgBackgroundFooter = styled.img `
    position: absolute;
    z-index: -1;
    width: 100%;

    @media(max-width: 800px) {
        width: 100%;
        height: 25%;
    }
`

export const DefaultFooter = styled.div `
    width: 100%;
    display: flex;
    height: fit-content;

        &::after{
            padding-top: 15%;
            display: block;
            content: '';
        }

    
`