import styled from "styled-components"

export const Content = styled.div`
    padding: 3% 10% 3% 3%;

    @media(max-width: 800px) {
        padding: 7% 15% 7% 7%
    }
`

export const ContentH1 = styled.h1 `
    margin-bottom: 1%;
    color: rgba(39,70,166,1);
`

export const ContentH2 = styled.h2 `
    font-weight: 400;
    font-size: 20px;
    color: rgb(75,75,75);
`

export const ContentP = styled.p `
    color: rgb(92,92,92)
`

export const LineRow = styled.hr `
    margin-bottom: 3%;
    color: rgb(142,142,142);
`