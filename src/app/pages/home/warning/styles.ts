import styled from "styled-components"

export const WarningContainer = styled.div`
    background-color: ${({ theme }) => theme["white-200"]};
    z-index: 999;

    width: 100%;

    p {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.125rem;

        text-align: center;

        padding: 1rem 0;

        a {
            color: ${({ theme }) => theme["blue-500"]};
            line-height: 1.125rem;
        }
    }
`