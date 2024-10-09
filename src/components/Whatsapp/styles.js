import styled from "styled-components";

export const DefaultWhatsapp = styled.img `
    width: 90px;
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 10;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }

    &:active {
        opacity: 0.5;
    }
`