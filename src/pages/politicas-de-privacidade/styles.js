import styled from "styled-components"

export const Content = styled.div `
    padding: 2%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;

    @media(max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        padding: 5%;
    }
`

export const Product = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 20px;

    &:hover {
        .plus {
            visibility: visible;
        }

        .producth1 {
            color: rgba(39,70,166,1)
        }
    }
`

export const Plus = styled.img `
    width: 7%;
    position: absolute;
    align-self: center;
    justify-self: center;
    opacity: 0.7;
    z-index: 10;
    visibility: hidden;

    &:hover {
        cursor: pointer;
    }

    &:active {
        opacity: 0.5;
    }

    @media(max-width: 800px) {
        margin-top: 20%;
        margin-left: -5%;
    }
`

export const ProductH1 = styled.h1 `
    font-size: 23px;
`

export const ProductP = styled.p `
    font-size: 13px;
    color: rgb(142,142,142);
    font-weight: 500;
`