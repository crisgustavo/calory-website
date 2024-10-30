import styled from "styled-components";

export const DefaultListItem = styled.li `
    border: 1px #ffffff;
    border-radius: 15px;
    padding: 5px 15px;
    background: linear-gradient(180deg, rgba(82,165,231,1) 0%, rgba(39,70,166,1) 46%, rgba(2,41,160,1) 68%);
    color: #FFFFFF;
    text-align: center;
    min-width: max-content;
    box-shadow: 2px 2px 5px 2px black;

    &:hover{        
        cursor: pointer;
        transition: 0.5s;
        transition-property: font-size;
        font-size: 115%;
        opacity: 0.7;
    }
    &:active {
        opacity: .5;
    }

    @media(max-width: 800px) {
        font-size: 50%;
    }

    @media(max-width: 450px){
        font-size: 35%;
        padding: 5px 5px;
    }
`