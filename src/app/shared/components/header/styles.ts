import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;

    height: 5rem;
    max-width: 80rem;
    width: 100%;

    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 994px){
        justify-content: space-between;
    }
`

export const HeaderLogo = styled.div`
    width: 108px;
    height: 22px;

    margin-right: 2rem;
`

export const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 1.25rem;

    margin-right: 13.1875rem;

    a {
        text-decoration: none;

        color: ${({ theme }) => theme["gray-800"]};
        font-weight: 500;
    }

    @media (max-width: 994px){
        display: none;
    }
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    background-color: ${({ theme}) => theme["gray-100"]};

    padding: 8px 4px;
    border-radius: 4px;

    width: 22.625rem;

    margin-right: 1.5rem;

    input {
        background-color: transparent;
        border: none;
        outline: none;

        width: 100%;
    }

    @media (max-width: 994px){
        display: none;
    }
`

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.25rem;

    @media (max-width: 994px){
        display: none;
    }
`

export const OpenMenuMobile = styled.div`
    svg {
        cursor: pointer;
        color: ${({ theme }) => theme["blue-500"]};
    }

    @media (min-width: 994px){
        display: none;
    }
`