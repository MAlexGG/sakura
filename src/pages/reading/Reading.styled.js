import styled from "styled-components";

export const CtReadings = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 87vh;
`;

export const CtSelectedCards = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7vw;
`;

export const CtSelectedCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const CtImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 50vh;
    border-radius: 0.90rem;
    overflow: hidden;
`;

export const TxtStateCard = styled.h3`
    font-family: var(--principal-font);
    font-size: 2rem;
    color: var(--main-color);
    margin: 0px;
`;

export const TxtSelectedCardName = styled.p`
    font-family: var(--principal-font);
    font-size: 2.5rem;
    color: var(--secondary-color);
    margin: 0px;
`;

export const ImgSelectedCard = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
`;

export const CtReadingText = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;

export const CtCardText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TxtCardName = styled.h3`
    font-family: var(--principal-font);
    font-size: 1.5rem;
    color: var(--secondary-color);
    margin: 0px;
    height: 2rem;
`;

export const TxtCardMeaning = styled.p`
    font-family: var(--secondary-font);
    font-size: 1.25rem;
    color: var(--secondary-color);
    margin: 0px;
    height: 2rem;
    line-height: 2rem;
`;