import styled from "styled-components";

export const DefaultListMenu = styled.ul `
    list-style: none;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    color: rgb(92, 92, 92);

    @media(max-width: 995px) {
        font-size: 80%;
        gap: 5px;
        justify-content: center;
        align-items: center;
    }

    @media(max-width: 800px) {
        display: grid;
        grid-template-columns: max-content;
        font-size: 50%;
        gap: 10px;
        height: max-content;
        overflow: visible;
    }

    @media (max-width: 450px) {
        display: grid;
        grid-template-columns: max-content;
        font-size: 35%;
        gap: 10px;
        height: max-content;
        overflow: visible;
        padding: 10px;
        margin-left: -5%;
    }
`