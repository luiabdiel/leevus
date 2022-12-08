import styled from "styled-components";

export const ArrivalsContainer = styled.section`
    max-width: 80rem;
    width: 100%;

    margin: 4.25rem auto 0;
    padding: 0 20px;

    h1 {
        color: ${({ theme }) => theme.dark};
        font-size: 2.125rem;
        font-weight: 600;

        margin-bottom: 1.484375rem;
    }
`

export const CardsList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`