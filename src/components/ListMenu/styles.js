import styled from "styled-components";

export const DefaultListMenu = styled.ul `
    list-style: none;
    width: 100%;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-content: space-between;
    font-weight: 500;
    color: rgb(92, 92, 92);

    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        font-size: 100%;
        gap: 5px;
        justify-content: center;
        align-items: center;
    }
`