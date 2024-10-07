import styled from "styled-components";

export const DefaultContainerPhone = styled.div`
    display: grid;
        img {
            grid-area: img;
            padding: 7px;
            width: 60%;
        };
        h3 {
            grid-area: h3;
            align-self: flex-end;
            justify-self: left;
            padding: 0px 5px;
        };
        p {
            grid-area: p;
            justify-self: left;
            z-index: 10;
            padding: 0px 5px 5px;
            font-size: 80%;
        };
    grid-template-areas: 'img h3' 'img p ';
    height: 64px;
    overflow: hidden;

    &:hover{
        transition: 2s ease-in-out;
        transition-property: overfow;
        overflow: visible;
        p {
            background: white;
            border: 1px solid rgb(92,92,92);
            border-radius: 5px;
        }
        
    }
`