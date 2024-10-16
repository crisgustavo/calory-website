import styled from "styled-components";

export const DefaultFooterLinks = styled.ul `
    display: flex;
    justify-content: right;
    gap: 10px;
    margin-right: 30px;
    grid-area: links;

    @media(max-width: 800px) {
        font-size: 12px;
        gap: 8px;
        width: max-content;
        margin-right: 15px;
    }
`