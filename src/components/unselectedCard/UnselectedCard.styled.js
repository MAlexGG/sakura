import styled, { keyframes } from "styled-components";

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
    border: 3px dashed var(--main-color);
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
    box-shadow: ${(props) => props.revealedCard ? '0px 0px 15px 10px var(--secondary-color)' : 'none'};
    position: relative;
`;

const bounce = keyframes`
	0% {top: 0;-webkit-animation-timing-function: ease-in;} 
	40% {}
	50% {top: 20rem; height: 15%; -webkit-animation-timing-function: ease-out;}
	55% {top: 15rem; height: 15%; -webkit-animation-timing-function: ease-in;}
	65% {top: 10rem; height: 15%; -webkit-animation-timing-function: ease-out;}
	95% {top: 0; -webkit-animation-timing-function: ease-in;}
	100% {top: 0; -webkit-animation-timing-function: ease-in;}
`;

export const CtOpenCard = styled.div`
    display: ${(props) => props.revealMsg ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    width: 62%;
    height: 13%;
    background: var(--secondary-color);
    color: var(--main-color);
    font-family: var(--principal-font);
    font-size: 2.5rem;
    box-shadow: 0px 0px 15px 10px var(--secondary-color); 
    animation-name: ${bounce};
    animation-duration: 2s;
    transform: translateY(0px);
    animation-iteration-count: infinite;
    position:absolute;
    opacity: 0.8;
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
    font-size: 2rem;
    color: var(--secondary-color);
    margin: 0px;
`;