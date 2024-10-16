import styled from "styled-components";

export const DefaultFooterLogo = styled.img `
    padding: 30px;
    grid-area: logo;

    &:hover{
        opacity: 0.7;
    }

    &:active{
        opacity: 0.5;
    }

    @media(max-width: 800px) {
        width: 60%;
        padding: 30px 15px;
    }
`