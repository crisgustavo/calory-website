import styled from "styled-components";

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
        width: 50px;
    }
`