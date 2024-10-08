import styled from "styled-components";

export const DefaultFooterElements = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: max-content max-content;
    align-items: center;
    justify-content: space-between;
    grid-template-areas: 'logo links' '. socialmedia';
`