import styled from "styled-components";

export const HeroContainer = styled.div`
    position: relative;

    overflow: hidden;

    max-width: 77.5rem;
    width: 100%;
    max-height: 25rem;

    margin: 1.5rem auto 0;
`

export const BaseImage = styled.div`
    border-radius: 1.5rem;   
    overflow: hidden;
`

export const HeroText = styled.div`
    background: rgba(222, 222, 222, 0.7);
    backdrop-filter: blur(2.5px); 
          
    max-width: 47.4375rem;
    width: 100%;
    max-height: 19.75rem;

    border-radius: 1.5rem 0 0 1.5rem;

    position: absolute;

    top: 2.5rem;
    right: 0;

    padding-left: 47px;
    

    h1 {
        color: ${({ theme }) => theme["blue-500"]};
        font-weight: 800;
        font-size: 3.75rem;

        margin-top: 1.5625rem;

    }
    
    h2 {
        color: ${({ theme }) => theme["blue-500"]};
        font-weight: 500;
        font-size: 1.75rem;
        line-height: 2.375rem;
    }
`   

export const HeroButton = styled.button`
    background-color: ${({ theme }) => theme["blue-500"]};

    border: none;
    border-radius: 8px;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.625rem 2.34375rem;

    color: ${({ theme}) => theme.white};
    font-weight: 500;

    margin-block: 1.9375rem 3.3125rem;
`