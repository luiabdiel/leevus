import styled from "styled-components";

export const CardContainer = styled.div`
    width: 17.75rem;
    height: 25.75rem;


`

export const CardContent = styled.div`
    >div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-block: 0.56250rem .5rem;

        span {
            font-weight: 500;
        }

        img {
            width: 24px;
        }
    }

    p {
        color: ${({ theme }) => theme["gray-600"]};
        font-size: 0.875rem;

        margin-bottom: 0.5rem;
    }

    strong {
        font-weight: 500;
    }
`