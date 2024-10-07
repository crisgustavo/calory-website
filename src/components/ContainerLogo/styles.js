import styled from "styled-components";

export const DefaultContainerLogo = styled.img `
    width: 40%;
    align-self: center;
    margin-top: -9%;
    margin-bottom: -9%;
    z-index: 1;
    &:hover {
        opacity: .7;
        cursor: pointer;
    }
    &:active {
        opacity: .5;
    }
`