import styled from "styled-components";

export const CtUnselectedCardGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 58vh;
    width: 26vh;
`;

export const CtUnselectedCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 89%;
    height: 100%;
    border: 5px dashed var(--main-color);
    border-radius: 0.90rem;
    overflow: hidden;
`;

export const CtSelectedCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 89%;
    height: 100%;
    border-radius: 0.90rem;
    overflow: hidden;
    transition: all 0.5s;
    box-shadow: ${(props) => props.revealedCard ? '0px 0px 15px 10px var(--secondary-color)' : 'none'}
`;

export const ImgSelectedCard = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

export const TxtUnselectedCard = styled.h3`
    font-family: var(--principal-font);
    font-size: 3rem;
    color: var(--secondary-color);
`;

export const TxtCardName = styled.p`
    font-family: var(--principal-font);
    font-size: 2.5rem;
    color: var(--secondary-color);
    margin: 0px;
`;