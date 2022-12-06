import styled from "styled-components";

export const CtUnselectedCardGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CtUnselectedCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13.18rem;
    height: 29.37rem;
    border: 5px dashed var(--main-color);
    border-radius: 0.30rem;
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