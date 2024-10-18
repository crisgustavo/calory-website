import styled from "styled-components";

export const DefaultListItem = styled.li `
    border: 1px #ffffff;
    border-radius: 15px;
    padding: 5px;
    background: linear-gradient(180deg, rgba(82,165,231,1) 0%, rgba(39,70,166,1) 46%, rgba(2,41,160,1) 68%);
    //background: linear-gradient(180deg, #52A5E7 0%, #0229A0 100%);
    //background: linear-gradient(180deg, #4c2cff7c 0%, #2000d8 100%);
    /*background: linear-gradient(180deg, #ffffff7c 0%, #9c9c9c 100%);*/
    color: #FFFFFF;
    text-align: center;
    min-width: max-content;

    &:hover{        
        //background: linear-gradient(180deg, #4c2cff7c 0%, #2000d8 100%);
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
        font-size: 100%;
        width: max-content;
        padding: 0% 20%;
    }
`