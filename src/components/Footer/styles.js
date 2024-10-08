import styled from "styled-components";
import footerbackground from '../../assets/images/footer-bg.jpg'

export const DefaultFooter = styled.div `
    background-image: url(${footerbackground});
    width: 100%;
    background-size: fill;

        &::after{
            padding-top: 15%;
            display: block;
            content: '';
        }
`