import styled from "styled-components";

export const DefaultListItemTrial = styled.li `
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
    &:active {
        opacity: .5;
    }
`