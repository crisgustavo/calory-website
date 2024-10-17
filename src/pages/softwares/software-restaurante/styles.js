import styled from "styled-components";

export const PageContentImage = styled.img `
    width: 380px;
    height: 220px;
    border: 3px solid rgb(142,142,142);
    border-radius: 15px;

    @media(max-width: 800px) {
        width: 100%;
        height: auto;
    }
`