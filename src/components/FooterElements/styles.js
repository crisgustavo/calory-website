import styled from "styled-components";

export const DefaultFooterElements = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    justify-content: space-between;
    grid-template-areas: 'logo links' '. socialmedia';
`

export const Copyright = styled.p `
    margin-left: 30px;
    color: rgb(192,192,192);
    font-size: 13px;
    font-weight: 200;
`
